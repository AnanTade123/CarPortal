/* eslint-disable react/prop-types */
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

const OtherComponent = ({  formData, setFormData,handleFileChange,uploadedImages }) => {
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
      <Typography variant="h4" className='text-black font-bold pb-5 pt-16 '>
        Other Components
      </Typography>
      <Grid container spacing={3}>
        {/* Head Light Support */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Head Light Support</InputLabel>
            <Select
              name="HeadLightSupport"
              value={formData.HeadLightSupport}
              onChange={handleChange}
              color="Green"
              
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-HeadLightSupport"
              type="file"
              onChange={(event) => handleFileChange(event, 'HeadLightSupport')}
            />
            <label htmlFor="upload-HeadLightSupport" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.HeadLightSupport && (
            <img
              src={uploadedImages.HeadLightSupport}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.HeadLightSupport)}
            />
          )}
        </Grid>

        {/* Radiator Support */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Radiator Support</InputLabel>
            <Select
              name="RadiatorSupport"
              value={formData.RadiatorSupport}
              onChange={handleChange}
              color="Green"
              
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-RadiatorSupport"
              type="file"
              onChange={(event) => handleFileChange(event, 'RadiatorSupport')}
            />
            <label htmlFor="upload-RadiatorSupport" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RadiatorSupport && (
            <img
              src={uploadedImages.RadiatorSupport}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.RadiatorSupport)}
            />
          )}
        </Grid>

        {/* Alloy Wheel */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Alloy Wheel</InputLabel>
            <Select
              name="AlloyWheel"
              value={formData.AlloyWheel}
              onChange={handleChange}

            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-AlloyWheel"
              type="file"
              onChange={(event) => handleFileChange(event, 'AlloyWheel')}
            />
            <label htmlFor="upload-AlloyWheel" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.AlloyWheel && (
            <img
              src={uploadedImages.AlloyWheel}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.AlloyWheel)}
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

      
      
    </div>
  );
};

export default OtherComponent;
