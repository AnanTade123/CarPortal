import React from 'react';
import { Grid, Typography } from '@material-ui/core';

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

  return (
    <div className='p-4'>
      <Typography variant="h4" className='text-black font-bold pb-5'>
        Engine
      </Typography>
      <div className=' bg-white border-2 rounded-md shadow-md p-7 -mt-2'>
      <Grid container spacing={5} >
      <Grid item xs={12} sm={6}>
          <Typography variant="body1">Engine : {formData.Engine}</Typography>
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Engin Mounting : {formData.EnginMounting}</Typography>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Engine Sound : {formData.EngineSound}</Typography>
        </Grid>

        {/* Insurance Type */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Exhaust Smoke : {formData.Exhaustsmoke}</Typography>
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Gearbox : {formData.Gearbox}</Typography>
        </Grid>

        {/* Under Hypothecation */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Engine Oil : {formData.Engineoil}</Typography>
        </Grid>

        {/* Road Tax Paid */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Battery : {formData.Battery}</Typography>
        </Grid>

        {/* Partipeshi Request */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Coolant : {formData.Coolant}</Typography>
        </Grid>

        {/* Partipeshi Request */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Clutch : {formData.Clutch}</Typography>
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

export default EngineSection;
