import  { useState } from 'react';
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Grid,
  Typography,
  Button,
  Modal,
  makeStyles,
} from '@material-ui/core';
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

const Engine = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    Engine: null,
    EngineMounting: null,
    EngineSound: null,
    Exhaustsmoke: null,
    Gearbox: null,
    Engineoil: null,
    Battery: null,
    Coolant: null,
    Clutch: null,
  });

  const [uploadedImages, setUploadedImages] = useState({
    Engine: null,
    EngineMounting: null,
    EngineSound: null,
    Exhaustsmoke: null,
    Gearbox: null,
    Engineoil: null,
    Battery: null,
    Coolant: null,
    Clutch: null,
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
        Engine
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Engine</InputLabel>
            <Select
              name="Engine"
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
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Engine"
              type="file"
              onChange={(event) => handleFileChange(event, 'Engine')}
            />
            <label htmlFor="upload-Engine" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Engine && (
            <img
              src={uploadedImages.Engine}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Engine)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Engine Mounting</InputLabel>
            <Select
              name="EngineMounting"
              value={formData.EngineMounting}
              onChange={handleChange}
            >
              <MenuItem value="Loose">Loose</MenuItem>
              <MenuItem value="Tight">Tight</MenuItem>
              <MenuItem value="Excess Vibration">Excess Vibration</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-EngineMounting"
              type="file"
              onChange={(event) => handleFileChange(event, 'EngineMounting')}
            />
            <label htmlFor="upload-EngineMounting" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.EngineMounting && (
            <img
              src={uploadedImages.EngineMounting}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.EngineMounting)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Engine Sound</InputLabel>
            <Select
              name="EngineSound"
              value={formData.EngineSound}
              onChange={handleChange}
            >
              <MenuItem value="Minor sound">Minor sound</MenuItem>
              <MenuItem value="No engine sound">No engine sound</MenuItem>
              <MenuItem value="Critical sound">Critical sound</MenuItem>
              <MenuItem value="No Blow-by">No Blow-by</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-EngineSound"
              type="file"
              onChange={(event) => handleFileChange(event, 'EngineSound')}
            />
            <label htmlFor="upload-EngineSound" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.EngineSound && (
            <img
              src={uploadedImages.EngineSound}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.EngineSound)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Exhaust Smoke</InputLabel>
            <Select
              name="Exhaustsmoke"
              value={formData.Exhaustsmoke}
              onChange={handleChange}
            >
              <MenuItem value="Black">Black</MenuItem>
              <MenuItem value="Blue">Blue</MenuItem>
              <MenuItem value="Silencer assembly Damaged and Create Noise">Silencer assembly Damaged and Create Noise</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Exhaustsmoke"
              type="file"
              onChange={(event) => handleFileChange(event, 'Exhaustsmoke')}
            />
            <label htmlFor="upload-Exhaustsmoke" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Exhaustsmoke && (
            <img
              src={uploadedImages.Exhaustsmoke}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Exhaustsmoke)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Gearbox</InputLabel>
            <Select
              name="Gearbox"
              value={formData.Gearbox}
              onChange={handleChange}
            >
              <MenuItem value="Oil leakage">Oil leakage</MenuItem>
              <MenuItem value="Shifting-Hard">Shifting-Hard</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Gearbox"
              type="file"
              onChange={(event) => handleFileChange(event, 'Gearbox')}
            />
            <label htmlFor="upload-Gearbox" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Gearbox && (
            <img
              src={uploadedImages.Gearbox}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Gearbox)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Engine Oil</InputLabel>
            <Select
              name="Engineoil"
              value={formData.Engineoil}
              onChange={handleChange}
            >
              <MenuItem value="Low Level">Low Level</MenuItem>
              <MenuItem value="Leakage">Leakage</MenuItem>
              <MenuItem value="Deteriorated">Deteriorated</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Engineoil"
              type="file"
              onChange={(event) => handleFileChange(event, 'Engineoil')}
            />
            <label htmlFor="upload-Engineoil" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Engineoil && (
            <img
              src={uploadedImages.Engineoil}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Engineoil)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Battery</InputLabel>
            <Select
              name="Battery"
              value={formData.Battery}
              onChange={handleChange}
            >
              <MenuItem value="Battery Voltage 2.5 Volt">Battery Voltage 2.5 Volt</MenuItem>
              <MenuItem value="Electrical Fault - Start Motor">Electrical Fault - Start Motor</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Battery"
              type="file"
              onChange={(event) => handleFileChange(event, 'Battery')}
            />
            <label htmlFor="upload-Battery" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Battery && (
            <img
              src={uploadedImages.Battery}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Battery)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Coolant</InputLabel>
            <Select
              name="Coolant"
              value={formData.Coolant}
              onChange={handleChange}
            >
              <MenuItem value="Low Level">Low Level</MenuItem>
              <MenuItem value="Leakage">Leakage</MenuItem>
              <MenuItem value="Deteriorated">Deteriorated</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Coolant"
              type="file"
              onChange={(event) => handleFileChange(event, 'Coolant')}
            />
            <label htmlFor="upload-Coolant" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Coolant && (
            <img
              src={uploadedImages.Coolant}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Coolant)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Clutch</InputLabel>
            <Select
              name="Clutch"
              value={formData.Clutch}
              onChange={handleChange}
            >
              <MenuItem value="Slipping">Slipping</MenuItem>
              <MenuItem value="Hard">Hard</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Clutch"
              type="file"
              onChange={(event) => handleFileChange(event, 'Clutch')}
            />
            <label htmlFor="upload-Clutch" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Clutch && (
            <img
              src={uploadedImages.Clutch}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Clutch)}
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

export default Engine;
