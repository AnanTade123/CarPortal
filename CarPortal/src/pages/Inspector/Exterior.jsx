/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import WindshieldAndLights from './ExteriorsComponent/WindshieldAndLights';
import Tyre from './ExteriorsComponent/Tyre';
import OtherComponent from './ExteriorsComponent/OtherComponent';
import React, { useState } from 'react';
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

const Exterior = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    BonnetHood: [],
    RightDoorFront: [],
    LeftDoorFront: [],
    RightFender: [],
    LeftQuarterPanel: [],
    RightQuarterPanel: [],
    Roof: [],
    DickyDoor: [],
    LeftDoorRear: [],
    RightDoorRear: [],
    LHSFrontTyre: [],
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

  const [uploadedImages, setUploadedImages] = useState({
    BonnetHood: null,
    RightDoorFront: null,
    LeftDoorFront: null,
    RightFender: null,
    LeftQuarterPanel: null,
    RightQuarterPanel: null,
    Roof: null,
    DickyDoor: null,
    LeftDoorRear: null,
    RightDoorRear: null,
    LHSFrontTyre: null,
    RHSFrontTyre: null,
    LHSRearTyre: null,
    RHSRearTyre: null,
    SpareTyre: null,
    Windshield: null,
    Light: null,
    FrontBumper: null,
    RearBumper: null,
    LHSHeadlight: null,
    RHSHeadlight: null,
    LHSTaillight: null,
    RHSTaillight: null,
    HeadLightSupport: null,
    RadiatorSupport: null,
    AlloyWheel: null,
  });

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event, fieldName) => {
    const file = event.target.files[0];
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
        Exterior Panel
      </Typography>
      <Grid container spacing={3}>
        {/* Bonnet Hood */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Bonnet Hood</InputLabel>
            <Select
              name="BonnetHood"
              value={formData.BonnetHood}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-BonnetHood"
              type="file"
              onChange={(event) => handleFileChange(event, 'BonnetHood')}
            />
            <label
              htmlFor="upload-BonnetHood"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.BonnetHood && (
            <img
              src={uploadedImages.BonnetHood}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.BonnetHood)}
            />
          )}
        </Grid>

        {/* Right Door Front */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Right Door Front</InputLabel>
            <Select
              name="RightDoorFront"
              value={formData.RightDoorFront}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-RightDoorFront"
              type="file"
              onChange={(event) => handleFileChange(event, 'RightDoorFront')}
            />
            <label
              htmlFor="upload-RightDoorFront"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RightDoorFront && (
            <img
              src={uploadedImages.RightDoorFront}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() =>
                handleImageClick(uploadedImages.RightDoorFront)
              }
            />
          )}
        </Grid>

        {/* Left Door Front */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Left Door Front</InputLabel>
            <Select
              name="LeftDoorFront"
              value={formData.LeftDoorFront}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-LeftDoorFront"
              type="file"
              onChange={(event) => handleFileChange(event, 'LeftDoorFront')}
            />
            <label
              htmlFor="upload-LeftDoorFront"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LeftDoorFront && (
            <img
              src={uploadedImages.LeftDoorFront}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() =>
                handleImageClick(uploadedImages.LeftDoorFront)
              }
            />
          )}
        </Grid>

        {/* Right Fender */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Right Fender</InputLabel>
            <Select
              name="RightFender"
              value={formData.RightFender}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-RightFender"
              type="file"
              onChange={(event) => handleFileChange(event, 'RightFender')}
            />
            <label
              htmlFor="upload-RightFender"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RightFender && (
            <img
              src={uploadedImages.RightFender}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() =>
                handleImageClick(uploadedImages.RightFender)
              }
            />
          )}
        </Grid>

        {/* Left Quarter Panel */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Left Quarter Panel</InputLabel>
            <Select
              name="LeftQuarterPanel"
              value={formData.LeftQuarterPanel}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-LeftQuarterPanel"
              type="file"
              onChange={(event) =>
                handleFileChange(event, 'LeftQuarterPanel')
              }
            />
            <label
              htmlFor="upload-LeftQuarterPanel"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LeftQuarterPanel && (
            <img
              src={uploadedImages.LeftQuarterPanel}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() =>
                handleImageClick(uploadedImages.LeftQuarterPanel)
              }
            />
          )}
        </Grid>

        {/* Right Quarter Panel */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Right Quarter Panel</InputLabel>
            <Select
              name="RightQuarterPanel"
              value={formData.RightQuarterPanel}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-RightQuarterPanel"
              type="file"
              onChange={(event) =>
                handleFileChange(event, 'RightQuarterPanel')
              }
            />
            <label
              htmlFor="upload-RightQuarterPanel"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RightQuarterPanel && (
            <img
              src={uploadedImages.RightQuarterPanel}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() =>
                handleImageClick(uploadedImages.RightQuarterPanel)
              }
            />
          )}
        </Grid>

        {/* Roof */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Roof</InputLabel>
            <Select
              name="Roof"
              value={formData.Roof}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Roof"
              type="file"
              onChange={(event) => handleFileChange(event, 'Roof')}
            />
            <label
              htmlFor="upload-Roof"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Roof && (
            <img
              src={uploadedImages.Roof}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.Roof)}
            />
          )}
        </Grid>

        {/* Dicky Door */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Dicky Door</InputLabel>
            <Select
              name="DickyDoor"
              value={formData.DickyDoor}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-DickyDoor"
              type="file"
              onChange={(event) => handleFileChange(event, 'DickyDoor')}
            />
            <label
              htmlFor="upload-DickyDoor"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.DickyDoor && (
            <img
              src={uploadedImages.DickyDoor}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.DickyDoor)}
            />
          )}
        </Grid>

        {/* Left Door Rear */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Left Door Rear</InputLabel>
            <Select
              name="LeftDoorRear"
              value={formData.LeftDoorRear}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-LeftDoorRear"
              type="file"
              onChange={(event) => handleFileChange(event, 'LeftDoorRear')}
            />
            <label
              htmlFor="upload-LeftDoorRear"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LeftDoorRear && (
            <img
              src={uploadedImages.LeftDoorRear}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.LeftDoorRear)}
            />
          )}
        </Grid>

        {/* Right Door Rear */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Right Door Rear</InputLabel>
            <Select
              name="RightDoorRear"
              value={formData.RightDoorRear}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-RightDoorRear"
              type="file"
              onChange={(event) =>
                handleFileChange(event, 'RightDoorRear')
              }
            />
            <label
              htmlFor="upload-RightDoorRear"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RightDoorRear && (
            <img
              src={uploadedImages.RightDoorRear}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() =>
                handleImageClick(uploadedImages.RightDoorRear)
              }
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
              <img
                src={selectedImage}
                alt="Selected"
                className={classes.image}
              />
              <Button
                onClick={closeModal}
                variant="contained"
                color="secondary"
                style={{ marginTop: '10px' }}
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </Modal>

      
      <WindshieldAndLights formData={formData} setFormData={setFormData}/>
<Tyre formData={formData} setFormData={setFormData}/>
<OtherComponent formData={formData} setFormData={setFormData} />


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

export default Exterior;




      



   


      
  
 