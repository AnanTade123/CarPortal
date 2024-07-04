import  { useEffect, useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel, Grid, Typography, Button, Modal, makeStyles } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useParams } from 'react-router-dom';
import { useInspectionReportMutation } from '../../services/inspectorapi';

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
  fixedImage: {
    width: '500px',
    height: '500px',
    objectFit: 'contain',
  }
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
    LeatherSeats: null,
    Odometers: null,
    Dashboards: null,
    CabinFloors: null,
  });

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [inspectionReport] = useInspectionReportMutation();
  const {id} = useParams()
  console.log(id)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

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
    if (!file) return;
    const formDataToSend = new FormData();
    formDataToSend.append('image', file);

    console.log(formDataToSend)
    // Update formData state with file details
    setFormData({ ...formData, [fieldName]: file });

    // Read the file and convert it to URL for preview
    const reader = new FileReader();
    reader.onload = async () => {
      const imageData = reader.result;
      setUploadedImages({ ...uploadedImages, [fieldName]: imageData });

      
      // Prepare the data to be sent to the backend
      const inspectionData = {
        documentType: "Inspection Report",
        beadingCarId: id,
        doc: "", 
        doctype: "Interior",
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
              id="upload-LeatherSeats"
              type="file"
              onChange={(event) => handleFileChange(event, 'LeatherSeats')}
            />
            <label htmlFor="upload-LeatherSeats" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LeatherSeats && (
            <img
              src={uploadedImages.LeatherSeats}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.LeatherSeats)}
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
              id="upload-Odometers"
              type="file"
              onChange={(event) => handleFileChange(event, 'Odometers')}
            />
            <label htmlFor="upload-Odometers" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Odometers && (
            <img
              src={uploadedImages.Odometers}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Odometers)}
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
              id="upload-CabinFloors"
              type="file"
              onChange={(event) => handleFileChange(event, 'CabinFloors')}
            />
            <label htmlFor="upload-CabinFloors" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.CabinFloors && (
            <img
              src={uploadedImages.CabinFloors}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.CabinFloors)}
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
              id="upload-Dashboards"
              type="file"
              onChange={(event) => handleFileChange(event, 'Dashboards')}
            />
            <label htmlFor="upload-Dashboards" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Dashboards && (
            <img
              src={uploadedImages.Dashboards}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Dashboards)}
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
              <img src={selectedImage} alt="Selected" className={classes.imfixedImageage} />
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

export default Interior;
