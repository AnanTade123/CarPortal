import  { useState } from 'react';
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

const Steering = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    Steering: [],
    Brake: [],
    Suspension: [],
  });

  const [uploadedImages, setUploadedImages] = useState({
    Steering: null,
    Brake: null,
    Suspension: null,
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
    <div>
      <div className='p-4'>
        <Typography variant="h4" className='text-black font-bold pb-5'>
          Steering
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Steering</InputLabel>
              <Select
                name="Steering"
                value={formData.Steering}
                onChange={handleChange}
              >
                <MenuItem value="Misfiring">Misfiring</MenuItem>
                <MenuItem value="Abnormal Noise">Abnormal Noise</MenuItem>
                <MenuItem value="Hard Noise"> Hard Noise</MenuItem>
              </Select>
            </FormControl>
            <div className="flex items-center mt-2">
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="upload-Steering"
                type="file"
                onChange={(event) => handleFileChange(event, 'Steering')}
              />
              <label htmlFor="upload-Steering" className="cursor-pointer flex items-center">
                <CloudUploadIcon />
                <span className="ml-2">Upload Image</span>
              </label>
            </div>
            {uploadedImages.Steering && (
              <img
                src={uploadedImages.Steering}
                alt="Uploaded"
                style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
                onClick={() => handleImageClick(uploadedImages.Steering)}
              />
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Brake</InputLabel>
              <Select
                name="Brake"
                value={formData.Brake}
                onChange={handleChange}
              >
                <MenuItem value="Loose">Noisy</MenuItem>
                <MenuItem value="Tight">Hard Noise</MenuItem>
              </Select>
            </FormControl>
            <div className="flex items-center mt-2">
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="upload-Brake"
                type="file"
                onChange={(event) => handleFileChange(event, 'Brake')}
              />
              <label htmlFor="upload-Brake" className="cursor-pointer flex items-center">
                <CloudUploadIcon />
                <span className="ml-2">Upload Image</span>
              </label>
            </div>
            {uploadedImages.Brake && (
              <img
                src={uploadedImages.Brake}
                alt="Uploaded"
                style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
                onClick={() => handleImageClick(uploadedImages.Brake)}
              />
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Suspension</InputLabel>
              <Select
                name="Suspension"
                value={formData.Suspension}
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
                id="upload-Suspension"
                type="file"
                onChange={(event) => handleFileChange(event, 'Suspension')}
              />
              <label htmlFor="upload-Suspension" className="cursor-pointer flex items-center">
                <CloudUploadIcon />
                <span className="ml-2">Upload Image</span>
              </label>
            </div>
            {uploadedImages.Suspension && (
              <img
                src={uploadedImages.Suspension}
                alt="Uploaded"
                style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
                onClick={() => handleImageClick(uploadedImages.Suspension)}
              />
            )}
          </Grid>

        </Grid>
      </div>

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

      <div className="flex justify-center items-center mt-12">
        <Button
          variant="contained"
          color="primary"
          className="rounded-lg bg-blue-500 text-white flex justify-center items-center"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Steering;
