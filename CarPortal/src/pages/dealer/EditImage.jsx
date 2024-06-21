import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoAddCircleOutline, IoCloseCircle } from "react-icons/io5";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

const EditImage = () => {
  const navigate = useNavigate();

  const initialData = [
    {
      label: "Exterior",
      value: "exterior",
      images: [
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
      ],
    },
    {
      label: "Interior",
      value: "interior",
      images: [
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      ],
    },
    {
      label: "Tyres",
      value: "tyres",
      images: [
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      ],
    },
    {
      label: "Features",
      value: "features",
      images: [
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      ],
    },
    {
      label: "Engine",
      value: "engine",
      images: [
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      ],
    },
    // Add more categories as needed
  ];

  const [data, setData] = useState(initialData);
  const [activeTab, setActiveTab] = useState(initialData[0].value);

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleSubmit = () => {
    // Implement your submit logic here
    navigate('/'); // For example, navigate to the homepage
  };

  const handleAddImage = (event, categoryValue) => {
    const newImages = Array.from(event.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setData((prevData) =>
      prevData.map((category) =>
        category.value === categoryValue
          ? { ...category, images: [...category.images, ...newImages] }
          : category
      )
    );
  };

  const handleDeleteImage = (categoryValue, index) => {
    setData((prevData) =>
      prevData.map((category) =>
        category.value === categoryValue
          ? {
              ...category,
              images: category.images.filter((_, i) => i !== index),
            }
          : category
      )
    );
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-8xl p-4">
        <h2 className="text-3xl font-semibold mb-4">Edit Images</h2>
        <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="overflow-y-auto overflow-hidden" style={{ maxHeight: '80vh' }}>
            {data.map(({ value, images }) => (
              <TabPanel key={value} value={value} className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-5 gap-4">
                  {images.map((src, index) => (
                    <div key={index} className="relative">
                      <img
                        src={src}
                        alt={`Image ${index + 1}`}
                        className="object-cover w-full h-auto"
                        style={{
                          maxWidth: '500px',
                          maxHeight: '500px',
                          margin: '5px',
                        }}
                      />
                      <IoCloseCircle
                        className="absolute md:h-8 md:w-8 top-2 right-2 cursor-pointer text-red-500"
                        onClick={() => handleDeleteImage(value, index)}
                      />
                    </div>
                  ))}
                  <div className="md:h-56 md:w-[17.5rem] ml-1 flex items-center justify-center border-2 border-dashed border-gray-400 p-4">
                    <label className="cursor-pointer">
                      <IoAddCircleOutline className="md:h-36 md:w-36 text-gray-400" />
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => handleAddImage(e, value)}
                      />
                    </label>
                  </div>
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
        <div className="mt-5 flex justify-between">
          <button
            className="p-3 bg-indigo-400 rounded-md w-28 text-white"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="p-3 bg-green-400 rounded-md w-28 text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditImage;
