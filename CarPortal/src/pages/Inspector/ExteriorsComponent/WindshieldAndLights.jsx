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

const WindshieldAndLights = ({ formData, setFormData,handleFileChange,uploadedImages }) => {
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
      <Typography variant="h4" className='text-black font-bold pb-5 pt-15 '>
        Windshield And Lights
      </Typography>
      <Grid container spacing={3}>
        {/* Windshield */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Windshield</InputLabel>
            <Select
              name="Windshield"
              value={formData.Windshield}
              onChange={handleChange}
              color="Green"
            
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Windshield"
              type="file"
              onChange={(event) => handleFileChange(event, 'Windshield')}
            />
            <label htmlFor="upload-Windshield" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Windshield && (
            <img
              src={uploadedImages.Windshield}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Windshield)}
            />
          )}
        </Grid>

        {/* Light */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Light</InputLabel>
            <Select
              name="Light"
              value={formData.Light}
              onChange={handleChange}
              color="Green"
              
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Light"
              type="file"
              onChange={(event) => handleFileChange(event, 'Light')}
            />
            <label htmlFor="upload-Light" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Light && (
            <img
              src={uploadedImages.Light}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Light)}
            />
          )}
        </Grid>

        {/* Front Bumper */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Front Bumper</InputLabel>
            <Select
              name="FrontBumper"
              value={formData.FrontBumper}
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
              id="upload-FrontBumper"
              type="file"
              onChange={(event) => handleFileChange(event, 'FrontBumper')}
            />
            <label htmlFor="upload-FrontBumper" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.FrontBumper && (
            <img
              src={uploadedImages.FrontBumper}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.FrontBumper)}
            />
          )}
        </Grid>

        {/* Rear Bumper */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Rear Bumper</InputLabel>
            <Select
              name="RearBumper"
              value={formData.RearBumper}
              onChange={handleChange}
            
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-RearBumper"
              type="file"
              onChange={(event) => handleFileChange(event, 'RearBumper')}
            />
            <label htmlFor="upload-RearBumper" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RearBumper && (
            <img
              src={uploadedImages.RearBumper}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.RearBumper)}
            />
          )}
        </Grid>

        {/* LHS Headlight */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>LHS Headlight</InputLabel>
            <Select
              name="LHSHeadlight"
              value={formData.LHSHeadlight}
              onChange={handleChange}
              
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-LHSHeadlight"
              type="file"
              onChange={(event) => handleFileChange(event, 'LHSHeadlight')}
            />
            <label htmlFor="upload-LHSHeadlight" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LHSHeadlight && (
            <img
              src={uploadedImages.LHSHeadlight}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.LHSHeadlight)}
            />
          )}
        </Grid>

        {/* RHS Headlight */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>RHS Headlight</InputLabel>
            <Select
              name="RHSHeadlight"
              value={formData.RHSHeadlight}
              onChange={handleChange}
             
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-RHSHeadlight"
              type="file"
              onChange={(event) => handleFileChange(event, 'RHSHeadlight')}
            />
            <label htmlFor="upload-RHSHeadlight" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RHSHeadlight && (
            <img
              src={uploadedImages.RHSHeadlight}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.RHSHeadlight)}
            />
          )}
        </Grid>

        {/* LHS Taillight */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>LHS Taillight</InputLabel>
            <Select
              name="LHSTaillight"
              value={formData.LHSTaillight}
              onChange={handleChange}
          
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-LHSTaillight"
              type="file"
              onChange={(event) => handleFileChange(event, 'LHSTaillight')}
            />
            <label htmlFor="upload-LHSTaillight" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LHSTaillight && (
            <img
              src={uploadedImages.LHSTaillight}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.LHSTaillight)}
            />
          )}
        </Grid>

        {/* RHS Taillight */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>RHS Taillight</InputLabel>
            <Select
              name="RHSTaillight"
              value={formData.RHSTaillight}
              onChange={handleChange}
              
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-RHSTaillight"
              type="file"
              onChange={(event) => handleFileChange(event, 'RHSTaillight')}
            />
            <label htmlFor="upload-RHSTaillight" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RHSTaillight && (
            <img
              src={uploadedImages.RHSTaillight}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.RHSTaillight)}
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

export default WindshieldAndLights;
