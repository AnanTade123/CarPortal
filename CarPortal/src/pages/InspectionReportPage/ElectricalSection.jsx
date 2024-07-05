import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import styled from 'styled-components';

// Electricals
// 4 Power Windows :- status/options- Not Working
// Air Bag Features
// Music System :- status/options- Not Working
// Sunroof
// ABS
// Interior Parking Sensor
// Electrical wiring :- status/options- damage

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

const ElectricalSection = () => {
  const [formData, setFormData] = React.useState({
    FourPowerWindows: "NA",
    AirBagFeatures: "NA",
    MusicSystem : "NA",
    Sunroof : "NA",
    ABS : "NA",
    InteriorParkingSensor : "NA",
    Electricalwiring : "Damaged",
    
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
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/144851/exter-interior-front-driver-power-window-switches.jpeg?isig=0&q=80",
    "https://volklub.com/wp-content/uploads/2021/08/6-airbags.jpg",
    "https://fastly-production.24c.in/hello-ar/dev/uploads/3b4f8bae-4a4a-4f29-88dd-91a02227587d/170e95a8-6bba-4452-a1b8-a87e1070ba2a/slot/camera-Infotainment-System-.jpg?w=700&h=403&auto=format",
   "https://imgd.aeplcdn.com/370x208/n/cw/ec/106257/venue-exterior-car-roof-40.jpeg?isig=0&q=80"
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
      <u>Electricals </u>
      </Typography>
      </div>
      <Grid container spacing={5} >
      <Grid item xs={12} sm={6}>
          <Typography variant="body1" onChange={handleChange}>Four Power Windows : {formData.FourPowerWindows}</Typography>
          <img src={images[0]} className="w-24 h-14 ml-auto -mt-8" alt="No Image" onClick={() => openLightbox(images[0])} />
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>AirBag Features : {formData.AirBagFeatures}</Typography>
        <img src={images[1]} className="w-24 h-14 ml-auto -mt-8" alt="No Image" onClick={() => openLightbox(images[1])}/>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Music System : {formData.MusicSystem}</Typography>
        <img src={images[2]} className="w-24 h-14 ml-auto -mt-8" alt="No Image" onClick={() => openLightbox(images[2])}/>
        </Grid>

        {/* Insurance Type */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Sunroof : {formData.Sunroof}</Typography>
        <img src={images[3]} className="w-24 h-14 ml-auto -mt-8" alt="No Image" onClick={() => openLightbox(images[3])}/>
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>ABS : {formData.ABS}</Typography>
        </Grid>

        {/* Under Hypothecation */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Interior Parking Sensor : {formData.InteriorParkingSensor}</Typography>
        </Grid>

        {/* Road Tax Paid */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Electrical Wiring : {formData.Electricalwiring}</Typography>
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

export default ElectricalSection;
