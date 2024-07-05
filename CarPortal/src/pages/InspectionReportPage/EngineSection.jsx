import React from 'react';
import { Grid, Typography } from '@material-ui/core';

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
const EngineSection = () => {
  const [formData, setFormData] = React.useState({
    Engine: "Over Heating",
    EnginMounting: "Loose",
    EngineSound: "Minor sound",
    Exhaustsmoke: "Black",
    Gearbox: "Oil leakage",
    Engineoil: "Dirty",
    Battery: "Weak",
    Coolant: "Leaking",
    Clutch: "Spongy",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(handleChange);

  console.log(formData);
 
  //preview
  const [isOpen, setIsOpen] = React.useState(false);
   const [currentImage, setCurrentImage] = React.useState("");

  const images = [
    "https://miro.medium.com/v2/resize:fit:788/0*muTt9rBDr8bXsSsz",
    "https://spn-sta.spinny.com/blog/20220811154640/CAR-EXHAUST-SMOKE-COLOUR_1-1.jpg?compress=true&quality=80&w=1200&dpr=1.1",
    
  ];

  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };
  return (
    <div className=' bg-white border-2 rounded-md shadow-md md:p-7 md:m-3 p-5 md:mt-10'>
      
      <div className=''>

     

      <div className='-mt-5 mb-2 '>
      <Typography variant="h5" className='text-black font-bold pb-10'>
       <u> Engine</u>
      </Typography>
      </div>
      <Grid container spacing={5} >
      <Grid item xs={12} sm={6}>
          <Typography variant="body1" onChange={handleChange}>Engine : {formData.Engine}</Typography>
          <img src={images[0]} className="w-24 h-14 ml-auto -mt-8" alt="No Image" onClick={() => openLightbox(images[0])} />
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Engin Mounting : {formData.EnginMounting}</Typography>
        
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6} >
        <Typography variant="body1" onChange={handleChange}>Engine Sound : {formData.EngineSound}</Typography>
        
        </Grid>

        {/* Insurance Type */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Exhaust Smoke : {formData.Exhaustsmoke}</Typography>
        <img src={images[1]} className="w-24 h-14 ml-auto -mt-8" alt="No Image" onClick={() => openLightbox(images[1])}/>
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Gearbox : {formData.Gearbox}</Typography>
        </Grid>

        {/* Under Hypothecation */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Engine Oil : {formData.Engineoil}</Typography>
        </Grid>

        {/* Road Tax Paid */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Battery : {formData.Battery}</Typography>
        </Grid>

        {/* Partipeshi Request */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Coolant : {formData.Coolant}</Typography>
        </Grid>

        {/* Partipeshi Request */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Clutch : {formData.Clutch}</Typography>
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

export default EngineSection;
