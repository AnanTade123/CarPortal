import React from 'react';
import { MenuItem, FormControl, Select, InputLabel, Grid, Typography } from '@material-ui/core';

const Engine = () => {
  const [formData, setFormData] = React.useState({
    Engine: [],
    EnginMounting: [],
    EngineSound: [],
    Exhaustsmoke: [],
    Gearbox: [],
    Engineoil: [],
    Battery: [],
    Coolant: [],
    Clutch: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  return (
    <div className='p-4'>
      <Typography variant="h4" className='text-black font-bold pb-5'>
        Engine
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Engine</InputLabel>
            <Select
              name="Engine"
              multiple
              value={formData.Engine}
              onChange={handleChange}
            >
              <MenuItem value="Misfiring">Misfiring</MenuItem>
              <MenuItem value="Long cranking due to weak Compression">Long cranking due to weak Compression</MenuItem>
              <MenuItem value="Permissible blow- by on idle">Permissible blow- by on idle</MenuItem>
              <MenuItem value="Fuel leakage from injector">Fuel leakage from injector</MenuItem>
              <MenuItem value="MIL light glowing">MIL light glowing</MenuItem>
              <MenuItem value="RPM Fluctuating">RPM Fluctuating</MenuItem>
              <MenuItem value="Over Heating">Over Heating</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>EnginMounting</InputLabel>
            <Select
              name="EnginMounting"
              multiple
              value={formData.EnginMounting}
              onChange={handleChange}
            >
              <MenuItem value="Loose">Loose</MenuItem>
              <MenuItem value="Tight">Tight</MenuItem>
              <MenuItem value="Excess Vibration">Excess Vibration</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>EngineSound</InputLabel>
            <Select
              name="EngineSound"
              multiple
              value={formData.EngineSound}
              onChange={handleChange}
            >
              <MenuItem value="minor sound">Minor sound</MenuItem>
              <MenuItem value="No engine sound">No engine sound</MenuItem>
              <MenuItem value="critical sound">Critical sound</MenuItem>
              <MenuItem value="No Blow-by">No Blow-by</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Gearbox</InputLabel>
            <Select
              name="Gearbox"
              multiple
              value={formData.Gearbox}
              onChange={handleChange}
            >
              <MenuItem value="oil leakage">Oil leakage</MenuItem>
              <MenuItem value="shifting-Hard">Shifting-Hard</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Exhaustsmoke</InputLabel>
            <Select
              name="Exhaustsmoke"
              multiple
              value={formData.Exhaustsmoke}
              onChange={handleChange}
            >
              <MenuItem value="Black">Black</MenuItem>
              <MenuItem value="Blue">Blue</MenuItem>
              <MenuItem value="Silencer assembly Damaged and Create Noise">Silencer assembly Damaged and Create Noise</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Engine oil</InputLabel>
            <Select
              name="Engineoil"
              multiple
              value={formData.Engineoil}
              onChange={handleChange}
            >
              <MenuItem value="Dirty">Dirty</MenuItem>
              <MenuItem value="leakage from Tappet Cover and Side Cover">leakage from Tappet Cover and Side Cover</MenuItem>
              <MenuItem value="oil level">Oil level</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Battery</InputLabel>
            <Select
              name="Battery"
              multiple
              value={formData.Battery}
              onChange={handleChange}
            >
              <MenuItem value="Weak">Weak</MenuItem>
              <MenuItem value="jump start">Jump start</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Coolant</InputLabel>
            <Select
              name="Coolant"
              multiple
              value={formData.Coolant}
              onChange={handleChange}
            >
              <MenuItem value="leaking">Leaking</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Clutch</InputLabel>
            <Select
              name="Clutch"
              multiple
              value={formData.Clutch}
              onChange={handleChange}
            >
              <MenuItem value="damaged">Damaged</MenuItem>
              <MenuItem value="Spongy">Spongy</MenuItem>
              <MenuItem value="Hard">Hard</MenuItem>
              <MenuItem value="Slip/ Low pick up">Slip/ Low pick up</MenuItem>
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

export default Engine;
