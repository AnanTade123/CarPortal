import React from 'react';
import { MenuItem, FormControl, Select, InputLabel, Grid, Typography } from '@material-ui/core';

// AC Cooling :- status/options- Ineffective, Not Working
// Heater :- status/options- Ineffective, Not Working
// Climate Control AC
// Ac Vent :- status/options- damaged

const AC = () => {
  const [formData, setFormData] = React.useState({
    ACCooling: [],
    Heater: [],
    ClimateControlAC: [],
    AcVent: [],
    
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  return (
    <div className='p-4'>
      <Typography variant="h4" className='text-black font-bold pb-5'>
      AC 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>AC Cooling</InputLabel>
            <Select
              name="ACCooling"
              multiple
              value={formData.ACCooling}
              onChange={handleChange}
            >
              <MenuItem value="Misfiring">Ineffective</MenuItem>
              <MenuItem value="Long cranking due to weak Compression">Not Working</MenuItem>
        
             
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Heater</InputLabel>
            <Select
              name="Heater"
              multiple
              value={formData.Heater}
              onChange={handleChange}
            >
          <MenuItem value="Misfiring">Ineffective</MenuItem>
              <MenuItem value="Long cranking due to weak Compression">Not Working</MenuItem>
        
              
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Climate Control AC</InputLabel>
            <Select
              name="Climate Control AC"
              multiple
              value={formData.ClimateControlAC}
              onChange={handleChange}
            >
             <MenuItem value="Misfiring">Ineffective</MenuItem>
              <MenuItem value="Long cranking due to weak Compression">Not Working</MenuItem>
        
             
            </Select>
          </FormControl>
        </Grid>
 
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Ac Vent</InputLabel>
            <Select
              name="Ac Vent"
              multiple
              value={formData.AcVent}
              onChange={handleChange}
            >
              <MenuItem value="minor sound">Abnormal Noise</MenuItem>
              <MenuItem value="No engine sound">Weak</MenuItem>
             
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

export default AC;
