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

const Interior = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    LeatherSeat: [],
    Odometer: [],
    Dashboard: [],
    CabinFloor: [],
  });

  const [uploadedImages, setUploadedImages] = useState({
    LeatherSeat: null,
    Odometer: null,
    Dashboard: null,
    CabinFloor: null,
  });

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

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
        Interior
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Leather Seat</InputLabel>
            <Select
              name="LeatherSeat"
             
              value={formData.LeatherSeat}
              onChange={handleChange}
            >
              <MenuItem value="Torn">Torn</MenuItem>
              <MenuItem value="Worn Out">Worn Out</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-LeatherSeat"
              type="file"
              onChange={(event) => handleFileChange(event, 'LeatherSeat')}
            />
            <label htmlFor="upload-LeatherSeat" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LeatherSeat && (
            <img
              src={uploadedImages.LeatherSeat}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.LeatherSeat)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Odometer</InputLabel>
            <Select
              name="Odometer"
           
              value={formData.Odometer}
              onChange={handleChange}
            >
              <MenuItem value="Tempered">Tempered</MenuItem>
              <MenuItem value="Not Tempered">Not Tempered</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Odometer"
              type="file"
              onChange={(event) => handleFileChange(event, 'Odometer')}
            />
            <label htmlFor="upload-Odometer" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Odometer && (
            <img
              src={uploadedImages.Odometer}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Odometer)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Cabin Floor</InputLabel>
            <Select
              name="CabinFloor"
       
              value={formData.CabinFloor}
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
              id="upload-CabinFloor"
              type="file"
              onChange={(event) => handleFileChange(event, 'CabinFloor')}
            />
            <label htmlFor="upload-CabinFloor" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.CabinFloor && (
            <img
              src={uploadedImages.CabinFloor}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.CabinFloor)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Dashboard</InputLabel>
            <Select
              name="Dashboard"
              
              value={formData.Dashboard}
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
              id="upload-Dashboard"
              type="file"
              onChange={(event) => handleFileChange(event, 'Dashboard')}
            />
            <label htmlFor="upload-Dashboard" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Dashboard && (
            <img
              src={uploadedImages.Dashboard}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Dashboard)}
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

export default Interior;
