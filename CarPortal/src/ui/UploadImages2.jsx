import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoAddCircleOutline, IoCloseCircle } from "react-icons/io5";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

const UploadImage = () => {
  const navigate = useNavigate();

  const initialData = [
    {
      label: "Cover Image",
      value: "coverimage",
      images: [],
      showAddSection: true,
    },
    {
      label: "Images",
      value: "images",
      images: [
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      ],
      showAddSection: true,
    }
  ];

  const [data, setData] = useState(initialData);
  const [activeTab, setActiveTab] = useState(initialData[0].value);

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your submit logic here
    navigate('/'); // For example, navigate to the homepage
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
        <h2 className="text-3xl font-medium mb-4">Upload Cover Image and All Images</h2>
        <form onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="p-3 bg-green-400 rounded-md w-28 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadImage;
