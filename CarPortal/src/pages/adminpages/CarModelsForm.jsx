/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaCarAlt } from "react-icons/fa";
import { Button, Dialog, CardBody, Typography, Input } from "@material-tailwind/react";
import CardUi from "../../ui/CardUi";
import { useAddCarBrandsMutation } from "../../services/brandAPI";
import { useGetOnlyBrandsQuery } from "../../services/brandAPI";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function CarModelsForm({ addCar }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [addCarBrands] = useAddCarBrandsMutation();
  const { data } = useGetOnlyBrandsQuery();

  const validationSchema = Yup.object().shape({
    brand: Yup.string().required("Brand name is required"),
    model: Yup.string().required("Model name is required"),
    variant: Yup.string().required("Variant is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const carBrand = {
      brand: values.brand,
      model: values.model,
      variant: values.variant,
    };

    try {
      console.log("Submitting car brand:", carBrand);
      const res = await addCarBrands(carBrand).unwrap();
      console.log("API response:", res);

      addCar({
        brandDataId: res.id,
        ...carBrand,
      });

      setSubmitting(false);
      resetForm();
      setOpen(false);
    } catch (error) {
      console.error('Failed to add the car brand:', error);
      setSubmitting(false);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} className="flex gap-2">
        <FaCarAlt strokeWidth={2} className="h-4 w-4" /> Add Car Variant
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <CardUi>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Add Car
            </Typography>
            <Formik
              initialValues={{
                brand: "",
                model: "",
                variant: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-3">
                  <div className="flex flex-col">
                    <Typography className="w-32 text-black font-medium">Brand Name:</Typography>
                    <Field
                      name="brand"
                      placeholder="Brand Name"
                      className="border border-gray-400 rounded-md h-10 p-2" 
                    />
                    <ErrorMessage name="brand" component="div" className="text-red-500" />
                  </div>
                  <div className="flex flex-col">
                    <Typography className="w-32 text-black font-medium">Model Name:</Typography>
                    <Field
                      name="model"
                      className="border border-gray-400 rounded-md h-10 p-2"                       
                      placeholder="Model Name"
                    />
                    <ErrorMessage name="model" component="div" className="text-red-500" />
                  </div>
                  <div className="flex flex-col">
                    <Typography className="w-32 text-black font-medium">Variant:</Typography>
                    <Field
                      name="variant"
                      className="border border-gray-400 rounded-md h-10 p-2"                       
                      placeholder="Variant"
                    />
                    <ErrorMessage name="variant" component="div" className="text-red-500" />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Adding..." : "Add"}
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

export default CarModelsForm;
