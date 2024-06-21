import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoAddCircleOutline, IoCloseCircle } from "react-icons/io5";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { useGetCarImageByIdQuery } from "../../services/carAPI";

const EditImage = () => {
  const navigate = useNavigate();
  const { carId } = useParams();
  const { data: imagess } = useGetCarImageByIdQuery({ carId });

  const [data, setData] = useState([
    {
      label: "Cover Image",
      value: "coverimage",
      images: [],
      showAddSection: true,
    },
    {
      label: "Images",
      value: "images",
      images: [],
      showAddSection: true,
    }
  ]);

  useEffect(() => {
    if (imagess) {
      const coverImg = imagess.object.filter(img => img.documentType === 'coverImage').map(img => img.documentLink);
      const imgs = imagess.object.filter(img => img.documentType === 'image').map(img => img.documentLink);

      setData(prevData => prevData.map(category => {
        if (category.value === 'coverimage') {
          return { ...category, images: coverImg };
        }
        if (category.value === 'images') {
          return { ...category, images: imgs };
        }
        return category;
      }));
    }
  }, [imagess]);

  const [activeTab, setActiveTab] = useState('coverimage');

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleAddImage = (event, categoryValue) => {
    const newImages = Array.from(event.target.files).map((file) =>
      URL.createObjectURL(file)
    );

    setData((prevData) =>
      prevData.map((category) => {
        if (category.value === categoryValue) {
          const updatedImages =
            categoryValue === "coverimage"
              ? newImages
              : [...category.images, ...newImages];
          return {
            ...category,
            images: updatedImages,
            showAddSection: categoryValue !== "coverimage",
          };
        }
        return category;
      })
    );
  };

  const handleDeleteImage = (categoryValue, index) => {
    setData((prevData) => {
      const newData = prevData.map((category) => {
        if (category.value === categoryValue) {
          const updatedImages = category.images.filter((_, i) => i !== index);
          return {
            ...category,
            images: updatedImages,
            showAddSection: true
          };
        }
        return category;
      });
      return newData;
    });
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-8xl p-4">
        <h2 className="text-3xl font-semibold mb-4">Edit Images</h2>
        <form>
          <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="overflow-y-auto overflow-hidden" style={{ maxHeight: '80vh' }}>
              {data.map(({ value, images, showAddSection }) => (
                <TabPanel key={value} value={value} className="grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {images.map((src, index) => (
                      <div key={index} className="relative">
                        <img
                          src={src}
                          alt={`Image ${index + 1}`}
                          className="object-cover w-full h-auto"
                          style={{
                            height: '200px',
                            margin: '5px',
                          }}
                        />
                        <IoCloseCircle
                          className="absolute top-2 right-2 cursor-pointer text-red-500 md:mr-6 md:h-8 md:w-8"
                          onClick={() => handleDeleteImage(value, index)}
                        />
                      </div>
                    ))}
                    {showAddSection && (
                      <div className="h-48 w-full flex items-center justify-center border-2 border-dashed border-gray-400 p-4">
                        <label className="cursor-pointer">
                          <IoAddCircleOutline className="h-16 w-16 text-gray-400" />
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={(e) => handleAddImage(e, value)}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
          <div className="mt-5 flex justify-between">
            <button
              type="button"
              className="p-3 bg-indigo-400 rounded-md w-28 text-white"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditImage;
