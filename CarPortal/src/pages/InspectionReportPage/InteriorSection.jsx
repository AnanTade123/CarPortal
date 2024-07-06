import React from 'react';
import { Grid, Typography } from '@material-ui/core';

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
  console.log(handleChange);

  console.log(formData);

  return (
    <div className='p-4'>
      <Typography variant="h4" className='text-black font-bold pb-5'>
        Interior
      </Typography>
      <div className=' bg-white border-2 rounded-md shadow-md p-7 -mt-2'>
      <Grid container spacing={5} >
      <Grid item xs={12} sm={6}>
          <Typography variant="body1">Leather Seat : {formData.LeatherSeat}</Typography>
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Odometer : {formData.Odometer}</Typography>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Dashboard : {formData.Dashboard}</Typography>
        </Grid>

        {/* Insurance Type */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Cabin Floor : {formData.CabinFloor}</Typography>
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

export default InteriorSection;
