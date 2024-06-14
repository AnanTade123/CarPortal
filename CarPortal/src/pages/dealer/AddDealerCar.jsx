import { useState } from "react";
// import Inputs from "../../forms/Inputs";
import { Textarea, Input } from "@material-tailwind/react";
// import React from "react";
import { useCarRegisterMutation } from "../../services/carAPI";
import { useNavigate, useParams } from "react-router";

const carData = {
  Kia: ["Sonet", "Seltos", "Carnival"],
  Volkswagen: ["Polo", "Vento", "Taigun", "Virtus"],
  Mahindra: [
    "XUV300",
    "XUV301",
    "XUV302",
    "XUV303",
    "XUV304",
    "XUV305",
    "XUV306",
    "XUV307",
    "XUV308",
    "XUV700",
    "XUV701",
    "XUV702",
    "XUV703",
    "Thar",
    "Scorpio",
    "Bolero",
    "Marazzo",
  ],
  MarutiSuzuki: [
    "Swift",
    "Baleno",
    "Vitara Brezza",
    "Ertiga",
    "Alto K10",
    "Dzire",
    "Wagon R",
    "XL6",
    "Celerio",
    "Jimny",
    "Ignis",
    "Eeco",
    "Invicto",
    "Ciaz",
  ],
  Citroen: ["C3", "C3 Aircross", "eC3", "C5 Aircross"],
  Tata: [
    "Tigor",
    "Altroz",
    "Harrier",
    "Safari",
    "Hexa",
    "Tigor EV",
    "Nexon EV",
    "Punch",
  ],

  Hyundai: [
    "Verna",
    "i20",
    "Venue",
    "Creta",
    "Santro",
    "Grand i10 Nios",
    "Aura",
    "Exter",
    "Alcazar",
  ],
  Honda: ["City", "Amaze", "WR-V"],
  BMW: [
    "3 Series",
    "5 Series",
    "X1",
    "X3",
    "X5",
    "7 Series",
    "X7",
    "iX1",
    "i4",
    "i7",
    "i5",
    "iX1",
    "XM",
    "BMW M340i",
    "2 Series Gran Coupe",
    "M4",
  ],
  Toyota: [
    "Fortuner",
    "Urban Cruiser",
    "Innova Crysta",
    "Innova Hycross",
    "Glanza",
  ],
  ISUZU: ["V-cross", "MU-X"],
  Skoda: ["Kushaq", "Slavia", "Superb", "Kodiaq", "Rapid"],
  LandRover: [
    "Discovery",
    "Range Rover Sport",
    "Discovery Sport",
    "Range Rover",
    "Defender",
    "Range Rover Velar",
    "Range Rover Evoque",
    "",
  ],
  Fiat: [],
  Nissan: ["Magnite"],
  Volvo: ["S90", "XC60", "XC90"],
  AstonMartin: [],
  McLaren: [],
  Ferrari: [],
  Maserati: [],
  MINI: [],
  Bugatti: [],
  ForceMotors: ["Trax Cruiser"],
  Force: ["Gurkha"],
  Bentley: ["Bentayga", "Flying Spur", "Continental"],
  Audi: [
    "e-tron",
    "Q8",
    "A8L",
    "RS Q8",
    "RS5",
    "Q5",
    "A6",
    "Q7",
    "S5",
    "e-tron GT",
    "Q3 Sportback",
    "Q3",
    "A4",
  ],
  Porsche: [
    "911",
    "Taycan",
    "Macan",
    "Cayenne",
    "Panamera",
    "718",
    "Taycan Cross Turismo",
    "Cayenne Coupe",
    "Macan Turbo EV",
  ],
  MercedesBenz: [
    "EQC",
    "AMG GT",
    "AMG G-Class",
    "AMG E-Class",
    "AMG C-Class",
    "S-Class Coupe",
    "C-Class Coupe",
    "E-Class Coupe",
    "GLS",
    "GLE",
    "GLC",
    "GLB",
    "GLA",
    "S-Class",
    "E-Class",
    "C-Class",
    "A-Class Limousine",
  ],
  Others: [],
};

