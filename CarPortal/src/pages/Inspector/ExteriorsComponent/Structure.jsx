/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// #Cowl Top :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,faded
// # Boot Floor :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,faded
// # Right Apron LEG :- status/options - Repainted, Dented, Scratched, Rusted, Repaired,
// Damaged,faded
// # Left Apron LEG :- status/options - Repainted, Dented, Scratched, Rusted, Repaired,
// Damaged,faded
// #Left Apron :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,faded
// #Right Apron :- status/options - Repainted, Dented, Scratched, Rusted, Repaired, Damaged,faded
// #Left Pillar :- status/options - Repainted, Dented, Scratched, Rusted, Repaired,
// Damaged,faded
// #Right Pillar :- status/options - Repainted, Dented, Scratched, Rusted, Repaired,
// Damaged,faded

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

const Structure = ({formData, setFormData,handleFileChange,uploadedImages }) => {
  const classes = useStyles();


  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


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
        Structure
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>CowlTop</InputLabel>
            <Select
              name="CowlTop"
              value={formData.CowlTop}
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
              id="upload-CowlTop"
              type="file"
              onChange={(event) => handleFileChange(event, 'CowlTop')}
            />
            <label
              htmlFor="upload-CowlTop"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.CowlTop && (
            <img
              src={uploadedImages.CowlTop}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.CowlTop)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Boot Floor</InputLabel>
            <Select
              name="BootFloor"
              value={formData.BootFloor}
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
              id="upload-BootFloor"
              type="file"
              onChange={(event) => handleFileChange(event, 'BootFloor')}
            />
            <label
              htmlFor="upload-BootFloor"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.BootFloor && (
            <img
              src={uploadedImages.BootFloor}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.BootFloor)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Right Apron LEG</InputLabel>
            <Select
              name="RightApronLEG"
              value={formData.RightApronLEG}
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
              id="upload-RightApronLEG"
              type="file"
              onChange={(event) => handleFileChange(event, 'RightApronLEG')}
            />
            <label
              htmlFor="upload-RightApronLEG"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RightApronLEG && (
            <img
              src={uploadedImages.RightApronLEG}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.RightApronLEG)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Left Apron LEG</InputLabel>
            <Select
              name="LeftApronLEG"
              value={formData.LeftApronLEG}
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
              id="upload-LeftApronLEG"
              type="file"
              onChange={(event) => handleFileChange(event, 'LeftApronLEG')}
            />
            <label
              htmlFor="upload-LeftApronLEG"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LeftApronLEG && (
            <img
              src={uploadedImages.LeftApronLEG}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.LeftApronLEG)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Right Apron</InputLabel>
            <Select
              name="RightApron"
              value={formData.RightApron}
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
              id="upload-RightApron"
              type="file"
              onChange={(event) => handleFileChange(event, 'RightApron')}
            />
            <label
              htmlFor="upload-RightApron"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RightApron && (
            <img
              src={uploadedImages.RightApron}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.RightApron)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Left Apron</InputLabel>
            <Select
              name="LeftApron"
              value={formData.LeftApron}
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
              id="upload-LeftApron"
              type="file"
              onChange={(event) => handleFileChange(event, 'LeftApron')}
            />
            <label
              htmlFor="upload-LeftApron"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LeftApron && (
            <img
              src={uploadedImages.LeftApron}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.LeftApron)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Left Pillar</InputLabel>
            <Select
              name="LeftPillar"
              value={formData.LeftPillar}
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
              id="upload-LeftPillar"
              type="file"
              onChange={(event) => handleFileChange(event, 'LeftPillar')}
            />
            <label
              htmlFor="upload-LeftPillar"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LeftPillar && (
            <img
              src={uploadedImages.LeftPillar}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.LeftPillar)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Right Pillar</InputLabel>
            <Select
              name="RightPillar"
              value={formData.RightPillar}
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
              id="upload-RightPillar"
              type="file"
              onChange={(event) => handleFileChange(event, 'RightPillar')}
            />
            <label
              htmlFor="upload-RightPillar"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RightPillar && (
            <img
              src={uploadedImages.RightPillar}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.RightPillar)}
            />
          )}
        </Grid>
      </Grid>

      <Modal
        open={openModal}
        onClose={closeModal}
        className={classes.modal}
      >
        <div className={classes.paper}>
          {selectedImage && (
            <img src={selectedImage} alt="Preview" className={classes.image} />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Structure;
