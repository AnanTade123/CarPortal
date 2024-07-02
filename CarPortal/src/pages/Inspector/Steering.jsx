import  { useEffect, useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel, Grid, Typography, Button, Modal, makeStyles } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useInspectionReportMutation } from '../../services/inspectorapi';
import { useParams } from 'react-router-dom';

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
    Steering: '',
    Brake: '',
    Suspension: '',
  });

  const [uploadedImages, setUploadedImages] = useState({
    Steerings: null,
    Brakes: null,
    Suspensions: null,
  });

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const {id} = useParams()
  console.log(id)

 const [inspectionReport] = useInspectionReportMutation();
  const [lables , setLables] = useState("");
  const [selectfiled , setSelectfiled] = useState("")
  useEffect(() => {
    Object.keys(formData).forEach(key => {
      if (formData[key].length > 0) {
        console.log(key);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setLables(key)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setSelectfiled(formData[key])
        
      }
    });
  }, [formData]);
  console.log(selectfiled)
  console.log(lables)

  const handleFileChange = async (event, fieldName) => {
    const file = event.target.files[0];
<<<<<<< HEAD
    if (!file) return;
    const formDataToSend = new FormData();
    formDataToSend.append('image', file);

    console.log(formDataToSend)
    // Update formData state with file details
    setFormData({ ...formData, [fieldName]: file });
=======
    console.log('Selected file:', file);
>>>>>>> 35864e4b914f6082f89bc4e35c9d9b528c1454cb

    // Read the file and convert it to URL for preview
    const reader = new FileReader();
    reader.onload = async () => {
      const imageData = reader.result;
      setUploadedImages({ ...uploadedImages, [fieldName]: imageData });

      
      // Prepare the data to be sent to the backend
      const inspectionData = {
        documentType: "Inspection Report",
        bidCarId: id,
        doc: "", 
        doctype: "",
        subtype: lables,
        comment: selectfiled,
      };
      try {
      
        const res = await inspectionReport({inspectionData,formDataToSend});
        console.log(res);

       alert("Data Uploded")
        
      } catch (error) {
        console.error('Error uploading the file:', error);
        alert("Data not Uploded")
      }
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
                id="upload-Steerings"
                type="file"
                onChange={(event) => handleFileChange(event, 'Steerings')}
              />
              <label htmlFor="upload-Steerings" className="cursor-pointer flex items-center">
                <CloudUploadIcon />
                <span className="ml-2">Upload Image</span>
              </label>
            </div>
            {uploadedImages.Steerings && (
              <img
                src={uploadedImages.Steerings}
                alt="Uploaded"
                style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
                onClick={() => handleImageClick(uploadedImages.Steerings)}
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
                <MenuItem value="Noisy">Noisy</MenuItem>
                <MenuItem value="Hard Noise">Hard Noise</MenuItem>
              </Select>
            </FormControl>
            <div className="flex items-center mt-2">
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="upload-Brakes"
                type="file"
                onChange={(event) => handleFileChange(event, 'Brakes')}
              />
              <label htmlFor="upload-Brakes" className="cursor-pointer flex items-center">
                <CloudUploadIcon />
                <span className="ml-2">Upload Image</span>
              </label>
            </div>
            {uploadedImages.Brakes && (
              <img
                src={uploadedImages.Brakes}
                alt="Uploaded"
                style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
                onClick={() => handleImageClick(uploadedImages.Brakes)}
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
                <MenuItem value="Abnormal Noise">Abnormal Noise</MenuItem>
                <MenuItem value="Weak">Weak</MenuItem>
              </Select>
            </FormControl>
            <div className="flex items-center mt-2">
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="upload-Suspensions"
                type="file"
                onChange={(event) => handleFileChange(event, 'Suspensions')}
              />
              <label htmlFor="upload-Suspensions" className="cursor-pointer flex items-center">
                <CloudUploadIcon />
                <span className="ml-2">Upload Image</span>
              </label>
            </div>
            {uploadedImages.Suspensions && (
              <img
                src={uploadedImages.Suspensions}
                alt="Uploaded"
                style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
                onClick={() => handleImageClick(uploadedImages.Suspensions)}
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

      {/* <div className="flex justify-between mt-10 px-8">
        <Button variant="contained" color="primary">
          Previous
        </Button>
        <Button variant="contained" color="primary">
          Next
        </Button>
      </div> */}
    </div>
  );
};

export default Steering;
