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
import { useSignUpMutation } from "../../services/authAPI";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function AddSalesForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [SignUp] = useSignUpMutation();

  const initialValues = {
    email: "",
    password: "",
    mobileNo: "",
    firstName: "",
    lastName: "",
    address: "",
    profilePhotoId: "",
    joiningdate: "",
    city: "",
    roles: "SALESPERSON",
    documentId: "",
    area: "",
    status: true,
  };

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
    documentId: Yup.string().required("Aadhar No is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const { data } = await SignUp(values);
      toast.success("Register Successfully");
      resetForm();
      setOpen(false);
    } catch (error) {
      console.log("Failed to register salesperson:", error);
    }
    setSubmitting(false);
  };

  return (
    <>
      <ToastContainer />
      <Button onClick={handleOpen} className="flex gap-2">
        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Seller
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
              Add Seller
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-3 md:w-full w-[220px]">
                  <div className="flex md:flex-row flex-col gap-2">
                    <div className="flex flex-col">
                      <Field
                        name="firstName"
                        className="border border-gray-400 rounded-md h-10 p-2"                       
                        placeholder="First Name"
                        
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <Field
                        name="lastName"
                        className="border border-gray-400 rounded-md h-10 p-2"                       
                        placeholder="Last Name"
                        
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Field
                      name="email"
                      className="border border-gray-400 rounded-md h-10 p-2"                       
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Field
                      name="mobileNo"
                      placeholder="Mobile Number"
                      className="border border-gray-400 rounded-md h-10 p-2"                       
                    />
                    <ErrorMessage
                      name="mobileNo"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Field
                      name="password"
                      placeholder="Password"
                      className="border border-gray-400 rounded-md h-10 p-2"                       
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex gap-2 md:flex-row flex-col">
                    <div className="flex flex-col">
                      <Field
                        name="area"
                        placeholder="Area"
                        className="border border-gray-400 rounded-md h-10 p-2"                       
                        />
                      <ErrorMessage
                        name="area"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <Field
                        name="city"
                        placeholder="City"
                        className="border border-gray-400 rounded-md h-10 p-2"                       
                        />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Field
                      name="address"
                      placeholder="Address"
                      className="border border-gray-400 rounded-md h-10 p-2"                       
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Field
                      name="documentId"
                      placeholder="Aadhar No"
                      className="border border-gray-400 rounded-md h-10 p-2"                       

                    />
                    <ErrorMessage
                      name="documentId"
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
