/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useEditBrandDataMutation } from "../../services/brandAPI";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditCarForm = ({ initialData, brandDataId, onSave }) => {
  const [open, setOpen] = useState(false);
  const [editBrandData] = useEditBrandDataMutation();

  const handleOpen = () => setOpen(!open);

  const validationSchema = Yup.object().shape({
    brand: Yup.string().required("Brand name is required"),
    model: Yup.string().required("Model name is required"),
    variant: Yup.string().required("Variant is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await editBrandData({
        id: brandDataId,
        inputField: values,
      }).unwrap();
      onSave(res);
      handleOpen();
    } catch (error) {
      console.error("Failed to edit brand data:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} color="green">
        Edit
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Edit Car Details</DialogHeader>
        <Formik
          initialValues={initialData || { brand: "", model: "", variant: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ isSubmitting }) => (
            <Form>
              <DialogBody className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label htmlFor="brand" className="text-black font-medium">Brand</label>
                  <Field
                    name="brand"
                    placeholder="Brand"
                    className="border border-gray-400 rounded-md h-10 p-2" 
                  />
                  <ErrorMessage name="brand" component="div" className="text-red-500" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="model" className="text-black font-medium">Model</label>
                      <Field
                      name="model"
                      placeholder="Model"
                      className="border border-gray-400 rounded-md h-10 p-2" 
                  />
                  <ErrorMessage name="model" component="div" className="text-red-500" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="variant" className="text-black font-medium">Variant</label>
                      <Field
                      name="variant"
                      placeholder="Variant"
                      className="border border-gray-400 rounded-md h-10 p-2" 
                      />
                  <ErrorMessage name="variant" component="div" className="text-red-500" />
                </div>
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button
                  variant="gradient"
                  color="green"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <span>Save</span>
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  );
};

export default EditCarForm;
