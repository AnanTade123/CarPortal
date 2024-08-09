import { useState } from "react";
import { Button, Checkbox, Typography } from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CardUi from "../ui/CardUi";
import { useSignUpMutation } from "../services/authAPI";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function SimpleRegistrationForm() {
  const [SignUp] = useSignUpMutation();
  const navigate = useNavigate();
  const { countries } = useCountries();
  const defaultCountryIndex = countries.findIndex(
    (country) => country.name === "India"
  );
  const [country, setCountry] = useState(
    defaultCountryIndex !== -1 ? defaultCountryIndex : 0
  );
  const { name, flags, countryCallingCode } = countries[country];

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    mobileNo: Yup.string()
      .matches(/^\d{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    password: Yup.string().required("Password is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    area: Yup.string().required("Area is required"),
    status: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await SignUp(values);
      if (res.data.code === "Successful") {
        toast.success("Register Successfully");
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      }
    } catch (error) {
      toast.error("Register Unsuccessfully");
    }
    setSubmitting(false);
  };

  return (
    <div className="h-auto mt-10 flex justify-center items-center">
      <CardUi color="transparent" shadow={false}>
        <ToastContainer />
        <Typography variant="h3" color="black" className="text-center">
          Sign Up
        </Typography>

        <Formik
          initialValues={{
            email: "",
            password: "",
            mobileNo: "",
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            roles: "USER",
            document: 0,
            area: "",
            status: false,
            userType: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 m-4 flex flex-col gap-6 w-100">
                <label htmlFor="firstName" className="-mb-3 text-gray-800 font-semibold">
                  First Name
                </label>
                <Field name="firstName" type="text"  placeholder="Enter your last name"   className="border border-gray-400 rounded-md h-10 p-2"  />
                <ErrorMessage name="firstName"   component="div" className="text-red-500" />

                <label htmlFor="lastName" className="-mb-3 text-gray-800 font-semibold">
                  Last Name
                </label>
                <Field name="lastName" type="text" placeholder="Enter your last name"  className="border border-gray-400 rounded-md h-10 p-2"  />
                <ErrorMessage name="lastName" component="div" className="text-red-500" />

                <label htmlFor="email" className="-mb-3 text-gray-800 font-semibold">
                  Email
                </label>
                <Field name="email" type="email" placeholder="Email"  className="border border-gray-400 rounded-md h-10 p-2"  />
                <ErrorMessage name="email" component="div" className="text-red-500" />

                <label htmlFor="mobileNo" className="-mb-3 text-gray-800 font-semibold">
                  Mobile Number
                </label>
                <div className="relative flex w-full max-w-[24rem]">
                  <Menu placement="bottom-start">
                    <MenuHandler>
                      <Button
                        ripple={false}
                        variant="text"
                        color="blue-gray"
                        className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                      >
                        <img
                          src={flags.svg}
                          alt={name}
                          className="h-4 w-4 rounded-full object-cover"
                        />
                        {countryCallingCode}
                      </Button>
                    </MenuHandler>
                    <MenuList className="max-h-[20rem] max-w-[18rem]">
                      {countries.map(({ name, flags, countryCallingCode }, index) => (
                        <MenuItem
                          key={name}
                          value={name}
                          className="flex items-center gap-2"
                          onClick={() => setCountry(index)}
                        >
                          <img
                            src={flags.svg}
                            alt={name}
                            className="h-5 w-5 rounded-full object-cover"
                          />
                          {name} <span className="ml-auto">{countryCallingCode}</span>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                  <Field
                    name="mobileNo"
                    type="text"
                    placeholder="Mobile Number"
                    className="border border-gray-400 rounded-md h-10 p-2 w-full" 
                  />
                </div>
                <ErrorMessage name="mobileNo" component="div" className="text-red-500" />

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Field name="password" type="password" placeholder="Password" className="border border-gray-400 rounded-md h-10 p-2 w-full"  />
                <ErrorMessage name="password" component="div" className="text-red-500" />

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Address
                </Typography>
                <Field name="address" placeholder="Address" className="border border-gray-400 rounded-md h-10 p-2 w-full" />
                <ErrorMessage name="address" component="div" className="text-red-500" />

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  City
                </Typography>
                <Field name="city" placeholder="City" className="border border-gray-400 rounded-md h-10 p-2 w-full"  />
                <ErrorMessage name="city" component="div" className="text-red-500" />

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Area
                </Typography>
                <Field name="area" placeholder="Area"  className="border border-gray-400 rounded-md h-10 p-2 w-full" />
                <ErrorMessage name="area" component="div" className="text-red-500" />
              </div>
              <div className="ml-4">
                <Field name="status" type="checkbox">
                  {({ field }) => (
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal"
                        >
                          I agree to the
                          <Link
                            to="#"
                            className="font-medium transition-colors hover:text-gray-900"
                          >
                            &nbsp;Terms and Conditions
                          </Link>
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5" }}
                      {...field}
                    />
                  )}
                </Field>
                <ErrorMessage name="status" component="div" className="text-red-500" />
              </div>
              <div className="flex justify-center">
                <Button className="mt-6 w-28" fullWidth type="submit" disabled={isSubmitting}>
                  Sign Up
                </Button>
              </div>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <Link to="/signin" className="font-medium text-gray-900">
                  Sign In
                </Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </CardUi>
    </div>
  );
}

export default SimpleRegistrationForm;
