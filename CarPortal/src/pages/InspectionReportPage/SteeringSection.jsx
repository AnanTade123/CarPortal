import React from 'react';
import { Grid, Typography,Button } from '@material-ui/core';

// Steering
// Steering :- status/options - Abnormal Noise, Hard
// Brake :- status/options- Noisy
// Suspension :- status/options -Abnormal Noise, Weak

const SteeringSection = () => {
  const [formData, setFormData] = React.useState({
    Steering: "Abnormal Noise",
    Brake: "Hard Noise",
    Suspension: "Weak",
    
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(handleChange);

  console.log(formData);

  return (
    <div>
    <div className='p-4'>
      <Typography variant="h4" className='text-black font-bold pb-5'>
      Steering 
      </Typography>
      <div className=' bg-white border-2 rounded-md shadow-md p-7 -mt-2'>
      <Grid container spacing={5} >
      <Grid item xs={12} sm={6}>
          <Typography variant="body1">Steering : {formData.Steering}</Typography>
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Brake : {formData.Brake}</Typography>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Suspension : {formData.Suspension}</Typography>
        </Grid>

        

        </Grid>
        </div>
      
    </div>
    <div className="flex justify-center items-center mt-12">
    <Button
    variant="contained"
    color="primary"
    className="  rounded-lg bg-blue-500 text-white flex justify-centre items-center"
  >
   Submit
  </Button>
  </div>
    </div>
  );
};

export default SteeringSection;
