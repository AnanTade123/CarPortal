/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Inputs from "../../forms/Inputs";
import { Input, Textarea } from "@material-tailwind/react";
import React from "react";
import {
  useCarUpdateMutation,
  useGetCarByIdQuery,
} from "../../services/carAPI";
import { useNavigate, useParams } from "react-router-dom";

export default function EditDealerCar() {
  const { id, carId } = useParams();
  const { data: Carid } = useGetCarByIdQuery(carId);
  console.log("Carid data :- ", Carid);
  console.log(id, carId);
  const navigate = useNavigate()
  const [carUpdate] = useCarUpdateMutation(carId);
  const [formData, setFormData] = useState({
    //features
    acFeature: false,
    musicFeature: false,
    powerWindowFeature: false,
    rearParkingCameraFeature: false,

    // fields
    brand: "",
    bodyType: "",
    price: "",
    model: "",
    year: "",
    transmission: "",
    color: "",
    city: "",
    fuelType: "",
    kmDriven: "",
    carInsurance: "",
    registration: "",
    description: "",
    title: "",
    area: "",
    carStatus: "Active",
    ownerSerial: "",
    dealer_id: "",
    cVariant: "",
    insurancedate: "",
  });
  const date = new Date(); // Create a new Date object with the current date
  const year = date.getFullYear(); // Get the year (e.g., 2024)
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Get the month (0-indexed, so add 1), pad with leading zero if needed
  const day = String(date.getDate()).padStart(2, "0"); // Get the day of the month, pad with leading zero if needed

  const formattedDate = `${year}-${month}-${day}`;
  const [showCalendar, setShowCalendar] = useState(false);
  useEffect(() => {
    if (Carid) {
      const { object } = Carid;
      setFormData({
        brand: object?.brand || "",
        model: object?.model || "",
        price: object?.price || "",
        year: object?.year || "",
        bodyType: object?.bodyType || "",
        transmission: object?.transmission || "",
        color: object?.color || "",
        city: object?.city || "",
        fuelType: object?.fuelType || "",
        kmDriven: object?.kmDriven || "",
        carInsurance: object?.carInsurance || "",
        registration: object?.registration || "",
        description: object?.description || "",
        area: object?.area || "",
        ownerSerial: object?.ownerSerial || "",
        tyre: object?.tyre || "",
        dealer_id: object?.dealer_id || "",
        title: object?.title || "",
      });
    }
  }, [Carid]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the form data to send to the backend
    const data = {
      acFeature: formData.acFeature,

      musicFeature: formData.musicFeature,

      area: formData.area,

      brand: formData.brand,

      carInsurance: formData.carInsurance,

      carStatus: "ACTIVE",

      // city: formData.city,

      color: formData.color,

      description: formData.description,

      fuelType: formData.fuelType,

      kmDriven: formData.kmDriven,

      model: formData.model,

      ownerSerial: formData.ownerSerial,

      powerWindowFeature: formData.powerWindowFeature,

      price: formData.price,

      rearParkingCameraFeature: formData.rearParkingCameraFeature,

      registration: formData.registration,

      transmission: formData.transmission,

      title: formData.title,

      variant: formData.cVariant,

      carInsuranceDate: formData.insurancedate,

      year: formData.year,

      dealer_id: id,

      date: formattedDate,
    };
    console.log(data);

    const res = await carUpdate({data,carId});
    console.log(res);
    if(res?.data?.status === 'success'){
      navigate("/editimage", { state: { images: mult } });
    }
    // console.log(data);
    // addCar(data).then((responseData) => {
    //   console.log(responseData);
    //   if (responseData?.error) return;
    //  // navigate("/dealer");
    // });
  };

  const [mult, setMult] = React.useState([]);

   // Car Insurance ValidDate
   const handleChange = (event) => {
    const value = event.target.value === "true";
    setFormData((prevFormData) => ({
      ...prevFormData,
      carInsurance: value,
    }));
    setShowCalendar(value);
  };

  const handleDateChange = (event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      insurancedate: value,
    }));
  };
  const handleFileChange = (e) => {
    setMult(Array.from(e.target.files));
  };
  return (
    <div className="flex justify-center">
      <div>
        <form onSubmit={handleSubmit} className="w-[50rem]">
          <div className="flex justify-center">
            <p className="text-3xl font-semibold m-4">Edit Dealer Car</p>
          </div>
          {/* first part */}
          <div className="flex ">
            <div className="w-full">
              <Inputs
                label={"Brand"}
                type={"text"}
                name={"Brand"}
                value={formData.brand}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    brand: event.target.value,
                  })
                }
              />
            </div>

            <div className="ml-2 w-full">
              <Inputs
                label={"model"}
                type={"text"}
                name={"model"}
                value={formData.model}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    model: event.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* second part */}
          <div className="flex">
            <div className="mt-5 w-full">
              <Inputs
                label={"price"}
                type={"number"}
                name={"price"}
                value={formData.price}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    price: event.target.value,
                  })
                }
              />
            </div>

            <div className="mt-5 ml-2 w-full">
              <Inputs
                label={"year"}
                type={"number"}
                name={"year"}
                value={formData.year}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    year: event.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* third part */}
          <div className="flex">
            {/* <div className="mt-5 w-full">
            <Inputs
              label={"bodyType"}
              type={"text"}
              name={"bodyType"}
              value={formData.bodyType}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  bodyType: event.target.value,
                })
              }
            />
          </div> */}
            <div className="mt-5 w-full">
              <select
                required
                className="w-full border-2 border-gray-400 p-2 rounded-md"
                name="transmission"
                value={formData.transmission}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    transmission: event.target.value,
                  });
                }}
              >
                <option>Transmission</option>
                <option>Automatic</option>
                <option>Manual</option>
              </select>
            </div>

            <div className="mt-5 ml-2 w-full">
            
              <Inputs
                label={"Area"}
                type={"text"}
                name={"area"}
                value={formData.area}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    area: event.target.value,
                  })
                }
              />
           
            </div>
          </div>

          {/* fourth part */}
          <div className="flex">
            <div className="mt-5 w-full">
              <Inputs
                label={"Color"}
                type={"text"}
                name={"color"}
                value={formData.color}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    color: event.target.value,
                  })
                }
              />
            </div>

            <div className="mt-5 ml-2 w-full">
            <select
                className="w-full border-2 border-gray-400 p-2 rounded-md"
                label={"Owner Serial"}
                type={"number"}
                name={"ownerSerial"}
                value={formData.type}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    ownerSerial: event.target.value,
                  })
                }
              >
                <option>Owner Serial</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>

          {/* fifth part */}
          <div className="flex">
            <div className="mt-5 w-full">
              <Inputs
                label={"Registration"}
                type={"text"}
                name={"registration"}
                value={formData.registration}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    registration: event.target.value,
                  })
                }
              />
            </div>

            <div className="mt-5 md:ml-2 w-full">
              <select
                required
                className="w-full border-2 border-gray-400 p-2 rounded-md"
                name="carInsurance"
                value={formData.carInsurance}
                onChange={handleChange}
              >
                <option value="">Car Insurance</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              {showCalendar && (
                <div className="mt-3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="date"
                  >
                    Select Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={formData.insurancedate}
                    onChange={handleDateChange}
                    className="w-full border-2 border-gray-400 p-2 rounded-md"
                  />
                </div>
              )}
            </div>
          </div>

          {/* sixth part */}
          <div className="flex">
            <div className="mt-5 w-full">
              <Inputs
                label={"Km Driven"}
                type={"number"}
                name={"kmDriven"}
                value={formData.kmDriven}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    kmDriven: event.target.value,
                  })
                }
              />
            </div>

            <div className="mt-5 ml-2 w-full">
              <select
                required
                className="w-full border-2 border-gray-400 p-2 rounded-md"
                name="fuelType"
                value={formData.fuelType}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    fuelType: event.target.value,
                  });
                }}
              >
                <option>Fuel Type</option>
                <option>Petrol</option>
                <option>Diesel</option>
                <option>Electric</option>
                <option>CNG</option>
                <option value="Petrol,CNG">Petrol+CNG</option>

              </select>
            </div>
          </div>

        

          {/* eight part */}

         

          {/* ninth part */}
          <div className="flex">
            <div className="mt-5 ml-5">
              <input
                label={"Music Feature"}
                type={"checkbox"}
                name={"musicFeature"}
                value={formData.musicFeature}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    musicFeature: event.target.value,
                  })
                }
              />{" "}
              Music
            </div>

            <div className="mt-5 ml-5">
              <input
                label={"Power Window Feature"}
                type={"checkbox"}
                name={"powerWindowFeature"}
                value={formData.powerWindowFeature}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    powerWindowFeature: event.target.value,
                  })
                }
              />{" "}
              Power Windows
            </div>

            <div className="mt-5 ml-5">
              <input
                label={"Ac Feature"}
                type={"checkbox"}
                name={"acFeature"}
                value={formData.acFeature}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    acFeature: event.target.value,
                  })
                }
              />{" "}
              Air Conditioning
            </div>

            <div className="mt-5 ml-5">
              <input
                label={"Rear Parking Camera Feature"}
                type={"checkbox"}
                name={"rearParkingCameraFeature"}
                value={formData.rearParkingCameraFeature}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    rearParkingCameraFeature: event.target.value,
                  })
                }
              />{" "}
              Rear Parking Camera
            </div>
          </div>

          {/* tenth part */}

          {/* <div className="mt-5">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />

            <div>
              {mult.map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`Image ${index + 1}`}
                  style={{
                    maxWidth: "500px",
                    maxHeight: "500px",
                    margin: "5px",
                  }}
                />
              ))}
            </div>
          </div> */}

          {/* eleventh part */}
          <div className="mt-5">
          <h4>Title</h4>
            <div className="formrow">
              <Input
                required
                className="form-control"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    title: event.target.value,
                  });
                }}
              ></Input>
            </div>
          </div>

          <div className="mt-5">
            <h4>Vehicle Description</h4>
            <div className="formrow">
              <Textarea
                required
                className="form-control"
                name="description"
                placeholder="Vehicle Description"
                value={formData.description}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    description: event.target.value,
                  });
                }}
              ></Textarea>
            </div>
          </div>
          {/* twelth part */}

          <button
            type="submit"
            className="p-3 bg-indigo-400 rounded-md w-28 text-white"
            value="Add  Car"
          >
            {" "}
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
