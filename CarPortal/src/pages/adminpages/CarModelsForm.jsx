/* eslint-disable react/prop-types */
import { useState } from "react";
// import { UserPlusIcon } from "@heroicons/react/24/solid";
import { FaCarAlt } from "react-icons/fa";
import { Button, Dialog, CardBody, Typography, Input } from "@material-tailwind/react";
import CardUi from "../../ui/CardUi";
import { useAddCarBrandsMutation } from "../../services/brandAPI"; 

export function CarModelsForm({ addCar }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

const [addCarBrands] = useAddCarBrandsMutation()

  // Form state
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    variant: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    addCar(formData);
    setFormData({
      brand: "",
      model: "",
      variant: "",
    });
    const carBrand = {
      brand:formData.brand,
      variant : formData.model,
      subVariant : formData.variant
    }
    console.log(carBrand)
    console.log(formData);
    try{
      const res = await addCarBrands(carBrand)
      console.log(res);
    }catch (error){
      console.log(error);
    }
    setOpen(false);
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
            <form onSubmit={handleSubmit} className="space-y-3 md:w-[30rem] w-[220px]">
              <div className="flex">
                <Typography className="w-32 text-black font-medium">Brand Name : </Typography>
                <Input
                  label="Brand Name"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex">
                <Typography className="w-32 text-black font-medium">Model Name :</Typography>
                <Input
                  label="Model Name"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex">
                <Typography className="w-32 text-black font-medium">Variant :</Typography>
                <Input
                  label="Variant"
                  name="variant"
                  value={formData.variant}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit">Add</Button>
            </form>
          </CardBody>
        </CardUi>
      </Dialog>
    </>
  );
}