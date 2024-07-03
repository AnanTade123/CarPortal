import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Rating,  } from "@material-tailwind/react";

// AC Cooling :- status/options- Ineffective, Not Working
// Heater :- status/options- Ineffective, Not Working
// Climate Control AC
// Ac Vent :- status/options- damaged

const AcSection = () => {
  const [formData, setFormData] = React.useState({
    ACCooling: "Not Working",
    Heater: "ineffective",
    ClimateControlAC: "No",
    AcVent: "Damaged",
    
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  //console.log(handleChange);

  console.log(formData);

  const [rated, setRated] = React.useState(4);
 
  return (
    
    <div className='p-4'>
    
     
      <div className=' bg-white border-2 rounded-md shadow-md p-7 -mt-2 '>

      <div className="flex   items-center gap-2 font-bold text-white md:ml-[90rem] ml-[10rem]">
      <span className='bg-green-600 px-3 rounded-sm'>{rated}</span>
      <Rating value={4} onChange={(value) => setRated(value)} />
      <Typography color="blue-gray" className="font-medium text-blue-gray-500">
        
      </Typography>
        </div>

      <div className='-mt-5 mb-2 '>
      <Typography variant="h5" className='text-black font-bold pb-10'>
     <u> AC </u>
      </Typography>
      </div>
      <Grid container spacing={5} >
      <Grid item xs={12} sm={6}>
          <Typography variant="body1" onChange={handleChange}>AC Cooling : {formData.ACCooling}</Typography>
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Heater : {formData.Heater}</Typography>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Climate Control AC : {formData.ClimateControlAC}</Typography>
        </Grid>

        {/* Insurance Type */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Ac Vent : {formData.AcVent}</Typography>
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

export default AcSection;
