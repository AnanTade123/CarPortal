import { useState, useEffect } from "react";
import Inputs from "../../forms/Inputs";
import { Textarea, Input } from "@material-tailwind/react";
import { useCarRegisterMutation } from "../../services/carAPI";
import { useNavigate, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import {useGetOnlyBrandsQuery,useGetVariantsQuery, useGetSubVariantsQuery} from "../../services/brandAPI";
export default function AddDealerCar() {
  const { data: brandData } = useGetOnlyBrandsQuery();
  const brands = brandData?.list.map((item) => item.brand) || [];

  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [modelOptions, setModelOptions] = useState([]);
  const [variantOptions, setVariantOptions] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const { data: variantData } = useGetVariantsQuery(selectedBrand, {
    skip: !selectedBrand,
  });

  const { data: subVariantData } = useGetSubVariantsQuery(
    { brand: selectedBrand, variant: selectedModel },
    {
      skip: !selectedBrand || !selectedModel,
    }
  );

  const [carRegister] = useCarRegisterMutation();
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

  const { id } = useParams();
  const navigate = useNavigate();
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      ...formData,
      carStatus: "ACTIVE",
      dealer_id: id,
      date: formattedDate,
    };

    const res = await carRegister(data);
    if (res?.data?.status === "success") {
      toast.success("Car Added");
      setTimeout(() => {
        navigate(`/dealer/${id}/uploadimage`);
      }, 2000);
    }
  };

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    setFormData({
      ...formData,
      brand,
      model: '',
      cVariant: '',
    });
  };

  const handleModelChange = (event) => {
    const model = event.target.value;
    setSelectedModel(model);
    setFormData({
      ...formData,
      model,
      cVariant: '',
    });
  };

  const handleVariantChange = (event) => {
    const cVariant = event.target.value;
    setFormData({
      ...formData,
      cVariant,
    });
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setFormData({
      ...formData,
      city: selectedCity,
      registration: "",
    });
  };

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

  useEffect(() => {
    if (variantData) {
      const models = variantData.list.map((item) => item.variant) || [];
      setModelOptions(models);
    }
  }, [variantData]);

  useEffect(() => {
    if (subVariantData) {
      const variants = subVariantData.list.map((item) => item.subVariant) || [];
      setVariantOptions(variants);
    }
  }, [subVariantData]);

  return (
    <>
      <ToastContainer />
      <div className="md:flex justify-center m-6 md:m-0">
        <div>
          <form onSubmit={handleSubmit} className="w-full md:w-[50rem]">
            <div className="flex justify-center">
              <p className="text-3xl font-semibold m-4">Add Dealer Car</p>
            </div>
            <div className="md:flex gap-2">
            <div className="mt-5 w-full">
                <select
                  required
                  className="w-full border-2 border-gray-400 p-2 rounded-md"
                  value={selectedBrand}
                  onChange={handleBrandChange}
                >
                  <option value="">Brands</option>
                  {brands.map((brand) => (
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
            <div className="md:flex">
            <div className="mt-5 w-full">
                <select
                  className="w-full border-2 border-gray-400 p-2 rounded-md"
                  name="cVariant"
                  value={formData.cVariant}
                  onChange={handleVariantChange}
                  disabled={!modelOptions.length}
                >
                  <option value="">Car Variant</option>
                  {variantOptions.map((cVariant) => (
                    <option key={cVariant} value={cVariant}>
                      {cVariant}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5 md:ml-2 w-full">
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
            <div className="md:flex">
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

              <div className="mt-5 md:ml-2 w-full">
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
                  {[...Array(new Date().getFullYear() - 2004)].map((_, index) => {
                    const year = 2005 + index;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="md:flex">
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
                  {[
                    "Red",
                    "Blue",
                    "Yellow",
                    "Pink",
                    "Purple",
                    "White",
                    "Black",
                    "Orange",
                    "Green",
                    "Brown",
                    "Gold",
                    "Aqua",
                  ].map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5 md:ml-2 w-full">
                <select
                  className="w-full border-2 border-gray-400 p-2 rounded-md"
                  name="ownerSerial"
                  value={formData.ownerSerial}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      ownerSerial: event.target.value,
                    })
                  }
                >
                  <option value="" disabled>
                    Select Owner Serial
                  </option>
                  {["1st", "2nd", "3rd", "4th", "5th"].map((serial) => (
                    <option key={serial} value={serial}>
                      {serial}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="md:flex">
              <div className="mt-5 w-full">
                <Inputs
                  label={"Body Type"}
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
              </div>

              <div className="mt-5 md:ml-2 w-full">
                <Inputs
                  label={"KM Driven"}
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
            </div>

            <div className="md:flex">
              <div className="mt-5 w-full">
                <Inputs
                  label={"Title"}
                  type={"text"}
                  name={"title"}
                  value={formData.title}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      title: event.target.value,
                    })
                  }
                />
              </div>

              <div className="mt-5 md:ml-2 w-full">
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

            <div className="md:flex">
              <div className="mt-5 w-full">
                <select
                  className="w-full border-2 border-gray-400 p-2 rounded-md"
                  label={"fuelType"}
                  type={"text"}
                  name={"fuelType"}
                  value={formData.fuelType}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      fuelType: event.target.value,
                    })
                  }
                >
                  <option>Fuel Type</option>
                  {["Petrol", "Diesel", "CNG", "Electric", "Hybrid"].map(
                    (fuel) => (
                      <option key={fuel} value={fuel}>
                        {fuel}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="mt-5 md:ml-2 w-full">
                <select
                  className="w-full border-2 border-gray-400 p-2 rounded-md"
                  name="city"
                  value={formData.city}
                  onChange={handleCityChange}
                >
                  <option>Select City</option>
                  {[
                    "Karachi",
                    "Lahore",
                    "Faisalabad",
                    "Rawalpindi",
                    "Hyderabad",
                    "Multan",
                    "Gujranwala",
                    "Peshawar",
                    "Quetta",
                    "Sialkot",
                    "Islamabad",
                    "Bahawalpur",
                  ].map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <Textarea
                label="Description"
                name="description"
                value={formData.description}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    description: event.target.value,
                  })
                }
              />
            </div>

            <div className="mt-5">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Car Insurance
              </label>
              <div className="flex items-center">
                <label className="mr-4">
                  <input
                    type="radio"
                    name="carInsurance"
                    value="true"
                    checked={formData.carInsurance === true}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="carInsurance"
                    value="false"
                    checked={formData.carInsurance === false}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
              {showCalendar && (
                <div className="mt-5">
                  <Input
                    type="date"
                    name="insurancedate"
                    value={formData.insurancedate}
                    onChange={handleDateChange}
                    label="Insurance Date"
                  />
                </div>
              )}
            </div>

            <div className="mt-5 flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Add Car
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
