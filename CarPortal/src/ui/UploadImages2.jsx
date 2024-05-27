import React from "react";
import { useAddCarImagesMutation } from "../services/dealerAPI";
import { Button } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useDealerIdByCarQuery } from "../services/carAPI";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export default function Uploadimages2() {
  const [images, setImages] = React.useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const token = Cookies.get("token");
  let jwtDecodes;
  if (token) {
    jwtDecodes = jwtDecode(token);
  }
  console.log("Token ", jwtDecodes);

  const UserID = jwtDecodes?.userId;
  console.log("User ID", UserID);

  const { data } = useDealerIdByCarQuery({ id, pageNo: 0 });

  const lastCarId =
    data?.list?.length > 0 ? data?.list[data?.list.length - 1].carId : null;
  console.log(lastCarId);
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
      formData.append("image", image);
    }

    try {
      const response = await addCarImages({
        formData,
        lastCarId,
        UserID,
      }).unwrap();
      console.log(response);
      console.log("try block is running");
    } catch (error) {
      console.error(error);
      console.log("catch block is running");
    }
    navigate(-2);
  };

  return (
    <div className="flex flex-col justify-center items-center align-middle min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex mb-6">
          <input
            type="file"
            accept="image/*"
            multiple
            required
            onChange={readImages}
          />
          <div className="w-64 h-10 bg-red-900 flex justify-center items-center text-white animate-pulse">
            Exterior Car Images
          </div>
        </div>
        <div className="flex mb-6">
          <input
            type="file"
            accept="image/*"
            multiple
            required
            onChange={readImages}
          />
          <div className="w-64 h-10 bg-red-900 flex justify-center items-center text-white animate-pulse">
            Interior Car Images
          </div>
        </div>
        <div className="flex mb-6">
          <input
            type="file"
            accept="image/*"
            multiple
            required
            onChange={readImages}
          />
          <div className="w-64 h-10 bg-red-900 flex justify-center items-center text-white animate-pulse">
            Car Tyre Images
          </div>
        </div>
        <div className="flex mb-6">
          <input
            type="file"
            accept="image/*"
            multiple
            required
            onChange={readImages}
          />
          <div className="w-64 h-10 bg-red-900 flex justify-center items-center text-white animate-pulse">
            Car Features Images
          </div>
        </div>
        <div className="flex mb-6">
          <input
            type="file"
            accept="image/*"
            multiple
            required
            onChange={readImages}
          />
          <div className="w-64 h-10 bg-red-900 flex justify-center items-center text-white animate-pulse">
            Car Engine Images
          </div>
        </div>
        <div>
          <Button type="submit" className="w-64 h-10 mt-12">
            Upload Images
          </Button>
        </div>
      </form>
    </div>
  );
}
