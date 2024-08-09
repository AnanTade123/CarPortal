/* eslint-disable no-unused-vars */
import { useState } from "react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  CardBody,
  Typography,
  Input,
} from "@material-tailwind/react";
import CardUi from "../../ui/CardUi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSignUpMutation } from "../../services/authAPI";

export function AddDealerForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [SignUp] = useSignUpMutation();

  
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobileNo: Yup.string()
      .matches(/^\d{10}$/, "Invalid mobile number")
      .required("Mobile number is required"),
    password: Yup.string().required("Password is required"),
    area: Yup.string().required("Area is required"),
    city: Yup.string().required("City is required"),
    address: Yup.string().required("Address is required"),
    shopName: Yup.string().required("Shop name is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const { data, error } = await SignUp(values);
      if (error?.data?.code === "Unsuccessful") {
        alert(error?.data?.message);
      } else {
        alert("Register Successfully");
        resetForm();
        handleOpen();
      }
    } catch (error) {
      console.log("Failed to register dealer:", error);
    }
    setSubmitting(false);
  };

  return (
    <>
      <Button onClick={handleOpen} className="flex gap-2">
        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Dealer
      </Button>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <CardUi>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Add Dealer
            </Typography>
            <Formik
              const initialValues = {{
                email: "",
                password: "",
                mobileNo: "",
                firstName: "",
                lastName: "",
                address: "",
                city: "",
                roles: "DEALER",
                document: 0,
                shopName: "",
                area: "",
                status: false,
                userType: "",
              }}
            
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-3 md:w-full w-[220px]">
                  <div className="flex md:flex-row flex-col gap-2 ">
                    <div className="flex flex-col">
                      <label htmlFor="firstName" className=" text-gray-800 font-semibold">
                        First Name
                      </label>
                      <Field
                        name="firstName"
                        placeholder="FirstName"
                        className="border border-gray-400 rounded-md h-10 p-2"   
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="lastName" className=" text-gray-800 font-semibold">
                  Last Name
                </label>
                      <Field
                        name="lastName"
                        placeholder="LastName"
                        className="border border-gray-400 rounded-md h-10 p-2"                         
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                  <label htmlFor="email" className=" text-gray-800 font-semibold">
                  Email
                </label>
                    <Field name="email"  placeholder="Email" className="border border-gray-400 rounded-md h-10 p-2"   />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                  <label htmlFor="lastmobileNoName" className=" text-gray-800 font-semibold">
                 Mobile Number
                </label>
                    <Field
                      name="mobileNo"  placeholder="Mobile Number" label="mobileNo"
                      className="border border-gray-400 rounded-md h-10 p-2"                       
                    />
                    <ErrorMessage
                      name="mobileNo"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                  <label htmlFor="password"  className=" text-gray-800 font-semibold">
                  Password
                </label>
                    <Field
                      name="password"
                      
                      placeholder="Password"
                      
                      className="border border-gray-400 rounded-md h-10 p-2"/>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex gap-2 md:flex-row flex-col">
                    <div className="flex flex-col">
                    <label htmlFor="area" className=" text-gray-800 font-semibold">
                  Area
                </label>
                      <Field name="area" className="border border-gray-400 rounded-md h-10 p-2"  placeholder="Area"  />
                      <ErrorMessage
                        name="area"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="city" className=" text-gray-800 font-semibold">
                  City
                </label>
                      <Field name="city" className="border border-gray-400 rounded-md h-10 p-2"  placeholder="City"  />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                  <label htmlFor="address" className=" text-gray-800 font-semibold">
                 Address
                </label>
                    <Field
                      name="address"
                      className="border border-gray-400 rounded-md h-10 p-2"                       
                      placeholder="Address"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                  <label htmlFor="shopName" className=" text-gray-800 font-semibold">
                  Shop Name                
                  </label>
                    <Field
                      name="shopName"
                      className="border border-gray-400 rounded-md h-10 p-2"                       
                      placeholder="Shop Name"
                    />
                    <ErrorMessage
                      name="shopName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    Add
                  </Button>
                </Form>
              )}
            </Formik>
          </CardBody>
        </CardUi>
      </Dialog>
    </>
  );
}
