import { useEffect, useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel, Grid, Typography, Button, Modal, makeStyles } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Ac from './Ac';
import Exterior from './Exterior';
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
    FourPowerWindowssa: null,
    AirBagFeaturessa: null,
    MusicSystemsa: null,
    Sunroofsa: null,
    ABSsa: null,
    InteriorParkingSensorsa: null,
    Electricalwiringsa: null,
  });

  // eslint-disable-next-line no-unused-vars
  const [currentStep, setCurrentStep] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

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
      setImages({ ...setImages, [fieldName]: imageData });

      
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
                      onChange={(event) => handleFileChange(event, key)}
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
            {/* <div className="flex justify-between mt-10 px-8">
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
            </div> */}
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
