/* eslint-disable react-hooks/exhaustive-deps */
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

import React, { useEffect, useState } from 'react';
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
    maxWidth: '500px',
    maxHeight: '500px',
    objectFit: 'contain',
  },
}));

const Structure = ({formData, setFormData,handleFileChange,uploadedImages,data,setUploadedImages }) => {
  const classes = useStyles();


  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Pre-fill form data and uploaded images based on API data
    data?.object.map((item) => {
      switch (item.subtype) {
        case "CowlTop":
          setFormData((prev) => ({ ...prev, CowlTop: item.comment }));
          setUploadedImages((prev) => ({ ...prev, CowlTops: item.documentLink }));
          break;
        case "BootFloor":
          setFormData((prev) => ({ ...prev, BootFloor: item.comment }));
          setUploadedImages((prev) => ({ ...prev, BootFloors: item.documentLink }));
          break;
        case "RightApronLEG":
          setFormData((prev) => ({ ...prev, RightApronLEG: item.comment }));
          setUploadedImages((prev) => ({ ...prev, RightApronLEGs: item.documentLink }));
          break;
        case "LeftApronLEG":
          setFormData((prev) => ({ ...prev, LeftApronLEG: item.comment }));
          setUploadedImages((prev) => ({ ...prev, LeftApronLEGs: item.documentLink }));
          break;
        case "RightApron":
          setFormData((prev) => ({ ...prev, RightApron: item.comment }));
          setUploadedImages((prev) => ({ ...prev, RightAprons: item.documentLink }));
          break;
        case "LeftApron":
          setFormData((prev) => ({ ...prev, LeftApron: item.comment }));
          setUploadedImages((prev) => ({ ...prev, LeftAprons: item.documentLink }));
          break;
        case "LeftPillar":
          setFormData((prev) => ({ ...prev, LeftPillar: item.comment }));
          setUploadedImages((prev) => ({ ...prev, LeftPillars: item.documentLink }));
          break;
        case "RightPillar":
          setFormData((prev) => ({ ...prev, RightPillar: item.comment }));
          setUploadedImages((prev) => ({ ...prev, RightPillars: item.documentLink }));
          break;
        default:
          break;
      }
    });
  }, [data]);
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
              id="upload-CowlTops"
              type="file"
              onChange={(event) => handleFileChange(event, 'CowlTops')}
            />
            <label
              htmlFor="upload-CowlTops"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.CowlTops && (
            <img
              src={uploadedImages.CowlTops}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.CowlTops)}
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
              id="upload-BootFloors"
              type="file"
              onChange={(event) => handleFileChange(event, 'BootFloors')}
            />
            <label
              htmlFor="upload-BootFloors"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.BootFloors && (
            <img
              src={uploadedImages.BootFloors}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.BootFloors)}
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
              id="upload-RightApronLEGs"
              type="file"
              onChange={(event) => handleFileChange(event, 'RightApronLEGs')}
            />
            <label
              htmlFor="upload-RightApronLEGs"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RightApronLEGs && (
            <img
              src={uploadedImages.RightApronLEGs}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.RightApronLEGs)}
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
              id="upload-LeftApronLEGs"
              type="file"
              onChange={(event) => handleFileChange(event, 'LeftApronLEGs')}
            />
            <label
              htmlFor="upload-LeftApronLEGs"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LeftApronLEGs && (
            <img
              src={uploadedImages.LeftApronLEGs}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.LeftApronLEGs)}
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
              id="upload-RightAprons"
              type="file"
              onChange={(event) => handleFileChange(event, 'RightAprons')}
            />
            <label
              htmlFor="upload-RightAprons"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RightAprons && (
            <img
              src={uploadedImages.RightAprons}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.RightAprons)}
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
              id="upload-LeftAprons"
              type="file"
              onChange={(event) => handleFileChange(event, 'LeftAprons')}
            />
            <label
              htmlFor="upload-LeftAprons"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LeftAprons && (
            <img
              src={uploadedImages.LeftAprons}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.LeftAprons)}
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
              id="upload-LeftPillars"
              type="file"
              onChange={(event) => handleFileChange(event, 'LeftPillars')}
            />
            <label
              htmlFor="upload-LeftPillars"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LeftPillars && (
            <img
              src={uploadedImages.LeftPillars}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.LeftPillars)}
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
              id="upload-RightPillars"
              type="file"
              onChange={(event) => handleFileChange(event, 'RightPillars')}
            />
            <label
              htmlFor="upload-RightPillars"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RightPillars && (
            <img
              src={uploadedImages.RightPillars}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.RightPillars)}
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
