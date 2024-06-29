import { useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel, Grid, Typography, Button, Modal, makeStyles } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Ac from './Ac';
import Exterior from './Exterior';

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

const Electrical = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    FourPowerWindows: [],
    AirBagFeatures: [],
    MusicSystem: [],
    Sunroof: [],
    ABS: [],
    InteriorParkingSensor: [],
    Electricalwiring: [],
  });

  const [images, setImages] = useState({
    FourPowerWindows: null,
    AirBagFeatures: null,
    MusicSystem: null,
    Sunroof: null,
    ABS: null,
    InteriorParkingSensor: null,
    Electricalwiring: null,
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (event, fieldName) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImages({ ...images, [fieldName]: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className='p-4'>
            <Typography variant="h4" className='text-black font-bold pb-5'>
              Electricals
            </Typography>
            <Grid container spacing={3}>
              {Object.keys(formData).map((key) => (
                <Grid item xs={12} sm={6} key={key}>
                  <FormControl fullWidth>
                    <InputLabel>{key}</InputLabel>
                    <Select
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                    >
                      <MenuItem value="Not Working">Not Working</MenuItem>
                      <MenuItem value="NA">NA</MenuItem>
                      <MenuItem value="damage">Damage</MenuItem>
                    </Select>
                  </FormControl>
                  <div className="flex items-center mt-2">
                    <input
                      accept="image/*"
                      style={{ display: 'none' }}
                      id={`upload-${key}`}
                      type="file"
                      onChange={(event) => handleImageUpload(event, key)}
                    />
                    <label htmlFor={`upload-${key}`} className="cursor-pointer flex items-center">
                      <CloudUploadIcon />
                      <span className="ml-2">Upload Image</span>
                    </label>
                  </div>
                  {images[key] && (
                    <img
                      src={images[key]}
                      alt={`${key} uploaded`}
                      style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
                      onClick={() => handleImageClick(images[key])}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
            <div className="flex justify-between mt-10 px-8">
              <Button
                variant="contained"
                color="primary"
                onClick={() => setCurrentStep((prevStep) => Math.max(prevStep - 1, 0))}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        );
      case 1:
        return <Ac />;
      case 2:
        return <Exterior />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderStep()}

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
    </>
  );
};

export default Electrical;