const cityOptions = {
  Pune: ["MH-12"],
  PimpriChichwad: ["MH-14"],
  Mumbai: ["MH-01", "MH-02", "MH-03", "MH-47"],
  Amravati: ["MH-27"],
  Yavatmal: ["MH-29"],
  Chandrapur: ["MH-34"],
  Kolhapur: ["MH-09"],
  Solapur: ["MH-13", "MH-45"],
  Nanded: ["MH-26"],
  Latur: ["MH-24"],
  Satara: ["MH-11"],
  Sangli: ["MH-10"],
  Nashik: ["MH-15", "MH-51"],
  Beed: ["MH-23"],
  Jalna: ["MH-21"],
  Nagpur: ["MH-31", "MH-49", "MH-40"],
  Gondia: ["MH-35"],
  Gadchiroli: ["MH-33"],
  Bhandara: ["MH-36"],
  Washim: ["MH-37"],
  Jalgaon: ["MH-19"],
  Akola: ["MH-30"],
  Buldhana: ["MH-28"],
  Dhule: ["MH-18"],
  Nandurbar: ["MH-39"],
  Thane: ["MH-04", "MH-05", "MH-48"],
  Raigad: ["MH-06"],
  Ratnagiri: ["MH-08"],
  Sindhudurg: ["MH-07"],
  Ahmednagar: ["MH-16"],
  Dharashiv: ["MH-25"],
  SambhajiNagar: ["MH-20"],
};

