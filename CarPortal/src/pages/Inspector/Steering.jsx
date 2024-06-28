import React from 'react';
import { MenuItem, FormControl, Select, InputLabel, Grid, Typography,Button } from '@material-ui/core';

// Steering
// Steering :- status/options - Abnormal Noise, Hard
// Brake :- status/options- Noisy
// Suspension :- status/options -Abnormal Noise, Weak

const Steering = () => {
  const [formData, setFormData] = React.useState({
    Steering: [],
    Brake: [],
    Suspension: [],
    
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  return (
    <div>
    <div className='p-4'>
      <Typography variant="h4" className='text-black font-bold pb-5'>
      Steering 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Steering</InputLabel>
            <Select
              name="Steering"
              multiple
              value={formData.Steering}
              onChange={handleChange}
            >
              <MenuItem value="Misfiring">Misfiring</MenuItem>
              <MenuItem value="Long cranking due to weak Compression">Abnormal Noise</MenuItem>
              <MenuItem value="Permissible blow- by on idle"> Hard Noise</MenuItem>
             
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Brake</InputLabel>
            <Select
              name="Brake"
              multiple
              value={formData.Brake}
              onChange={handleChange}
            >
              <MenuItem value="Loose">Noisy</MenuItem>
              <MenuItem value="Tight">Hard Noise</MenuItem>
              
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Suspension</InputLabel>
            <Select
              name="Suspension"
              multiple
              value={formData.Suspension}
              onChange={handleChange}
            >
              <MenuItem value="minor sound">Abnormal Noise</MenuItem>
              <MenuItem value="No engine sound">Weak</MenuItem>
             
            </Select>
          </FormControl>
        </Grid>

       
      </Grid>
      
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

export default Steering;
