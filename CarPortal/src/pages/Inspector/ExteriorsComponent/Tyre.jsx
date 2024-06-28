/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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

const Tyre = ({ formData, setFormData }) => {
  const classes = useStyles();

  const [uploadedImages, setUploadedImages] = useState({
    LHSFrontTyre: null,
    RHSFrontTyre: null,
    LHSRearTyre: null,
    RHSRearTyre: null,
    SpareTyre: null,
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
      <Typography variant="h4" className='text-black font-bold pb-5 pt-16'>
        Tyres
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>LHS Front Tyre</InputLabel>
            <Select
              name="LHSFrontTyre"
              value={formData.LHSFrontTyre}
              onChange={handleChange}
            >
              <MenuItem value="ok-69-85%">Ok 69-85%</MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-LHSFrontTyre"
              type="file"
              onChange={(event) => handleFileChange(event, 'LHSFrontTyre')}
            />
            <label
              htmlFor="upload-LHSFrontTyre"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LHSFrontTyre && (
            <img
              src={uploadedImages.LHSFrontTyre}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.LHSFrontTyre)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>RHS Front Tyre</InputLabel>
            <Select
              name="RHSFrontTyre"
              value={formData.RHSFrontTyre}
              onChange={handleChange}
            >
              <MenuItem value="ok-69-85%">Ok 69-85%</MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-RHSFrontTyre"
              type="file"
              onChange={(event) => handleFileChange(event, 'RHSFrontTyre')}
            />
            <label
              htmlFor="upload-RHSFrontTyre"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RHSFrontTyre && (
            <img
              src={uploadedImages.RHSFrontTyre}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.RHSFrontTyre)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>LHS Rear Tyre</InputLabel>
            <Select
              name="LHSRearTyre"
              value={formData.LHSRearTyre}
              onChange={handleChange}
            >
              <MenuItem value="ok-69-85%">Ok 69-85%</MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-LHSRearTyre"
              type="file"
              onChange={(event) => handleFileChange(event, 'LHSRearTyre')}
            />
            <label
              htmlFor="upload-LHSRearTyre"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LHSRearTyre && (
            <img
              src={uploadedImages.LHSRearTyre}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.LHSRearTyre)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>RHS Rear Tyre</InputLabel>
            <Select
              name="RHSRearTyre"
              value={formData.RHSRearTyre}
              onChange={handleChange}
            >
              <MenuItem value="ok-69-85%">Ok 69-85%</MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-RHSRearTyre"
              type="file"
              onChange={(event) => handleFileChange(event, 'RHSRearTyre')}
            />
            <label
              htmlFor="upload-RHSRearTyre"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RHSRearTyre && (
            <img
              src={uploadedImages.RHSRearTyre}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.RHSRearTyre)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Spare Tyre</InputLabel>
            <Select
              name="SpareTyre"
              value={formData.SpareTyre}
              onChange={handleChange}
            >
              <MenuItem value="ok-69-85%">Ok 69-85%</MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-SpareTyre"
              type="file"
              onChange={(event) => handleFileChange(event, 'SpareTyre')}
            />
            <label
              htmlFor="upload-SpareTyre"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.SpareTyre && (
            <img
              src={uploadedImages.SpareTyre}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.SpareTyre)}
            />
          )}
        </Grid>
      </Grid>

      {/* Modal for displaying clicked image */}
      <Modal open={openModal} onClose={closeModal} className={classes.modal}>
        <div className={classes.paper}>
          {selectedImage && (
            <div>
              <img src={selectedImage} alt="Selected" className={classes.image} />
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

      
    </div>
  );
};

export default Tyre;
