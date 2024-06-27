import React from 'react';
import { MenuItem, FormControl, Select, InputLabel,  Grid, Typography } from '@material-ui/core';

const Exterior = () => {

  const [formData, setFormData] = React.useState({
    BonnetHood : [],
    RightDoorFront : [],
    LeftDoorFront : [],
    RightFender: [],
    LeftQuarterPanel: [],
    RightQuarterPanel: [],
    Roof : [],
    DickyDoor : [],
    LeftDoorRear : [],
    RightDoorRear : [],
    LHSFrontTyre : [],
    RHSFrontTyre: [],
    LHSRearTyre: [],
    RHSRearTyre: [],
    SpareTyre: [],
    Windshield: [],
    Light: [],
    FrontBumper: [],
    RearBumper: [],
    LHSHeadlight: [],
    RHSHeadlight: [],
    LHSTaillight: [],
    RHSTaillight: [],
    HeadLightSupport: [],
    RadiatorSupport: [],
    AlloyWheel: [],


  });

 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
console.log(formData)
  return (
    <div className='p-4'>

{/* Exterior Panel */}
      <Typography variant="h4" className='text-black font-bold pb-5'>
      Exterior Panel
      </Typography>
      <Grid container spacing={3}>
       
        <Grid item xs={12} sm={6} >
          <FormControl fullWidth>
            <InputLabel>Bonnet Hood</InputLabel>
            <Select
              name="BonnetHood"
              value={formData.BonnetHood}
              onChange={handleChange}
              color="Green"
              multiple
              
            >
              <MenuItem value="Yes"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>

            </Select>
          </FormControl>
        </Grid>

        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Right Door Front </InputLabel>
            <Select
              name="RightDoorFront "
              value={formData.RightDoorFront }
              onChange={handleChange}
              multiple
            >
              <MenuItem value="Yes"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Left Door Front</InputLabel>
            <Select
              name="LeftDoorFront"
              value={formData.LeftDoorFront}
              onChange={handleChange}
              multiple
            >
            <MenuItem value="Yes"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Insurance Type */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Right Fender</InputLabel>
            <Select
              name="RightFender"
              value={formData.RightFender}
              onChange={handleChange}
              multiple
            >
              <MenuItem value="Yes"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel> Left Quarter Panel</InputLabel>
            <Select
              name=" LeftQuarterPanel"
              value={formData. LeftQuarterPanel}
              onChange={handleChange}
              multiple
              
            >
             <MenuItem value="Yes"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Under Hypothecation */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>RightQuarterPanel</InputLabel>
            <Select
              name="RightQuarterPanel"
              value={formData.RightQuarterPanel}
              onChange={handleChange}
              multiple
            >
            <MenuItem value="Yes"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Road Tax Paid */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Roof</InputLabel>
            <Select
              name="Roof"
              value={formData.Roof}
              onChange={handleChange}
              multiple
            >
              <MenuItem value="Yes"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Partipeshi Request */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Dicky Door</InputLabel>
            <Select
              name="DickyDoor"
              value={formData.DickyDoor}
              onChange={handleChange}
              multiple
            >
              <MenuItem value="Yes"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Duplicate Key */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>LeftDoorRear</InputLabel>
            <Select
              name="LeftDoorRear"
              value={formData.LeftDoorRear}
              onChange={handleChange}
              multiple
            >
              <MenuItem value="Yes"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Chassis Number Embossing */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>RightDoorRear</InputLabel>
            <Select
              name="RightDoorRear"
              value={formData.RightDoorRear}
              onChange={handleChange}
              multiple
            >
             <MenuItem value="Yes"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        
        
      </Grid>


{/* TYRE 
LHS Front Tyre : options - ok- 69-85% , not-ok- 22-38%, Damaged
RHS Front Tyre : options - 69-85%, Damaged
LHS Rear Tyre : options - 69-85%, Damaged
RHS Rear Tyre : options - 69-85%, Damaged
Spare Tyre : options - 69-85%, Damaged
*/}
      <Typography variant="h4" className='text-black font-bold pb-5 pt-16 '>
        Tyres
      </Typography>
      <Grid container spacing={3}>
       
        <Grid item xs={12} sm={6} >
          <FormControl fullWidth>
            <InputLabel>LHS Front Tyre</InputLabel>
            <Select
              name="LHSFrontTyre"
              value={formData.LHSFrontTyre}
              onChange={handleChange}
              color="Green"
              multiple
              
            >
              <MenuItem value="ok-69-85%"> Ok  69-85% </MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              

            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} >
          <FormControl fullWidth>
            <InputLabel>RHS Front Tyre</InputLabel>
            <Select
              name="RHSFrontTyre"
              value={formData.RHSFrontTyre}
              onChange={handleChange}
              color="Green"
              multiple
              
            >
              <MenuItem value="ok-69-85%"> Ok  69-85% </MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              

            </Select>
          </FormControl>
        </Grid>

        

    
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>LHS Rear Tyre</InputLabel>
            <Select
              name="LHSRearTyre"
              value={formData.LHSRearTyre}
              onChange={handleChange}
              multiple
            >
            <MenuItem value="ok-69-85%"> Ok  69-85% </MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
            </Select>
          </FormControl>
        </Grid>

     
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>RHS Rear Tyre</InputLabel>
            <Select
              name="RHSRearTyre"
              value={formData.RHSRearTyre}
              onChange={handleChange}
              multiple
            >
              <MenuItem value="ok-69-85%"> Ok  69-85% </MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Spare Tyre</InputLabel>
            <Select
              name="SpareTyre"
              value={formData.SpareTyre}
              onChange={handleChange}
              multiple
            >
              <MenuItem value="ok-69-85%"> Ok  69-85% </MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        

 
        

        
        
      </Grid>


     {/* Windshield and Lights
Windshield :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,
Not Working
Light :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,
Not Working
Front Bumper :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,
Not Working
Rear Bumper :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged
Not Working
LHS Headlight :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,
Not Working
RHS Headlight :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,
Not Working, moisture
LHS Taillight :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,
Not Working
RHS Taillight :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,
Not Working */}


      <Typography variant="h4" className='text-black font-bold pb-5 pt-16 '>
      Windshield And Lights
      </Typography>
      <Grid container spacing={3}>
       
        <Grid item xs={12} sm={6} >
          <FormControl fullWidth>
            <InputLabel>Windshield</InputLabel>
            <Select
              name="Windshield"
              value={formData.Windshield}
              onChange={handleChange}
              color="Green"
              multiple

              
            >
             
             <MenuItem value="Repainted"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted"> Rusted </MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
              

            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} >
          <FormControl fullWidth>
            <InputLabel>Light</InputLabel>
            <Select
              name="Light"
              value={formData.Light}
              onChange={handleChange}
              color="Green"
              multiple
              
            >
              <MenuItem value="Repainted"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted"> Rusted </MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
              

            </Select>
          </FormControl>
        </Grid>

        

    
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Front Bumper</InputLabel>
            <Select
              name="FrontBumper"
              value={formData.FrontBumper}
              onChange={handleChange}
              multiple
            >
            <MenuItem value="ok-69-85%"> Ok  69-85% </MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
            </Select>
          </FormControl>
        </Grid>

     
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Rear Bumper</InputLabel>
            <Select
              name="RearBumper"
              value={formData.RearBumper}
              onChange={handleChange}
              multiple
            >
           
           <MenuItem value="Repainted"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted"> Rusted </MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>LHS Headlight</InputLabel>
            <Select
              name="LHSHeadlight"
              value={formData.LHSHeadlight}
              onChange={handleChange}
              multiple
            >
        
        <MenuItem value="Repainted"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted"> Rusted </MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>RHS Headlight</InputLabel>
            <Select
              name="RHSHeadlight"
              value={formData.RHSHeadlight}
              onChange={handleChange}
              multiple
            >
              
              <MenuItem value="Repainted"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted"> Rusted </MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>LHS Taillight</InputLabel>
            <Select
              name="LHSTaillight"
              value={formData.LHSTaillight}
              onChange={handleChange}
              multiple
            >
           
           <MenuItem value="Repainted"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted"> Rusted </MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>RHS Taillight</InputLabel>
            <Select
              name="RHSTaillight"
              value={formData.RHSTaillight}
              onChange={handleChange}
              multiple
            >
             
             <MenuItem value="Repainted"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted"> Rusted </MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
      </Grid>


     {/* Other components
Head Light Support :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged
Radiator Support :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged
Alloy Wheel :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged
Car Pooling on One Sid */}

      <Typography variant="h4" className='text-black font-bold pb-5 pt-16 '>
      Other Components
      </Typography>
      <Grid container spacing={3}>
       
        <Grid item xs={12} sm={6} >
          <FormControl fullWidth>
            <InputLabel>Head Light Support</InputLabel>
            <Select
              name="HeadLightSupport"
              value={formData.HeadLightSupport}
              onChange={handleChange}
              color="Green"
              multiple
              
            >
             
             <MenuItem value="Repainted"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted"> Rusted </MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
           
              

            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} >
          <FormControl fullWidth>
            <InputLabel>Radiator Support</InputLabel>
            <Select
              name="RadiatorSupport"
              value={formData.RadiatorSupport}
              onChange={handleChange}
              color="Green"
              multiple
              
            >
              <MenuItem value="Repainted"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted"> Rusted </MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              
              

            </Select>
          </FormControl>
        </Grid>

        

    
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Alloy Wheel</InputLabel>
            <Select
              name="AlloyWheel"
              value={formData.AlloyWheel}
              onChange={handleChange}
              multiple
            >
            
            <MenuItem value="Repainted"> Repainted </MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted"> Rusted </MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
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

export default Exterior;
