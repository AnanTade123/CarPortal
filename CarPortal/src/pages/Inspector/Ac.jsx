import { useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel, Grid, Typography, Button, Modal, makeStyles } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    maxWidth: '90%',
    maxHeight: '90%',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
}));

const Ac = () => {
  const classes = useStyles();

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

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event, fieldName) => {
    const file = event.target.files[0];
    console.log('Selected file:', file);
    // Update formData state with file details
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

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };

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
              value={formData.ACCooling}
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
            <img
              src={uploadedImages.ACCooling}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.ACCooling)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Heater</InputLabel>
            <Select
              name="Heater"
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
            <img
              src={uploadedImages.Heater}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Heater)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Climate Control AC</InputLabel>
            <Select
              name="ClimateControlAC"
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
            <img
              src={uploadedImages.ClimateControlAC}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.ClimateControlAC)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Ac Vent</InputLabel>
            <Select
              name="AcVent"
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
            <img
              src={uploadedImages.AcVent}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.AcVent)}
            />
          )}
        </Grid>

      </Grid>

      {/* Modal for displaying clicked image */}
      <Modal
        open={openModal}
        onClose={closeModal}
        className={classes.modal}
      >
        <div className={classes.paper}>
          {selectedImage && (
            <div>
              <img src={selectedImage} alt="Selected" className={classes.image} />
              <Button onClick={closeModal} variant="contained" color="secondary" style={{ marginTop: '10px' }}>
                Close
              </Button>
            </div>
          )}
        </div>
      </Modal>

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
