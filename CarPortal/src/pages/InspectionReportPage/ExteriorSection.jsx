import React from 'react';
import {   Grid, Typography } from '@material-ui/core';
import { Rating,  } from "@material-tailwind/react";
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

const ExteriorSection = () => {

  const [formData, setFormData] = React.useState({
    CowlTop:"Repainted",
    BootFloor :"Dented",
    RightApronLEG:"Scratched",
    LeftApronLEG :"Rusted",
    LeftApron:"Repaired",
    RightApron:"Damaged",
    LeftPillar:"faded",
    RightPillar:"Scratched",

    BonnetHood : "Dented",
    RightDoorFront : "Scratched",
    LeftDoorFront : "Repainted",
    LeftFender: "Scratched",
    RightFender: "Dented",

    LeftQuarterPanel: "Repainted",
    RightQuarterPanel: "Scratched",
    Roof : "Scratched",
    DickyDoor : "Dented",
    LeftDoorRear :"Repainted",
    RightDoorRear :"Scratched",
    LHSFrontTyre : "69-85%",
    RHSFrontTyre: "22-38%",
    LHSRearTyre:"69-85%",
    RHSRearTyre: "22-38%",
    SpareTyre: "69-85%",
    Windshield: "Rusted",
    Light: "Not Working",
    FrontBumper: "Damaged",
    RearBumper: "Dented",
    LHSHeadlight: "Repaired",
    RHSHeadlight: "Not Working",
    LHSTaillight: "Scratched",
    RHSTaillight: "Repaired",
    LHSORVM: "Mirror Broken/Cracked",
    RHSORVM: " Not Working",



    HeadLightSupport: "Damaged",
    RadiatorSupport: "Repaired",
    AlloyWheel: "Scratched",
    CarPoolingOn: " One Side",
    LHSRunningBorder: "Repaired",
    RHSRunningBorder: "Scratched",
    UpperCrossMember: "Repainted",
    

  });

 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(handleChange);
console.log(formData)

const [rated, setRated] = React.useState(4);

//preview
const [isOpen, setIsOpen] = React.useState(false);
const [currentImage, setCurrentImage] = React.useState("");

const images = [
 "https://fastly-production.24c.in/hello-ar/dev/uploads/6d589482-e93b-4fcc-a7b4-db83ff3fa510/3c47f218-de10-40d5-9834-742c816ba60a/slot/camera-c7899b67-2334-457a-ac3a-98ba8211ea82.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/6d589482-e93b-4fcc-a7b4-db83ff3fa510/d21a04ab-2fd1-4fe3-9f03-b23d6e22ee9a/slot/camera-Boot-Inside.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/6d589482-e93b-4fcc-a7b4-db83ff3fa510/a2e5e540-dfe4-43d9-9707-d0e3d643e175/slot/camera-Open-Bonet.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/6d589482-e93b-4fcc-a7b4-db83ff3fa510/a2e5e540-dfe4-43d9-9707-d0e3d643e175/slot/camera-Open-Bonet.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/5a1e0db9-8f63-4d48-ad18-f22dc29ef933/f2e5b9d5-47b3-441d-a305-c917bd4f53cf/slot/camera-a8e45cb9-a1d3-4805-9ad0-93cb4d464d7c.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/5a1e0db9-8f63-4d48-ad18-f22dc29ef933/9144456f-e1b6-4508-a6c6-24a7f4d32765/slot/camera-Right-Side-Underbody.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/263cdb0e-5cae-4f16-ba93-6e592cdeda41/4fbef89a-db9c-4be7-8a43-c50536a26388/slot/camera-Front-underbody.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/263cdb0e-5cae-4f16-ba93-6e592cdeda41/021e27a2-8b21-4fb8-9728-11f1680de084/slot/camera-Open-Bonet.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/85aa96fc-db73-40b9-9cc1-67e701871b5b/slot/Exterior-3.jpg?w=750&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/85aa96fc-db73-40b9-9cc1-67e701871b5b/slot/Exterior-3.jpg?w=750&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/429ca2f2-e442-4cba-a37e-a6f5e31baa80/slot/Exterior-1.jpg?w=750&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/3b4f8bae-4a4a-4f29-88dd-91a02227587d/e5b07ec8-4431-487b-a2cb-c504546bf005/slot/camera-4ae880c9-7c90-4745-9672-cc153ead6353.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/5ea973b7-8d0a-46cb-a56a-0a62bf026fc2/slot/RHS-Tail-Light.jpg?w=750&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/666d40acc4d2f6209a6e7a8c/f08aa260-5e73-4a00-8c35-9453421e961d/slot/RHS-Running-Board.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/3b4f8bae-4a4a-4f29-88dd-91a02227587d/0f6b4c7e-1ed7-4fc7-816f-9fbcc40926d4/slot/camera-1acb7d08-9234-4f6d-8665-34a231a148e4.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/e7fdbf69-222c-449c-ae70-818cfea8e212/4e7e61d8-64e7-447f-b226-4aa7107013a4/slot/camera-240dcec9-e1b8-49de-a5d6-e12d79166676.jpg?w=750&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/667ce725a1687eff17fa8d17/da481ff7-3c7f-4c51-b21e-f82146fcce03/slot/RHS-Pillar-C.jpg?w=750&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/666d40acc4d2f6209a6e7a8c/a67ecddb-8ac1-47e2-bda4-4575c10c56c1/slot/RHS-Tail-Light.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/6d589482-e93b-4fcc-a7b4-db83ff3fa510/0d6dc6df-018d-4ee6-95e5-6b6d56ed5fde/slot/camera-d15211b3-3898-4842-b463-4f2c12d62dd3.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/3b4f8bae-4a4a-4f29-88dd-91a02227587d/e15360fb-a064-4f6a-8d8d-545834d3d7b2/slot/camera-Left-Front-Wheel.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/3b4f8bae-4a4a-4f29-88dd-91a02227587d/7c8a5829-2d6f-45a3-b4b5-bf298b235d3d/slot/camera-Right-Front-Wheel.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/3b4f8bae-4a4a-4f29-88dd-91a02227587d/c3084f7e-1170-4658-b459-43d020470581/slot/camera-Left-Rear-Wheel.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/3b4f8bae-4a4a-4f29-88dd-91a02227587d/9efa8938-0d10-4e70-aa3b-156e527d7823/slot/camera-Right-Rear-Wheel.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/3b4f8bae-4a4a-4f29-88dd-91a02227587d/40b68837-0559-4004-a3d3-3441394d53ca/slot/camera-Spare-Tyre.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/7cd3913d-ec8b-46ff-b97b-456627994883/slot/Elec-Int4.jpg?w=750&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/7cd3913d-ec8b-46ff-b97b-456627994883/slot/Elec-Int4.jpg?w=750&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/667ce725a1687eff17fa8d17/0ee34a6f-3f1b-424a-ab06-131b294214d5/slot/RHS-Running-Board.jpg?w=750&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/667ce725a1687eff17fa8d17/147d0910-e384-46bd-ba5f-7e98264abf36/slot/RHS-Quarter-Panel.jpg?w=750&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/667ce725a1687eff17fa8d17/600eaa75-d061-4381-b20c-13f771d21738/slot/b2efc964-867e-45fe-8d5e-3155922a2e4d.jpg.jpg?w=750&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/372d7d54-17c9-4e34-b973-81aa955b2cb7/slot/Elec-Int3.jpg?w=750&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/7cd3913d-ec8b-46ff-b97b-456627994883/slot/Elec-Int4.jpg?w=750&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/7cd3913d-ec8b-46ff-b97b-456627994883/slot/Elec-Int4.jpg?w=750&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/5a1e0db9-8f63-4d48-ad18-f22dc29ef933/601be27d-d371-436a-9029-6b13e2eb0cf0/slot/camera-fa90bba3-3581-4f8a-856b-6a86e81dc945.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/5a1e0db9-8f63-4d48-ad18-f22dc29ef933/601be27d-d371-436a-9029-6b13e2eb0cf0/slot/camera-fa90bba3-3581-4f8a-856b-6a86e81dc945.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/3b4f8bae-4a4a-4f29-88dd-91a02227587d/083c59da-97eb-4618-974a-04d755a47b1f/slot/camera-161dc0bb-ff69-4e8b-b86c-28326cd374e8.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/3b4f8bae-4a4a-4f29-88dd-91a02227587d/7dabba24-44b6-4565-9ddb-19666b8718de/slot/camera-Open-Bonet.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/3b4f8bae-4a4a-4f29-88dd-91a02227587d/7c8a5829-2d6f-45a3-b4b5-bf298b235d3d/slot/camera-Right-Front-Wheel.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/6d589482-e93b-4fcc-a7b4-db83ff3fa510/5881ce42-f7b6-4422-90b5-ced12a417cc8/1.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/666d40acc4d2f6209a6e7a8c/4b925962-4fd3-458f-8e5b-5b6d9d51ece6/slot/WhatsApp-Image-2024-06-15-at-12.53.14-PM.jpeg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/666d40acc4d2f6209a6e7a8c/a67ecddb-8ac1-47e2-bda4-4575c10c56c1/slot/RHS-Tail-Light.jpg?w=700&h=403&auto=format",
 "https://fastly-production.24c.in/hello-ar/dev/uploads/3b4f8bae-4a4a-4f29-88dd-91a02227587d/7dabba24-44b6-4565-9ddb-19666b8718de/slot/camera-Open-Bonet.jpg?w=700&h=403&auto=format"
];

const openLightbox = (image) => {
 setCurrentImage(image);
 setIsOpen(true);
};

const closeLightbox = () => {
 setIsOpen(false);
};


  return (
    <div className='   bg-white border-2 rounded-md shadow-md p-7 m-3 '>

<div className="flex   items-center gap-2 font-bold text-white md:ml-[90rem] ml-[10rem]">
      <span className='bg-green-600 px-3 rounded-sm'>{rated}</span>
      <Rating value={4} onChange={(value) => setRated(value)} />
      <Typography color="blue-gray" className="font-medium text-blue-gray-500">
        
      </Typography>
        </div>


{/* Exterior Panel */}
     
      
      <div className=' '>

      <div className='-mt-5 mb-3 '>
     <Typography variant="h5" className='text-black font-bold pb-10'>
      <span ><u>Exterior</u></span>
      </Typography>
      </div>

      <div className='mt-5 '>
        <div className='-mt-5 mb-2 -ml-4 '>
      <Typography variant="h5" className='text-black font-bold pb-4 pt-5 '>
      <span className='bg-indigo-200 rounded-md p-1 m-1 px-3 '>Structure</span>
      </Typography>
      </div>
      <Grid container spacing={5}>
       
      <Grid item xs={12} sm={6}>
          <Typography variant="body1" onChange={handleChange}>Cowl Top : {formData.CowlTop}</Typography>
          <img className="w-24 h-14 ml-auto -mt-8"
        src={images[0]} alt="No Image" onClick={() => openLightbox(images[0])} />
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Boot Floor  : {formData.BootFloor}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[1]} alt="No Image" onClick={() => openLightbox(images[1])}/>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Right Apron LEG : {formData.RightApronLEG}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[2]} alt="No Image" onClick={() => openLightbox(images[2])}/>
        </Grid>

        {/* Insurance Type */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Left Apron LEG  : {formData.LeftApronLEG}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[3]} alt="No Image" onClick={() => openLightbox(images[3])}/>
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Left Apron : {formData.LeftApron}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[4]} alt="No Image" onClick={() => openLightbox(images[4])}/>
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Right Apron : {formData.RightApron}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[5]} alt="No Image" onClick={() => openLightbox(images[5])}/>
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Left Pillar : {formData.LeftPillar}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[6]} alt="No Image" onClick={() => openLightbox(images[6])}/>
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Right Pillar : {formData.RightPillar}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[7]} alt="No Image" onClick={() => openLightbox(images[7])}/>
        </Grid>

      </Grid>
      </div>

        <div className='mt-10'>
        <div className='-mt-5 mb-2 -ml-4'>
      <Typography variant="h5" className='text-black font-bold pb-4 '>
      <span className='bg-indigo-200 rounded-md p-1 m-1 px-3 '>Exterior Panel</span>
      </Typography>
      </div>

      <Grid container spacing={3} >
      <Grid item xs={12} sm={6}>
        
          <Typography variant="body1" onChange={handleChange}>Bonnet Hood : {formData.BonnetHood}</Typography>
          <img className="w-24 h-14 ml-auto -mt-8"
        src={images[8]} alt="No Image" onClick={() => openLightbox(images[8])}/>
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Right Door Front : {formData.RightDoorFront}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[9]} alt="No Image" onClick={() => openLightbox(images[9])}/>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Left Door Front : {formData.LeftDoorFront}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[10]} alt="No Image" onClick={() => openLightbox(images[10])}/>
        </Grid>

        {/* Insurance Type */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Left Fender : {formData.LeftFender}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[11]} alt="No Image" onClick={() => openLightbox(images[11])}/>
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Right Fender : {formData.RightFender}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[12]} alt="No Image" onClick={() => openLightbox(images[12])}/>
        </Grid>

        {/* Under Hypothecation */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Left Quarter Panel : {formData.LeftQuarterPanel}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[13]} alt="No Image" onClick={() => openLightbox(images[13])}/>
        </Grid>

        {/* Road Tax Paid */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Right Quarter Panel : {formData.RightQuarterPanel}</Typography>
        <img className="w-24 max-h-14 ml-auto -mt-8"
        src={images[14]} alt="No Image" onClick={() => openLightbox(images[14])}/>
        </Grid>

        {/* Partipeshi Request */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Roof : {formData.Roof}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[15]} alt="No Image" onClick={() => openLightbox(images[15])}/>
        </Grid>

        {/* Partipeshi Request */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Dicky Door : {formData.DickyDoor}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[16]} alt="No Image" onClick={() => openLightbox(images[16])}/>
        </Grid>

        {/* Duplicate Key */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Left Door Rear : {formData.LeftDoorRear}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[17]} alt="No Image" onClick={() => openLightbox(images[17])}/>
        </Grid>

        {/* Chassis Number Embossing */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Right Door Rear : {formData.RightDoorRear}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[18]} alt="No Image" onClick={() => openLightbox(images[18])}/>
        </Grid>

        </Grid>
        </div>
        </div>
      


{/* TYRE 
LHS Front Tyre : options - ok- 69-85% , not-ok- 22-38%, Damaged
RHS Front Tyre : options - 69-85%, Damaged
LHS Rear Tyre : options - 69-85%, Damaged
RHS Rear Tyre : options - 69-85%, Damaged
Spare Tyre : options - 69-85%, Damaged
*/}
      
      <div className='mt-10'>
        <div className='-mt-5 mb-2 -ml-4 '>
      <Typography variant="h5" className='text-black font-bold pb-4 pt-5 '>
      <span className='bg-indigo-200 rounded-md p-1 m-1 px-3 '>Tyre</span>
      </Typography>
      </div>
      <Grid container spacing={5}>
       
      <Grid item xs={12} sm={6}>
          <Typography variant="body1" onChange={handleChange}>LHS Front Tyre : {formData.LHSFrontTyre}</Typography>
          <img className="w-24 h-14 ml-auto -mt-8"
        src={images[19]} alt="No Image" onClick={() => openLightbox(images[19])}/>
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>RHS Front Tyre : {formData.RHSFrontTyre}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[20]} alt="No Image" onClick={() => openLightbox(images[20])}/>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>LHS Rear Tyre : {formData.LHSRearTyre}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[21]} alt="No Image" onClick={() => openLightbox(images[21])}/>
        </Grid>

        {/* Insurance Type */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>RHS Rear Tyre : {formData.RHSRearTyre}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[22]} alt="No Image" onClick={() => openLightbox(images[22])}/>
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Spare Tyre : {formData.SpareTyre}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[23]} alt="No Image" onClick={() => openLightbox(images[23])}/>
        </Grid>

      </Grid>
      </div>

     {/* Windshield and Lights
Windshield :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,
Not Working
Light :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,
Not Working
Front Bumper :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,
Not Working
Rear Bumper :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged
Not Working
LHS Headlight :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,
Not Working
RHS Headlight :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,
Not Working, moisture
LHS Taillight :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,
Not Working
RHS Taillight :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,
Not Working */}



      <div className='mt-10'>
        <div className='-mt-5 mb-2 -ml-4 '>
      <Typography variant="h5" className='text-black font-bold pb-4 pt-5 '>
      <span className='bg-indigo-200 rounded-md p-1 m-1 px-3 '>Windshield and Lights</span>
      </Typography>
      </div>
      <Grid container spacing={5} >
      <Grid item xs={12} sm={6}>
          <Typography variant="body1" onChange={handleChange}>Windshield : {formData.Windshield}</Typography>
          <img className="w-24 h-14 ml-auto -mt-8"
        src={images[24]} alt="No Image" onClick={() => openLightbox(images[24])}/>
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Light : {formData.Light}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[25]} alt="No Image" onClick={() => openLightbox(images[25])}/>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>

        <Typography variant="body1" onChange={handleChange}>Front Bumper : {formData.FrontBumper}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[26]} alt="No Image" onClick={() => openLightbox(images[26])}/>
        </Grid>

        {/* Insurance Type */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Rear Bumper : {formData.RearBumper}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[27]} alt="No Image" onClick={() => openLightbox(images[27])}/>
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>LHS Headlight : {formData.LHSHeadlight}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[28]} alt="No Image" onClick={() => openLightbox(images[28])}/>
        </Grid>

        {/* Under Hypothecation */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>RHS Headlight : {formData.RHSHeadlight}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[29]} alt="No Image" onClick={() => openLightbox(images[29])}/>
        </Grid>

        {/* Road Tax Paid */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>LHS Taillight : {formData.LHSTaillight}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[30]} alt="No Image" onClick={() => openLightbox(images[30])}/>
        </Grid>

        {/* Partipeshi Request */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>RHS Taillight : {formData.RHSTaillight}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[31]} alt="No Image" onClick={() => openLightbox(images[31])}/>
        </Grid>

         {/* Partipeshi Request */}
         <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>LHS ORVM  : {formData.LHSORVM }</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[32]} alt="No Image" onClick={() => openLightbox(images[32])}/>
        </Grid>

         {/* Partipeshi Request */}
         <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>RHS ORVM : {formData.RHSORVM}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[33]} alt="No Image" onClick={() => openLightbox(images[33])}/>
        </Grid>

        

        </Grid>
        </div>


     {/* Other components
Head Light Support :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged
Radiator Support :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged
Alloy Wheel :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged
Car Pooling on One Sid */}


      <div className='mt-10'>
        <div className='-mt-5 mb-2 -ml-4 '>
      <Typography variant="h5" className='text-black font-bold pb-4 pt-5 '>
      <span className='bg-indigo-200 rounded-md p-1 m-1 px-3 '>Other Components</span>
      </Typography>
      </div>
      <Grid container spacing={5}>
       
      <Grid item xs={12} sm={6}>
          <Typography variant="body1" onChange={handleChange}>Head Light Support : {formData.HeadLightSupport}</Typography>
          <img className="w-24 h-14 ml-auto -mt-8"
        src={images[34]} alt="No Image" onClick={() => openLightbox(images[34])}/>
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Radiator Support : {formData.RadiatorSupport}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[35]} alt="No Image" onClick={() => openLightbox(images[35])}/>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Alloy Wheel : {formData.AlloyWheel}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[36]} alt="No Image" onClick={() => openLightbox(images[36])}/>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Car Pooling On : {formData.CarPoolingOn}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[37]} alt="No Image" onClick={() => openLightbox(images[37])}/>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>LHS Running Border  : {formData.LHSRunningBorder }</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[38]} alt="No Image" onClick={() => openLightbox(images[38])}/>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>RHS Running Border : {formData.RHSRunningBorder}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[39]} alt="No Image" onClick={() => openLightbox(images[39])}/>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Upper Cross Member(Bonnet Patti) : {formData.UpperCrossMember}</Typography>
        <img className="w-24 h-14 ml-auto -mt-8"
        src={images[40]} alt="No Image" onClick={() => openLightbox(images[40])}/>
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

export default ExteriorSection;
