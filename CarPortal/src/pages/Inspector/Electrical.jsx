import React from 'react';
import { MenuItem, FormControl, Select, InputLabel, Grid, Typography } from '@material-ui/core';

// Electricals
// 4 Power Windows :- status/options- Not Working
// Air Bag Features
// Music System :- status/options- Not Working
// Sunroof
// ABS
// Interior Parking Sensor
// Electrical wiring :- status/options- damage

const Electrical = () => {
  const [formData, setFormData] = React.useState({
    FourPowerWindows: [],
    AirBagFeatures: [],
    MusicSystem : [],
    Sunroof : [],
    ABS : [],
    InteriorParkingSensor : [],
    Electricalwiring : [],
    
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  return (
    <div className='p-4'>
      <Typography variant="h4" className='text-black font-bold pb-5'>
      Electricals 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>FourPowerWindows</InputLabel>
            <Select
              name="FourPowerWindows"
              multiple
              value={formData.FourPowerWindows}
              onChange={handleChange}
            >
              <MenuItem value="Misfiring">NA</MenuItem>
             
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>AirBagFeatures</InputLabel>
            <Select
              name="AirBagFeatures"
              multiple
              value={formData.AirBagFeatures}
              onChange={handleChange}
            >
                           <MenuItem value="Misfiring">NA</MenuItem>

              
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>MusicSystem</InputLabel>
            <Select
              name="MusicSystem"
              multiple
              value={formData.MusicSystem}
              onChange={handleChange}
            >
                            <MenuItem value="Misfiring">NA</MenuItem>

             
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Sunroof</InputLabel>
            <Select
              name="Sunroof"
              multiple
              value={formData.Sunroof}
              onChange={handleChange}
            >
                           <MenuItem value="Misfiring">NA</MenuItem>

            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>ABS</InputLabel>
            <Select
              name="ABS"
              multiple
              value={formData.ABS}
              onChange={handleChange}
            >
                            <MenuItem value="Misfiring">NA</MenuItem>

             
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>InteriorParkingSensor</InputLabel>
            <Select
              name="InteriorParkingSensor"
              multiple
              value={formData.InteriorParkingSensor}
              onChange={handleChange}
            >
                            <MenuItem value="Misfiring">NA</MenuItem>

             
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Electrical wiring </InputLabel>
            <Select
              name="Electricalwiring "
              multiple
              value={formData.Electricalwiring }
              onChange={handleChange}
            >
                            <MenuItem value="Misfiring">NA</MenuItem>

            </Select>
          </FormControl>
        </Grid>
       
      </Grid>
      <div className="flex justify-between mt-10 px-8">
      <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24">
        Previous
      </button>
      <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
      >
        Next
      </button>
    </div>
    </div>
  );
};

export default Electrical;
