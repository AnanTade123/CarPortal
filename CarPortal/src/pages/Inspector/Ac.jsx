import  { useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel, Grid, Typography, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const Ac = () => {
  const [formData, setFormData] = useState({
    ACCooling: [],
    Heater: [],
    ClimateControlAC: [],
    AcVent: [],
  });

  const [uploadedImages, setUploadedImages] = useState({
    ACCooling: null,
    Heater: null,
    ClimateControlAC: null,
    AcVent: null,
  });

  const handleFileChange = (event, fieldName) => {
    const file = event.target.files[0];
    // Perform actions with the selected file, such as uploading
    console.log('Selected file:', file);
    // Example: Update formData state with file details
    setFormData({ ...formData, [fieldName]: file });

    // Read the file and convert it to URL for preview
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImages({ ...uploadedImages, [fieldName]: reader.result });
    };
    reader.readAsDataURL(file);
  };

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
          <div className="flex items-center mt-2">
            <input
              accept="image/*" // Accept only image files, you can modify this as needed
              style={{ display: 'none' }} // Hide the input element visually
              id="upload-ACCooling"
              type="file"
              onChange={(event) => handleFileChange(event, 'ACCooling')}
            />
            <label htmlFor="upload-ACCooling" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.ACCooling && (
            <img src={uploadedImages.ACCooling} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '10px' }} />
          )}
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
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Heater"
              type="file"
              onChange={(event) => handleFileChange(event, 'Heater')}
            />
            <label htmlFor="upload-Heater" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Heater && (
            <img src={uploadedImages.Heater} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '10px' }} />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Climate Control AC</InputLabel>
            <Select
              name="ClimateControlAC"
              multiple
              value={formData.ClimateControlAC}
              onChange={handleChange}
            >
              <MenuItem value="Misfiring">Ineffective</MenuItem>
              <MenuItem value="Long cranking due to weak Compression">Not Working</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-ClimateControlAC"
              type="file"
              onChange={(event) => handleFileChange(event, 'ClimateControlAC')}
            />
            <label htmlFor="upload-ClimateControlAC" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.ClimateControlAC && (
            <img src={uploadedImages.ClimateControlAC} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '10px' }} />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Ac Vent</InputLabel>
            <Select
              name="AcVent"
              multiple
              value={formData.AcVent}
              onChange={handleChange}
            >
              <MenuItem value="minor sound">Abnormal Noise</MenuItem>
              <MenuItem value="No engine sound">Weak</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-AcVent"
              type="file"
              onChange={(event) => handleFileChange(event, 'AcVent')}
            />
            <label htmlFor="upload-AcVent" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.AcVent && (
            <img src={uploadedImages.AcVent} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '10px' }} />
          )}
        </Grid>

      </Grid>
      <div className="flex justify-between mt-10 px-8">
        <Button variant="contained" color="primary">
          Previous
        </Button>
        <Button variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Ac;