export default function AddDealerCar() {
  const [carRegister] = useCarRegisterMutation();
  //  const [mult, setMult] = React.useState([]);
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
  });
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const date = new Date(); // Create a new Date object with the current date
  const year = date.getFullYear(); // Get the year (e.g., 2024)
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Get the month (0-indexed, so add 1), pad with leading zero if needed
  const day = String(date.getDate()).padStart(2, "0"); // Get the day of the month, pad with leading zero if needed

  const formattedDate = `${year}-${month}-${day}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
console.log(formData)
    // Prepare the form data to send to the backend
    const data = {
      acFeature: formData.acFeature,

      musicFeature: formData.musicFeature,

      area: formData.area,

      brand: formData.brand,

      carInsurance: formData.carInsurance,

      carStatus: "ACTIVE",

      city: formData.city,

      color: formData.color,

      description: formData.description,

      fuelType: formData.fuelType,

      kmDriven: formData.kmDriven,

      model: formData.model,

      ownerSerial: formData.ownerSerial,

      powerWindowFeature: formData.powerWindowFeature,

      price: formData.price,

      rearParkingCameraFeature: formData.rearParkingCameraFeature,

      registration: formData.city,

      transmission: formData.transmission,

      title: formData.title,

      year: formData.year,

      dealer_id: id,

      date: formattedDate,
    };
console.log(data)
    const res = await carRegister(data);
    console.log(res);
    if (res?.data?.status === "success") {
      alert("car added");
      navigate`(/dealer/${id}/uploadimage)`;
    }
  };

  //Two field Brands and Model
  const [selectedBrand, setSelectedBrand] = useState("");
  const [modelOptions, setModelOptions] = useState([]);
  //const [formDataC, setFormDataC] = useState({ carInsurance: "" });
  const [showCalendar, setShowCalendar] = useState(false);

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    setModelOptions(carData[brand] || []);
    setFormData({
      ...formData,
      brand,
      model: "", // Reset model when brand changes
    });
  };
  //End Brands and Model
  // Model Change
  const handleModelChange = (event) => {
    const model = event.target.value;
    setFormData({
      ...formData,
      model,
    });
  };

  // City Change
  // const handleCityChange = (event) => {
  //   const city = event.target.value;
  //   setFormData({ ...formData, city, registration: "" });
  // };

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

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setFormData({
      city: selectedCity,
      registration: "", // Reset registration when city changes
    });
  };

  return (
    <div className="flex justify-center">
      <div>
        <form onSubmit={handleSubmit} className="w-[50rem]">
          <div className="flex justify-center">
            <p className="text-3xl font-semibold m-4">Add Dealer Car</p>
          </div>
          {/* first part */}
          <div className="flex gap-2">
            <div className="mt-5 w-full">
              <select
                required
                className="w-full border-2 border-gray-400 p-2 rounded-md"
                value={selectedBrand}
                onChange={handleBrandChange}
              >
                <option value="">Brands</option>
                {Object.keys(carData).map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5 w-full">
              <select
                required
                className="w-full border-2 border-gray-400 p-2 rounded-md"
                value={formData.model}
                onChange={handleModelChange}
                disabled={!selectedBrand}
              >
                <option value="">Models</option>
                {modelOptions.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* second part */}
          <div className="flex">
            <div className="mt-5 w-full">
              <select
                className="w-full border-2 border-gray-400 p-2 rounded-md"
                label={"Car Variant"}
                type={"text"}
                name={"cVariant"}
                value={formData.cVariant}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    cVariant: event.target.value,
                  })
                }
              >
                <option>Car Variant</option>
                <option>HTE 1.2</option>
                <option>HTK 1.2</option>
                <option>M60 xDrive</option>
              </select>
            </div>

            <div className="mt-5 ml-2 w-full">
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
          </div>
          <div className="flex">
            <div className="mt-5 w-full">
              <Input
                label="Price"
                type="number"
                name="price"
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
              <select
                className="w-full border-2 border-gray-400 p-2 rounded-md"
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
              >
                <option>Year</option>
                <option>2005</option>
                <option>2006</option>
                <option>2007</option>
                <option>2008</option>
                <option>2009</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
            </div>
          </div>

          {/* fourth part */}
          <div className="flex">
            <div className="mt-5 w-full">
              <select
                className="w-full border-2 border-gray-400 p-2 rounded-md"
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
              >
                <option>Color</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Pink</option>
                <option>Purple</option>
                <option>White</option>
                <option>Black</option>
                <option>Orange</option>
                <option>Green</option>
                <option>Brown</option>
                <option>Gold</option>
                <option>Aqua</option>
              </select>
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
          <div className="md:flex">
            <div className="mt-5 w-full">
              <Input
                label="Area"
                type="text"
                name="area"
                value={formData.area}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    area: event.target.value,
                  })
                }
              />
            </div>

            <div className="mt-5 ml-2 w-full">
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
              <Input
                label="Km Driven"
                type="number"
                name="kmDriven"
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
              </select>
            </div>
          </div>

          {/* eight part */}

          <div className="md:flex">
            <div className="mt-5 w-full">
              <select
                className="w-full border-2 border-gray-400 p-2 rounded-md"
                name="city"
                value={formData.city}
                onChange={handleCityChange}
              >
                <option value="">City</option>
                {Object.keys(cityOptions).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5 md:ml-2 w-full">
              <select
                className="w-full border-2 border-gray-400 p-2 rounded-md"
                name="registration"
                value={formData.registration}
                onChange={(event) =>
                  setFormData({ ...formData, registration: event.target.value })
                }
                disabled={!formData.city}
              >
                <option value="">Registration</option>
                {cityOptions[formData.city]?.map((reg) => (
                  <option key={reg} value={reg}>
                    {reg}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="mt-5 w-[50%]">
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
          </div> */}

          {/* ninth part */}
          <div className="flex">
            <div className="mt-5 ml-5">
              <input
                label="Music Feature"
                type="checkbox"
                name="musicFeature"
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
                label="Power Window Feature"
                type="checkbox"
                name="powerWindowFeature"
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
                label="Ac Feature"
                type="checkbox"
                name="acFeature"
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
                label="Rear Parking Camera Feature"
                type="checkbox"
                name="rearParkingCameraFeature"
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
          <div className="mt-5 mb-2">
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
          {/* eleventh part */}

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

          {/* <div className="mt-5 mb-2">
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
          </div> */}

          <button
            type="submit"
            className="p-3 bg-indigo-400 rounded-md w-28 text-white"
            value="Add  Car"
          >
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}