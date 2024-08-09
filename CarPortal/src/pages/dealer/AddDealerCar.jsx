/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useCarRegisterMutation } from "../../services/carAPI";
import { useNavigate, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { useGetOnlyBrandsQuery, useGetVariantsQuery, useGetSubVariantsQuery } from "../../services/brandAPI";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const cityOptions = {
  // cityOptions data as before...
};

const AddDealerCar = () => {
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
  const { id } = useParams();
  const navigate = useNavigate();

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const initialValues = {
    // Initial form values as before...
    acFeature: false,
    musicFeature: false,
    powerWindowFeature: false,
    rearParkingCameraFeature: false,
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
  };

  const validationSchema = Yup.object({
    // Define validation schema using Yup
    brand: Yup.string().required("Brand is required"),
    model: Yup.string().required("Model is required"),
    price: Yup.number().required("Price is required"),
    year: Yup.number().required("Year is required"),
    transmission: Yup.string().required("Transmission is required"),
    color: Yup.string().required("Color is required"),
    city: Yup.string().required("City is required"),
    fuelType: Yup.string().required("Fuel Type is required"),
    kmDriven: Yup.number().required("KM Driven is required"),
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const data = {
      ...values,
      carStatus: "ACTIVE",
      dealer_id: id,
      date: formattedDate,
    };

    const res = await carRegister(data);
    setSubmitting(false);

    if (res?.data?.status === "success") {
      toast.success("Car Added");
      setTimeout(() => {
        navigate(`/dealer/${id}/uploadimage`);
      }, 2000);
    }
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values, handleChange }) => (
              <Form className="w-full md:w-[50rem]">
                <div className="flex justify-center">
                  <p className="text-3xl font-semibold m-4">Add Dealer Car</p>
                </div>
                <div className="md:flex gap-2">
                  <div className="mt-5 w-full">
                    <Field
                      as="select"
                      name="brand"
                      required
                      className="w-full border-2 border-gray-400 p-2 rounded-md"
                      value={values.brand}
                      onChange={(e) => {
                        handleChange(e);
                        setSelectedBrand(e.target.value);
                        setSelectedModel("");
                        setModelOptions([]);
                        setVariantOptions([]);
                      }}
                    >
                      <option value="">Brands</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </Field>
                  </div>

                  <div className="mt-5 w-full">
                    <Field
                      as="select"
                      name="model"
                      required
                      className="w-full border-2 border-gray-400 p-2 rounded-md"
                      value={values.model}
                      onChange={(e) => {
                        handleChange(e);
                        setSelectedModel(e.target.value);
                      }}
                      disabled={!selectedBrand}
                    >
                      <option value="">Models</option>
                      {modelOptions.map((model) => (
                        <option key={model} value={model}>
                          {model}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>

                <div className="md:flex gap-2">
                  <div className="mt-5 w-full">
                    <Field
                      as="select"
                      name="cVariant"
                      className="w-full border-2 border-gray-400 p-2 rounded-md"
                      value={values.cVariant}
                      onChange={handleChange}
                      disabled={!modelOptions.length}
                    >
                      <option value="">Car Variant</option>
                      {variantOptions.map((cVariant) => (
                        <option key={cVariant} value={cVariant}>
                          {cVariant}
                        </option>
                      ))}
                    </Field>
                  </div>

                  <div className="mt-5 md:ml-2 w-full">
                    <Field
                      as="select"
                      name="transmission"
                      required
                      className="w-full border-2 border-gray-400 p-2 rounded-md"
                      value={values.transmission}
                      onChange={handleChange}
                    >
                      <option value="">Transmission</option>
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                    </Field>
                  </div>
                </div>

                {/* Other form fields go here, following the same pattern with Formik */}
                {/* Remember to replace inputs with Field and wrap your form inside Formik's Form component */}

                <button
                  type="submit"
                  className="p-3 mt-3 bg-indigo-400 rounded-md w-28 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Next"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddDealerCar;
