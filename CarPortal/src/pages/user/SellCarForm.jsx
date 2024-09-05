/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import {
  Button,
  CardBody,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useParams } from "react-router";
import {
    useUserSellFormMutation
} from "../../services/userAPI";

import {
  useGetOnlyBrandsQuery,
  useGetVariantsQuery,
  useGetSubVariantsQuery,
} from "../../services/brandAPI";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";



export default function SellCarForm() {
    const [userRegister] = useUserSellFormMutation();

  // Form state
  const [formData, setFormData] = useState({
    carOwnerName: "",
    brand: "",
    model: "",
    variant: "",
    regNo: "",
    address1: "",
    address2: "",
    pinCode: "",
    rc: "",
    date: "",
    datetime: "",
  
  });

  const { data: brandData } = useGetOnlyBrandsQuery();
  const brands = brandData?.list.map((item) => item.brand) || [];
  // console.log(brands);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [modelOptions, setModelOptions] = useState([]);
  const [variantOptions, setVariantOptions] = useState([]);

  const { data: variantData } = useGetVariantsQuery(selectedBrand, {
    skip: !selectedBrand,
  });
  // console.log(variantData);
  const { data: subVariantData } = useGetSubVariantsQuery(
    { brand: selectedBrand, variant: selectedModel },
    {
      skip: !selectedBrand || !selectedModel,
    }
  );

  //   const [pinCodeError, setPinCodeError] = useState("");

  //   const timeSlots = [
  //     "09:00 AM - 10:00 AM",
  //     "10:00 AM - 11:00 AM",
  //     "11:00 AM - 12:00 PM",
  //     "12:00 PM - 01:00 PM",
  //     "01:00 PM - 02:00 PM",
  //     "02:00 PM - 03:00 PM",
  //     "03:00 PM - 04:00 PM",
  //     "04:00 PM - 05:00 PM",
  //     "05:00 PM - 06:00 PM",
  //   ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleBrandChange = (event, newValue) => {
    const brand = newValue;
    // console.log(brand);
    setSelectedBrand(brand);
    setFormData({
      ...formData,
      brand,
      model: "",
      cVariant: "",
    });
  };

  const handleModelChange = (event, newValue) => {
    const model = newValue;
    setSelectedModel(model);
    setFormData({
      ...formData,
      model,
      cVariant: "",
    });
  };

  const handleVariantChange = (event, newValue) => {
    const cVariant = newValue;
    // console.log(cVariant);
    setFormData({
      ...formData,
      cVariant,
    });
  };
  useEffect(() => {
    if (variantData) {
      const models = [...new Set(variantData.list.map((item) => item.variant))];
      setModelOptions(models);
    }
  }, [variantData]);

  useEffect(() => {
    if (subVariantData) {
      const variants = [
        ...new Set(subVariantData.list.map((item) => item.subVariant)),
      ];
      setVariantOptions(variants);
    }
  }, [subVariantData]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await userRegister(formData);
        // console.log(error);
        if(res?.data?.code === "success"){
          alert("Request Submited")
        }else{
          alert("Something is wrong");
  
        }
      } catch (error) {
              // console.log(error);

      }
    

    // Reset form after submission
    setFormData({
      carOwnerName: "",
      brand: "",
      model: "",
      variant: "",
      regNo: "",
      address1: "",
      address2: "",
      pinCode: "",
      rc: "",
      date: "",
      datetime: "",
    });
  };

  return (
    <>
      <div>
        <CardBody className="flex flex-col gap-4">
          <Typography
            variant="h4"
            color="blue-gray"
            className="flex justify-center"
          >
            Sell Car
          </Typography>
          <div className="flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="space-y-3 md:w-[50%] w-full"
            >
              <Input
                label="Car Owner Name"
                name="carOwnerName"
                value={formData.carOwnerName}
                onChange={handleChange}
                required
              />
              <div className="md:flex gap-2">
                <div className="w-full">
                  <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={brands}
                    getOptionLabel={(option) => option}
                    onChange={handleBrandChange}
                    renderInput={(params) => (
                      <TextField
                        required
                        sx={{
                          "& .MuiInputBase-root": {
                            height: "40px",
                            padding: "0 14px",
                            paddingBottom: "8px",
                            top: 0,
                          },
                          "& .MuiInputBase-input": {
                            height: "100%",
                            padding: "0",
                          },
                        }}
                        {...params}
                        label="Brands"
                        InputLabelProps={{
                          style: {
                            fontSize: "0.75rem",
                            // paddingTop : '20px',
                            //  background : 'black'
                          }, // Adjust the font size here
                        }}
                      />
                    )}
                  />
                </div>
                <div className="w-full">
                  <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={modelOptions}
                    getOptionLabel={(option) => option}
                    onChange={handleModelChange}
                    renderInput={(params) => (
                      <TextField
                        required
                        sx={{
                          "& .MuiInputBase-root": {
                            height: "40px",
                            padding: "0 14px",
                            paddingBottom: "8px",
                            top: 0,
                          },
                          "& .MuiInputBase-input": {
                            height: "100%",
                            padding: "0",
                          },
                        }}
                        {...params}
                        label="Varient"
                        InputLabelProps={{
                          style: {
                            fontSize: "0.75rem",
                            // paddingTop : '20px',
                            //  background : 'black'
                          }, // Adjust the font size here
                        }}
                      />
                    )}
                  />
                </div>
              </div>

              <div className="md:flex gap-2">
                <div className="w-full">
                  <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={variantOptions}
                    getOptionLabel={(option) => option}
                    onChange={handleVariantChange}
                    renderInput={(params) => (
                      <TextField
                        required
                        sx={{
                          "& .MuiInputBase-root": {
                            height: "40px",
                            padding: "0 14px",
                            paddingBottom: "8px",
                            top: 0,
                          },
                          "& .MuiInputBase-input": {
                            height: "100%",
                            padding: "0",
                          },
                        }}
                        {...params}
                        label="SubVarient"
                        InputLabelProps={{
                          style: {
                            fontSize: "0.75rem",
                            // paddingTop : '20px',
                            //  background : 'black'
                          }, // Adjust the font size here
                        }}
                      />
                    )}
                  />
                </div>

                <Input
                  label="Registration Number"
                  name="regNo"
                  value={formData.regNo}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                label="Address Line 1"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                required
              />

              <Input
                label="Address Line 2"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
              />

              <Input
                label="Pincode"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                required

              />

              <Select
                label="RC"
                name="rc"
                value={formData.rc}
                onChange={(e) => setFormData({ ...formData, rc: e })}
                required
              >
                <Option value="Yes">Yes</Option>
                <Option value="No">No</Option>
              </Select>

              <Input
                label="Date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />

              {/* <Input
                label="Time"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              /> */}

              {/* <Select
                label="Time Slot"
                name="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e })}
                required
              >
                {timeSlots.map((slot) => (
                  <Option key={slot} value={slot}>
                    {slot}
                  </Option>
                ))}
              </Select> */}

              <Input
                label="Inspection Time"
                name="datetime"
                value={formData.datetime}
                onChange={handleChange}
                type="datetime-local"
              />

              <Button color="indigo" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </CardBody>
      </div>
    </>
  );
}
