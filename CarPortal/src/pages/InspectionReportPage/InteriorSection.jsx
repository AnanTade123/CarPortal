import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Rating } from "@material-tailwind/react";
import styled from 'styled-components';
//preview
const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LightboxContent = styled.div`
  position: relative;
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const LightboxCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const InteriorSection = () => {
  const [formData, setFormData] = React.useState({
    LeatherSeat: "Torn",
    Odometer: "Tempered",
    Dashboard: "Repainted",
    CabinFloor: "Repaired",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [rated, setRated] = React.useState(4);

  //preview
  const [isOpen, setIsOpen] = React.useState(false);
   const [currentImage, setCurrentImage] = React.useState("");

  const images = [
    "https://fastly-production.24c.in/hello-ar/dev/uploads/666d40acc4d2f6209a6e7a8c/95ca2cb9-221e-4c7c-8b32-bb664d67c76b/slot/Rear-Cabin-View.jpg?w=700&h=403&auto=format",
    "https://fastly-production.24c.in/hello-ar/dev/uploads/666d40acc4d2f6209a6e7a8c/f124eb77-9f40-40e7-847e-3aea6bd57f71/slot/Cluster-Meter.jpg?w=700&h=403&auto=format",
    "https://fastly-production.24c.in/hello-ar/dev/uploads/666d40acc4d2f6209a6e7a8c/2e71f8c8-1681-4cfa-8370-552cac216bb5/slot/Dashboard.jpg?w=700&h=403&auto=format",
    "https://fastly-production.24c.in/hello-ar/dev/uploads/3b4f8bae-4a4a-4f29-88dd-91a02227587d/57ea98b2-e221-41dd-ae9a-122fd19b5d23/slot/camera-Right-Side-Front-Door-Cabin.jpg?w=700&h=403&auto=format"
  ];

  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className='p-4'>
      <div className=' bg-white border-2 rounded-md shadow-md p-7 -mt-2'>
        <div className="flex items-center gap-2 font-bold text-white md:ml-[90rem] ml-[10rem]">
          <span className='bg-green-600 px-3 rounded-sm'>{rated}</span>
          <Rating value={4} onChange={(value) => setRated(value)} />
          <Typography color="blue-gray" className="font-medium text-blue-gray-500"></Typography>
        </div>
        <div className='-mt-5 mb-2 '>
          <Typography variant="h5" className='text-black font-bold pb-10'>
            <u>Interior</u>
          </Typography>
        </div>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" onChange={handleChange}>Leather Seat : {formData.LeatherSeat}</Typography>
            <img src={images[0]} className="w-24 h-14 ml-auto -mt-8 cursor-pointer" alt="" onClick={() => openLightbox(images[0])} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" onChange={handleChange}>Odometer : {formData.Odometer}</Typography>
            <img src={images[1]} className="w-24 h-14 ml-auto -mt-8 cursor-pointer" alt="" onClick={() => openLightbox(images[1])} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" onChange={handleChange}>Dashboard : {formData.Dashboard}</Typography>
            <img src={images[2]} className="w-24 h-14 ml-auto -mt-8 cursor-pointer" alt="" onClick={() => openLightbox(images[2])} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" onChange={handleChange}>Cabin Floor : {formData.CabinFloor}</Typography>
            <img src={images[3]} className="w-24 h-14 ml-auto -mt-8 cursor-pointer" alt="" onClick={() => openLightbox(images[3])} />
          </Grid>
        </Grid>
      </div>
      {/* preview */}
      {isOpen && (
        <LightboxOverlay>
          <LightboxContent>
            <LightboxImage src={currentImage} alt="" />
            <LightboxCloseButton onClick={closeLightbox}>Close</LightboxCloseButton>
          </LightboxContent>
        </LightboxOverlay>
      )}
      
    </div>
  );
};

export default InteriorSection;
