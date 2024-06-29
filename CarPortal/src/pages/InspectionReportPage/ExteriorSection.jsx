import React from 'react';
import {   Grid, Typography } from '@material-ui/core';

const ExteriorSection = () => {

  const [formData, setFormData] = React.useState({
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
    HeadLightSupport: "Damaged",
    RadiatorSupport: "Repaired",
    AlloyWheel: "Scratched",
    

  });

 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(handleChange);
console.log(formData)
  return (
    <div className='p-4 flex-col '>

{/* Exterior Panel */}
     <Typography variant="h4" className='text-black font-bold pb-10'>
      <span >Exterior</span>
      </Typography>

      <Typography variant="h5" className='text-black font-bold pb-4 '>
      <span className='bg-indigo-200 rounded-md p-1 m-1 px-3 '>Exterior Panel</span>
      </Typography>
      <div className=' bg-white border-2 rounded-md shadow-md p-7 -mt-2'>
      <Grid container spacing={3} >
      <Grid item xs={12} sm={6}>
        
          <Typography variant="body1">Bonnet Hood : {formData.BonnetHood}</Typography>
          <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/85aa96fc-db73-40b9-9cc1-67e701871b5b/slot/Exterior-3.jpg?w=750&auto=format" alt="No Image" />
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Right Door Front : {formData.RightDoorFront}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/85aa96fc-db73-40b9-9cc1-67e701871b5b/slot/Exterior-3.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Left Door Front : {formData.LeftDoorFront}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/429ca2f2-e442-4cba-a37e-a6f5e31baa80/slot/Exterior-1.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* Insurance Type */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Left Fender : {formData.LeftFender}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/9b6fb732-0d4a-40f1-aafd-c373c20d707f/slot/b6ca4b3d-9cc3-43cc-a273-3a69f9c97548.jpg.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Right Fender : {formData.RightFender}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/5ea973b7-8d0a-46cb-a56a-0a62bf026fc2/slot/RHS-Tail-Light.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* Under Hypothecation */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Left Quarter Panel : {formData.LeftQuarterPanel}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/8c1ad14f-432f-44df-aeff-2d6d315ac1dd/slot/LHS-Running-Board.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* Road Tax Paid */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Right Quarter Panel : {formData.RightQuarterPanel}</Typography>
        <img className="w-25 max-h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/85aa96fc-db73-40b9-9cc1-67e701871b5b/slot/Exterior-3.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* Partipeshi Request */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Roof : {formData.Roof}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/e7fdbf69-222c-449c-ae70-818cfea8e212/4e7e61d8-64e7-447f-b226-4aa7107013a4/slot/camera-240dcec9-e1b8-49de-a5d6-e12d79166676.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* Partipeshi Request */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Dicky Door : {formData.DickyDoor}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/667ce725a1687eff17fa8d17/da481ff7-3c7f-4c51-b21e-f82146fcce03/slot/RHS-Pillar-C.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* Duplicate Key */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Left Door Rear : {formData.LeftDoorRear}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/85aa96fc-db73-40b9-9cc1-67e701871b5b/slot/Exterior-3.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* Chassis Number Embossing */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Right Door Rear : {formData.RightDoorRear}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/85aa96fc-db73-40b9-9cc1-67e701871b5b/slot/Exterior-3.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        </Grid>
        </div>
      


{/* TYRE 
LHS Front Tyre : options - ok- 69-85% , not-ok- 22-38%, Damaged
RHS Front Tyre : options - 69-85%, Damaged
LHS Rear Tyre : options - 69-85%, Damaged
RHS Rear Tyre : options - 69-85%, Damaged
Spare Tyre : options - 69-85%, Damaged
*/}
      <Typography variant="h5" className='text-black font-bold pb-4 pt-5 '>
      <span className='bg-indigo-200 rounded-md p-1 m-1 px-3 '>Tyre</span>
      </Typography>
      <div className=' bg-white border-2 rounded-md shadow-md p-7 -mt-2'>
      <Grid container spacing={5}>
       
      <Grid item xs={12} sm={6}>
          <Typography variant="body1">LHS Front Tyre : {formData.LHSFrontTyre}</Typography>
          <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/85aa96fc-db73-40b9-9cc1-67e701871b5b/slot/Exterior-3.jpg?w=750&auto=format" alt="No Image" />
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">RHS Front Tyre : {formData.RHSFrontTyre}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/85aa96fc-db73-40b9-9cc1-67e701871b5b/slot/Exterior-3.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">LHS Rear Tyre : {formData.LHSRearTyre}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/85aa96fc-db73-40b9-9cc1-67e701871b5b/slot/Exterior-3.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* Insurance Type */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">RHS Rear Tyre : {formData.RHSRearTyre}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/85aa96fc-db73-40b9-9cc1-67e701871b5b/slot/Exterior-3.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Spare Tyre : {formData.SpareTyre}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/85aa96fc-db73-40b9-9cc1-67e701871b5b/slot/Exterior-3.jpg?w=750&auto=format" alt="No Image" />
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


<Typography variant="h5" className='text-black font-bold pb-4 pt-5 '>
      <span className='bg-indigo-200 rounded-md p-1 m-1 px-3 '>Windshield and Lights</span>
      </Typography>
      <div className=' bg-white border-2 rounded-md shadow-md p-7 -mt-2'>
      <Grid container spacing={5} >
      <Grid item xs={12} sm={6}>
          <Typography variant="body1">Windshield : {formData.Windshield}</Typography>
          <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/7cd3913d-ec8b-46ff-b97b-456627994883/slot/Elec-Int4.jpg?w=750&auto=format" alt="No Image" />
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Light : {formData.Light}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/7cd3913d-ec8b-46ff-b97b-456627994883/slot/Elec-Int4.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>

        <Typography variant="body1">Front Bumper : {formData.FrontBumper}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/667ce725a1687eff17fa8d17/0ee34a6f-3f1b-424a-ab06-131b294214d5/slot/RHS-Running-Board.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* Insurance Type */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Rear Bumper : {formData.RearBumper}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/667ce725a1687eff17fa8d17/147d0910-e384-46bd-ba5f-7e98264abf36/slot/RHS-Quarter-Panel.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">LHS Headlight : {formData.LHSHeadlight}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/667ce725a1687eff17fa8d17/600eaa75-d061-4381-b20c-13f771d21738/slot/b2efc964-867e-45fe-8d5e-3155922a2e4d.jpg.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* Under Hypothecation */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">RHS Headlight : {formData.RHSHeadlight}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/372d7d54-17c9-4e34-b973-81aa955b2cb7/slot/Elec-Int3.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* Road Tax Paid */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">LHS Taillight : {formData.LHSTaillight}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/7cd3913d-ec8b-46ff-b97b-456627994883/slot/Elec-Int4.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* Partipeshi Request */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">RHS Taillight : {formData.RHSTaillight}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/6673c20a0f8714bf5665db0e/7cd3913d-ec8b-46ff-b97b-456627994883/slot/Elec-Int4.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        

        </Grid>
        </div>


     {/* Other components
Head Light Support :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged
Radiator Support :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged
Alloy Wheel :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged
Car Pooling on One Sid */}

<Typography variant="h5" className='text-black font-bold pb-4 pt-5 '>
      <span className='bg-indigo-200 rounded-md p-1 m-1 px-3 '>Other Components</span>
      </Typography>
      <div className=' bg-white border-2 rounded-md shadow-md p-7 -mt-2'>
      <Grid container spacing={5}>
       
      <Grid item xs={12} sm={6}>
          <Typography variant="body1">Head Light Support : {formData.HeadLightSupport}</Typography>
          <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/667ce725a1687eff17fa8d17/0ee34a6f-3f1b-424a-ab06-131b294214d5/slot/RHS-Running-Board.jpg?w=750&auto=format" alt="No Image" />
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Radiator Support : {formData.RadiatorSupport}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/667ce725a1687eff17fa8d17/0ee34a6f-3f1b-424a-ab06-131b294214d5/slot/RHS-Running-Board.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Alloy Wheel : {formData.AlloyWheel}</Typography>
        <img className="w-25 h-14 ml-auto -mt-8"
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/667ce725a1687eff17fa8d17/0ee34a6f-3f1b-424a-ab06-131b294214d5/slot/RHS-Running-Board.jpg?w=750&auto=format" alt="No Image" />
        </Grid>

        

      </Grid>
      </div>

      {/* <div className="flex justify-between mt-10 px-8">
      <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24">
        Previous
      </button>
      <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
      >
        Next
      </button>
    </div> */}
    </div>
  );
};

export default ExteriorSection;
