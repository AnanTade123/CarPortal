/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';
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

const WindshieldAndLights = ({ formData, setFormData, handleFileChange,uploadedImages,data ,setUploadedImages}) => {
  const classes = useStyles();

console.log(data)

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Pre-fill form data and uploaded images based on API data
    data?.object.map((item) => {
      switch (item.subtype) {
        case "Windshield":
          setFormData((prev) => ({ ...prev, Windshield: item.comment }));
          setUploadedImages((prev) => ({ ...prev, Windshields: item.documentLink }));
          break;
        case "Light":
          setFormData((prev) => ({ ...prev, Light: item.comment }));
          setUploadedImages((prev) => ({ ...prev, Lights: item.documentLink }));
          break;
        case "FrontBumper":
          setFormData((prev) => ({ ...prev, FrontBumper: item.comment }));
          setUploadedImages((prev) => ({ ...prev, FrontBumpers: item.documentLink }));
          break;
        case "RearBumper":
          setFormData((prev) => ({ ...prev, RearBumper: item.comment }));
          setUploadedImages((prev) => ({ ...prev, RearBumpers: item.documentLink }));
          break;
        case "LHSHeadlight":
          setFormData((prev) => ({ ...prev, LHSHeadlight: item.comment }));
          setUploadedImages((prev) => ({ ...prev, LHSHeadlights: item.documentLink }));
          break;
        case "RHSHeadlight":
          setFormData((prev) => ({ ...prev, RHSHeadlight: item.comment }));
          setUploadedImages((prev) => ({ ...prev, RHSHeadlights: item.documentLink }));
          break;
        case "LHSTaillight":
          setFormData((prev) => ({ ...prev, LHSTaillight: item.comment }));
          setUploadedImages((prev) => ({ ...prev, LHSTaillights: item.documentLink }));
          break;
        case "RHSTaillight":
          setFormData((prev) => ({ ...prev, RHSTaillight: item.comment }));
          setUploadedImages((prev) => ({ ...prev, RHSTaillights: item.documentLink }));
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
              id="upload-Windshields"
              type="file"
              onChange={(event) => handleFileChange(event, 'Windshields')}
            />
            <label htmlFor="upload-Windshields" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Windshields && (
            <img
              src={uploadedImages.Windshields}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Windshields)}
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
              
              <MenuItem value="Scratched">Scratched</MenuItem>
            
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Lights"
              type="file"
              onChange={(event) => handleFileChange(event, 'Lights')}
            />
            <label htmlFor="upload-Lights" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Lights && (
            <img
              src={uploadedImages.Lights}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Lights)}
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
              id="upload-FrontBumpers"
              type="file"
              onChange={(event) => handleFileChange(event, 'FrontBumpers')}
            />
            <label htmlFor="upload-FrontBumpers" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.FrontBumpers && (
            <img
              src={uploadedImages.FrontBumpers}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.FrontBumpers)}
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
              id="upload-RearBumpers"
              type="file"
              onChange={(event) => handleFileChange(event, 'RearBumpers')}
            />
            <label htmlFor="upload-RearBumpers" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RearBumpers && (
            <img
              src={uploadedImages.RearBumpers}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.RearBumpers)}
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
              id="upload-LHSHeadlights"
              type="file"
              onChange={(event) => handleFileChange(event, 'LHSHeadlights')}
            />
            <label htmlFor="upload-LHSHeadlights" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LHSHeadlights && (
            <img
              src={uploadedImages.LHSHeadlights}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.LHSHeadlights)}
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
              id="upload-RHSHeadlights"
              type="file"
              onChange={(event) => handleFileChange(event, 'RHSHeadlights')}
            />
            <label htmlFor="upload-RHSHeadlights" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RHSHeadlights && (
            <img
              src={uploadedImages.RHSHeadlights}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.RHSHeadlights)}
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
              id="upload-LHSTaillights"
              type="file"
              onChange={(event) => handleFileChange(event, 'LHSTaillights')}
            />
            <label htmlFor="upload-LHSTaillights" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LHSTaillights && (
            <img
              src={uploadedImages.LHSTaillights}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.LHSTaillights)}
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
              id="upload-RHSTaillights"
              type="file"
              onChange={(event) => handleFileChange(event, 'RHSTaillights')}
            />
            <label htmlFor="upload-RHSTaillights" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RHSTaillights && (
            <img
              src={uploadedImages.RHSTaillights}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.RHSTaillights)}
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
