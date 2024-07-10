/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
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
import { useParams } from 'react-router-dom';
import { useAddBiddingCarWithoutImageMutation, useGetInspectionReportQuery, useInspectionReportMutation } from '../../../services/inspectorapi';
import Cookies from "js-cookie";
import { jwtDecode } from 'jwt-decode';
import UploadImage4 from '../../../ui/UploadImageComponents/UploadImage4';

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

const Tyre = () => {
  const classes = useStyles();
  const { beadingCarId } = useParams();
  console.log(beadingCarId);
  const { data } = useGetInspectionReportQuery({ beadingCarId, docType: "Exterior" });
  console.log(data);


  const [formData, setFormData] = useState({
    LHSFrontTyre: [],
    RHSFrontTyre: [],
    LHSRearTyre: [],
    RHSRearTyre: [],
    SpareTyre: []
  });

  const [inspectionReport] = useInspectionReportMutation();
  const [addBiddingCarWithoutImage] = useAddBiddingCarWithoutImageMutation()
  const [captureModalOpen, setCaptureModalOpen] = useState(false);
  const [selectedLable ,setSelectedLable] = useState("");
  const [lables, setLables] = useState("");
  const [selectfiled, setSelectfiled] = useState("")
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  console.log(lables)
  console.log(selectfiled)
  const [uploadedImages, setUploadedImages] = useState({
    LHSFrontTyres: null,
    RHSFrontTyres: null,
    LHSRearTyres: null,
    RHSRearTyres: null,
    SpareTyres: null
  });
  const token = Cookies.get("token");
  let jwtDecodes;
  if (token) {
    jwtDecodes = jwtDecode(token);
  }

  const userRole = token ? jwtDecodes?.authorities[0] : null;
console.log(userRole)
 
  useEffect(() => {
    // Pre-fill form data and uploaded images based on API data
    data?.object.map((item) => {
      switch (item.subtype) {
   
        case "LHSFrontTyre":
          setFormData((prev) => ({ ...prev, LHSFrontTyre: item.comment }));
          setUploadedImages((prev) => ({ ...prev, LHSFrontTyres: item.documentLink }));
          break;
        case "RHSFrontTyre":
          setFormData((prev) => ({ ...prev, RHSFrontTyre: item.comment }));
          setUploadedImages((prev) => ({ ...prev, RHSFrontTyres: item.documentLink }));
          break;
        case "LHSRearTyre":
          setFormData((prev) => ({ ...prev, LHSRearTyre: item.comment }));
          setUploadedImages((prev) => ({ ...prev, LHSRearTyres: item.documentLink }));
          break;
        case "RHSRearTyre":
          setFormData((prev) => ({ ...prev, RHSRearTyre: item.comment }));
          setUploadedImages((prev) => ({ ...prev, RHSRearTyres: item.documentLink }));
          break;
        case "SpareTyre":
          setFormData((prev) => ({ ...prev, SpareTyre: item.comment }));
          setUploadedImages((prev) => ({ ...prev, SpareTyres: item.documentLink }));
          break;
        default:
          break;
      }
    });
  }, [data]);

  
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
        documentType: "InspectionReport",
        beadingCarId: beadingCarId,
        doc: "",
        doctype: "Exterior",
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

  const handleChange= (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (value.length > 0) {
      setLables(name);
      setSelectfiled(value);
    }
  };

  const handleCaptureImage = (imageUrl) => {
    setSelectedImage(imageUrl);
    setCaptureModalOpen(false); // Close the camera modal after capturing the image
  };

  const handleCameraModal = (key) => {
    setCaptureModalOpen(true);
    setSelectedLable(key)
  }

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
      <Typography variant="h4" className='text-black font-bold pb-5 pt-16'>
        Tyres
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>LHS Front Tyre</InputLabel>
            <Select
              name="LHSFrontTyre"
              value={formData.LHSFrontTyre}
              onChange={handleChange}
            >
              <MenuItem value="ok-69-85%">Ok 69-85%</MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
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
          {uploadedImages.LHSFrontTyres && (
            <img
              src={uploadedImages.LHSFrontTyres}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.LHSFrontTyres)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>RHS Front Tyre</InputLabel>
            <Select
              name="RHSFrontTyre"
              value={formData.RHSFrontTyre}
              onChange={handleChange}
            >
              <MenuItem value="ok-69-85%">Ok 69-85%</MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
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
          {uploadedImages.RHSFrontTyres && (
            <img
              src={uploadedImages.RHSFrontTyres}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.RHSFrontTyre)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>LHS Rear Tyre</InputLabel>
            <Select
              name="LHSRearTyre"
              value={formData.LHSRearTyre}
              onChange={handleChange}
            >
              <MenuItem value="ok-69-85%">Ok 69-85%</MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
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
          {uploadedImages.LHSRearTyres && (
            <img
              src={uploadedImages.LHSRearTyres}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.LHSRearTyres)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>RHS Rear Tyre</InputLabel>
            <Select
              name="RHSRearTyre"
              value={formData.RHSRearTyre}
              onChange={handleChange}
            >
              <MenuItem value="ok-69-85%">Ok 69-85%</MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
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
          {uploadedImages.RHSRearTyres && (
            <img
              src={uploadedImages.RHSRearTyres}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.RHSRearTyres)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Spare Tyre</InputLabel>
            <Select
              name="SpareTyre"
              value={formData.SpareTyre}
              onChange={handleChange}
            >
              <MenuItem value="ok-69-85%">Ok 69-85%</MenuItem>
              <MenuItem value="not-ok-22-38%">Not Ok 22-38%</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
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
          {uploadedImages.SpareTyres && (
            <img
              src={uploadedImages.SpareTyres}
              alt="Uploaded"
              style={{
                maxWidth: '20%',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(uploadedImages.SpareTyres)}
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

      
    </div>
  );
};

export default Tyre;
