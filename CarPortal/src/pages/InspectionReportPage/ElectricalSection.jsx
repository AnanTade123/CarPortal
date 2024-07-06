import React from 'react';
import { Grid, Typography } from '@material-ui/core';

// Electricals
// 4 Power Windows :- status/options- Not Working
// Air Bag Features
// Music System :- status/options- Not Working
// Sunroof
// ABS
// Interior Parking Sensor
// Electrical wiring :- status/options- damage

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

  return (
    <div className='p-4'>
      <Typography variant="h4" className='text-black font-bold pb-5'>
      Electricals 
      </Typography>
      <div className=' bg-white border-2 rounded-md shadow-md p-7 -mt-2'>
      <Grid container spacing={5} >
      <Grid item xs={12} sm={6}>
          <Typography variant="body1">Four Power Windows : {formData.FourPowerWindows}</Typography>
        </Grid>


        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">AirBag Features : {formData.AirBagFeatures}</Typography>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Music System : {formData.MusicSystem}</Typography>
        </Grid>

        {/* Insurance Type */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Sunroof : {formData.Sunroof}</Typography>
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">ABS : {formData.ABS}</Typography>
        </Grid>

        {/* Under Hypothecation */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Interior Parking Sensor : {formData.InteriorParkingSensor}</Typography>
        </Grid>

        {/* Road Tax Paid */}
        <Grid item xs={12} sm={6}>
        <Typography variant="body1">Electrical Wiring : {formData.Electricalwiring}</Typography>
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

export default ElectricalSection;
