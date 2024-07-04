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
    <div className=' bg-white border-2 rounded-md shadow-md md:p-7 md:m-3 p-5 md:mt-10'>
     
      <div className=''>

     



        <div className='-mt-5 mb-2 '>
      <Typography variant="h5" className='text-black font-bold pb-10 mt-5'>
     <u>Steering</u> 
      </Typography>
      </div>
      <Grid container spacing={5} >
      <Grid item xs={12} sm={6}>
          <Typography variant="body1" onChange={handleChange}>Steering : {formData.Steering}</Typography>
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Brake : {formData.Brake}</Typography>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" onChange={handleChange}>Suspension : {formData.Suspension}</Typography>
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
   Download
  </Button>
  </div>
    </div>
  );
};

export default SteeringSection;
