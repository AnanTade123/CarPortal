import { useState } from "react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Button, Dialog, CardBody, Typography } from "@material-tailwind/react";
import CardUi from "../ui/CardUi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSignUpMutation } from "../services/authAPI";

export function AddInspectorForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [SignUp] = useSignUpMutation();

  // Validation schema for Formik
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
    city: Yup.string().required("City is required"),
    address: Yup.string().required("Address is required"),
  });

  // Initial values for Formik
 

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const { data } = await SignUp(values);
      console.log("inspector data", data);
      if (data) {
        alert("Register Successfully");
      } else {
        alert("Register Unsuccessful");
      }
    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);
    resetForm();
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen} className="flex gap-2">
        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Inspector
      </Button>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <CardUi>
          <div className="md:flex justify-center m-5 md:m-0">
            <CardBody className="flex flex-col gap-4 ">
              <Typography variant="h4" color="blue-gray">
                Add Inspector
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
                  roles: "INSPECTOR",
                  document: 0,
                  area: "",
                  status: true,
                  userType: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-3">
                    <div className="flex md:flex-row flex-col md:gap-2 gap-3">
                      <div className="flex flex-col">
                        <label htmlFor="firstName" className="text-gray-800 font-semibold">
                          First Name
                        </label>
                        <Field
                          name="firstName"
                          placeholder="First Name"
                          className="border border-gray-400 rounded-md h-10 p-2"
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="lastName" className="text-gray-800 font-semibold">
                          Last Name
                        </label>
                        <Field
                          name="lastName"
                          placeholder="Last Name"
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
                      <label htmlFor="email" className="text-gray-800 font-semibold">
                        Email
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="border border-gray-400 rounded-md h-10 p-2"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="mobileNo" className="text-gray-800 font-semibold">
                        Mobile Number
                      </label>
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
                      <label htmlFor="password" className="text-gray-800 font-semibold">
                        Password
                      </label>
                      <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="border border-gray-400 rounded-md h-10 p-2"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="city" className="text-gray-800 font-semibold">
                        City
                      </label>
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
                    <div className="flex flex-col">
                      <label htmlFor="address" className="text-gray-800 font-semibold">
                        Address
                      </label>
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
                    <Button type="submit" disabled={isSubmitting}>
                      Add
                    </Button>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </div>
        </CardUi>
      </Dialog>
    </>
  );
}
