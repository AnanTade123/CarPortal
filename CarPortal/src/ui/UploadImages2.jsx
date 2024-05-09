

import React from "react";
import { useAddCarImagesMutation } from "../services/dealerAPI";
import { Button } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useDealerIdByCarQuery } from "../services/carAPI";
import { useNavigate } from "react-router-dom";

export default function Uploadimages2() {
  const [images, setImages] = React.useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useDealerIdByCarQuery({ id, pageNo: 0 });

  const lastCarId = data?.list?.length > 0 ? data?.list[data?.list.length - 1].carId : null;
  console.log(lastCarId)
  const [addCarImages] = useAddCarImagesMutation();

  const readImages = async (event) => {
    const files = Array.from(event.target.files);
     setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!lastCarId || !images.length) {
      console.error("lastCarId or images is not defined");
      return;
    }
  
    const formData = new FormData();
    for (const image of images) {
      formData.append('file', image);
    }
  
    try {
      
      const response = await addCarImages({ formData, lastCarId }).unwrap();
      console.log(response);
      console.log("try block is running")
      
    } catch (error) {
      console.error(error);
    }
    navigate(-2)
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          multiple
          required
          onChange={readImages}
        />
        <div className="mt-5">
          <Button type="submit">Upload Images</Button>
        </div>
      </form>
    </div>
  );
}