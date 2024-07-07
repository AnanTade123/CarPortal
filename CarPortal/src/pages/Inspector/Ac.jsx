/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel, Grid, Typography, Button, Modal, makeStyles } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useGetInspectionReportQuery, useInspectionReportMutation } from '../../services/inspectorapi';
import { useParams } from 'react-router-dom';
import Cookies from "js-cookie";
import { jwtDecode } from 'jwt-decode';
import UploadImage4 from '../../ui/UploadImageComponents/UploadImage4';
import { useAddBiddingCarWithoutImageMutation } from "../../services/inspectorapi"

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

const Ac = () => {
  const classes = useStyles();
  const { beadingCarId } = useParams();
  console.log(beadingCarId);
  const { data } = useGetInspectionReportQuery({ beadingCarId, docType: "AC" });
  console.log(data);

  const [formData, setFormData] = useState({
    ACCooling: [],
    Heater: [],
    ClimateControlAC: [],
    AcVent: [],
  });

  const [uploadedImages, setUploadedImages] = useState({
    ACCoolings: null,
    Heaters: null,
    ClimateControlACs: null,
    AcVents: null,
  });

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [inspectionReport] = useInspectionReportMutation();
  const [addBiddingCarWithoutImage] = useAddBiddingCarWithoutImageMutation()
  const [captureModalOpen, setCaptureModalOpen] = useState(false);
  const [selectedLable ,setSelectedLable] = useState("");
  const [lables, setLables] = useState("");
  const [selectfiled, setSelectfiled] = useState("")
  console.log(selectfiled)
  console.log(lables)

  const token = Cookies.get("token");
  let jwtDecodes;
  if (token) {
    jwtDecodes = jwtDecode(token);
  }

  const userRole = token ? jwtDecodes?.authorities[0] : null;
console.log(userRole)

const handleFileChange = async (event, fieldName, imgPreview = "") => {
  console.log(imgPreview);
  let file;
  let imageData;
if (!event?.target) {
    console.log("name");
    file = event;
    imageData = file;
  } else {
    file = event.target.files[0];
  }

  if (!file) return;

  const formDataToSend = new FormData();
  formDataToSend.append('image', file);

  const reader = new FileReader();
  reader.onload = async () => {
    imageData = reader.result;
    console.log(imageData)
        setFormData({ ...formData, ["FourPowerWindowss"]: imageData });

    const inspectionData = {
      documentType: "Inspection Report",
      beadingCarId: beadingCarId,
      doc: "",
      doctype: "Electrical",
      subtype: lables,
      comment: selectfiled,
    };

    try {
      const res = await inspectionReport({ inspectionData, formDataToSend });
      console.log(res);
      alert("Data Uploaded");
    } catch (error) {
      console.error('Error uploading the file:', error);
      alert("Data not Uploaded");
    }
  };
  reader.readAsDataURL(file);
};

const handleSubmitWithoutImage = async () => {

  const formDataToSend1 = new FormData();
  formDataToSend1.append('beadingCarId', beadingCarId);
  formDataToSend1.append('doctype', "Steering");
  formDataToSend1.append('subtype', lables);
  formDataToSend1.append('comment', selectfiled);
  try {
    const res = await addBiddingCarWithoutImage({formDataToSend1});
    console.log(res);
    alert("Data Uploaded")
  } catch (error) {
    console.error('Error uploading the data:', error);
    alert("Data not Uploaded")
  }
};

const handleCaptureImage = (imageUrl) => {
  setSelectedImage(imageUrl);
  setCaptureModalOpen(false); // Close the camera modal after capturing the image
};

  useEffect(() => {
    // Pre-fill form data and uploaded images based on API data
    data?.object.map((item) => {
      switch (item.subtype) {
        case "ACCooling":
          setFormData((prev) => ({ ...prev, ACCooling: item.comment }));
          setUploadedImages((prev) => ({ ...prev, ACCoolings: item.documentLink }));
          break;
        case "Heater":
          setFormData((prev) => ({ ...prev, Heater: item.comment }));
          setUploadedImages((prev) => ({ ...prev, Heaters: item.documentLink }));
          break;
        case "ClimateControlAC":
          setFormData((prev) => ({ ...prev, ClimateControlAC: item.comment }));
          setUploadedImages((prev) => ({ ...prev, ClimateControlACs: item.documentLink }));
          break;
        case "AcVent":
          setFormData((prev) => ({ ...prev, AcVent: item.comment }));
          setUploadedImages((prev) => ({ ...prev, AcVents: item.documentLink }));
          break;
        default:
          break;
      }
    });
  }, [data]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (value.length > 0) {
      setLables(name);
      setSelectfiled(value);
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

  const handleCameraModal = (key) => {
    setCaptureModalOpen(true);
    setSelectedLable(key)
  }
  
  return (
    <div className='p-4'>
      <Typography variant="h4" className='text-black font-bold pb-5'>
        AC
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>AC Cooling</InputLabel>
            <Select
              name="ACCooling"
              value={formData.ACCooling}
              onChange={handleChange}
            >
              <MenuItem value="Misfiring">Ineffective</MenuItem>
              <MenuItem value="Long cranking due to weak Compression">Not Working</MenuItem>
            </Select>
          </FormControl>
          <div className='flex'>  
            <Button onClick={handleSubmitWithoutImage} variant="contained" color="primary" style={{ marginTop: '10px' }}>
              Submit Without image
            </Button>
            {userRole === "INSPECTOR" ? (
              <div className='mt-3 ml-5'>
             <Button onClick={() => handleCameraModal("ABSs") } variant="contained" color="primary">
            Open Camera
            </Button>
          </div>
          ): (
            <label htmlFor="upload-MusicSystems" className="cursor-pointer flex items-center">
            <CloudUploadIcon />
            <span className="ml-2">Upload Image</span>
          </label>
          )}
          </div>
          {uploadedImages.ACCoolings && (
            <img
              src={uploadedImages.ACCoolings}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.ACCoolings)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Heater</InputLabel>
            <Select
              name="Heater"
              value={formData.Heater}
              onChange={handleChange}
            >
              <MenuItem value="Misfiring">Ineffective</MenuItem>
              <MenuItem value="Long cranking due to weak Compression">Not Working</MenuItem>
            </Select>
          </FormControl>
          <div className='flex'>  
            <Button onClick={handleSubmitWithoutImage} variant="contained" color="primary" style={{ marginTop: '10px' }}>
              Submit Without image
            </Button>
            {userRole === "INSPECTOR" ? (
              <div className='mt-3 ml-5'>
             <Button onClick={() => handleCameraModal("ABSs") } variant="contained" color="primary">
            Open Camera
            </Button>
          </div>
          ): (
            <label htmlFor="upload-MusicSystems" className="cursor-pointer flex items-center">
            <CloudUploadIcon />
            <span className="ml-2">Upload Image</span>
          </label>
          )}
          </div>
          {uploadedImages.Heaters && (
            <img
              src={uploadedImages.Heaters}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Heaters)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Climate Control AC</InputLabel>
            <Select
              name="ClimateControlAC"
              value={formData.ClimateControlAC}
              onChange={handleChange}
            >
              <MenuItem value="Misfiring">Ineffective</MenuItem>
              <MenuItem value="Long cranking due to weak Compression">Not Working</MenuItem>
            </Select>
          </FormControl>
          <div className='flex'>  
            <Button onClick={handleSubmitWithoutImage} variant="contained" color="primary" style={{ marginTop: '10px' }}>
              Submit Without image
            </Button>
            {userRole === "INSPECTOR" ? (
              <div className='mt-3 ml-5'>
             <Button onClick={() => handleCameraModal("ABSs") } variant="contained" color="primary">
            Open Camera
            </Button>
          </div>
          ): (
            <label htmlFor="upload-MusicSystems" className="cursor-pointer flex items-center">
            <CloudUploadIcon />
            <span className="ml-2">Upload Image</span>
          </label>
          )}
          </div>
          {uploadedImages.ClimateControlACs && (
            <img
              src={uploadedImages.ClimateControlACs}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.ClimateControlACs)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Ac Vent</InputLabel>
            <Select
              name="AcVent"
              value={formData.AcVent}
              onChange={handleChange}
            >
              <MenuItem value="Abnormal Noise">Abnormal Noise</MenuItem>
              <MenuItem value="Weak">Weak</MenuItem>
            </Select>
          </FormControl>
          <div className='flex'>  
            <Button onClick={handleSubmitWithoutImage} variant="contained" color="primary" style={{ marginTop: '10px' }}>
              Submit Without image
            </Button>
            {userRole === "INSPECTOR" ? (
              <div className='mt-3 ml-5'>
             <Button onClick={() => handleCameraModal("ABSs") } variant="contained" color="primary">
            Open Camera
            </Button>
          </div>
          ): (
            <label htmlFor="upload-MusicSystems" className="cursor-pointer flex items-center">
            <CloudUploadIcon />
            <span className="ml-2">Upload Image</span>
          </label>
          )}
          </div>
          {uploadedImages.AcVents && (
            <img
              src={uploadedImages.AcVents}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.AcVents)}
            />
          )}
        </Grid>

      </Grid>

      {/* Modal for displaying clicked image */}
      <Modal
        open={captureModalOpen}
        onClose={() => setCaptureModalOpen(false)}
        // className={classes.modal}
      >
        <div className={classes.paper}>
          <UploadImage4
            isOpen={captureModalOpen}
            onClose={() => setCaptureModalOpen(false)}
            onCapture={handleCaptureImage}
            handleCaptureImage = {handleFileChange}
            selectfiled = {selectedLable}
          />
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

export default Ac;
