import { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import { useGetCarImageByIdQuery } from "../../services/carAPI";
import fallbackImage from "../../../public/cars/no-image-available.png"; // Add a fallback image path

// eslint-disable-next-line react/prop-types
const CarImageCarousel = ({ carId }) => {
  const [activeImage, setActiveImage] = useState(null); // To display the selected image
  const [imageURLs, setImageURLs] = useState([]);

  const { data, isLoading, error } = useGetCarImageByIdQuery({ carId });

  useEffect(() => {
    if (data?.object && Array.isArray(data.object)) {
      const urls = data.object.map((item) => item.documentLink);
      setImageURLs(urls);
      setActiveImage(urls[0] || fallbackImage); // Set the first image as active by default
    } else {
      setImageURLs([fallbackImage]); // Handle case when no valid image
      setActiveImage(fallbackImage);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center p-8">
        <FiLoader className="animate-spin text-blue-gray-800 h-16 w-16" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="font-[Merriweather] md:text-center text-center">
        Image not available{" "}
        <div className="flex justify-center">
          <img
            className=" md:w-[12rem] w-[10rem] opacity-50 "
            src={fallbackImage}
            alt="no image"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      {/* Active image */}
      <div className="mt-10 flex justify-center content-center">
        <img
          className="h-auto lg:w-4/5 w-4/5 rounded-lg object-center md:h-[480px]"
          src={activeImage}
          alt="Active Car"
        />
      </div>

      {/* Thumbnail images */}
      <div className="grid grid-cols-5 m-3 gap-2 md:grid-cols-10 md:ml-5">
        {imageURLs.map((url, index) => (
          <div key={index}>
            <img
              onClick={() => setActiveImage(url)}
              src={url}
              className="lg:h-16 h-14 cursor-pointer rounded-lg object-cover object-center"
              alt={`Car Thumbnail ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarImageCarousel;
