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
import { useGetInspectionReportQuery, useInspectionReportMutation } from '../../../services/inspectorapi';

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

const Tyre = () => {
  const classes = useStyles();
  const {id} = useParams()
  console.log(id)
const {data} = useGetInspectionReportQuery({id , docType : "Exterior"})
console.log(data)

const InspetData = data?.object
console.log(InspetData)
  const [inspectionReport] = useInspectionReportMutation();
  const [formData, setFormData] = useState({
    LHSFrontTyre: [],
    RHSFrontTyre: [],
    LHSRearTyre: [],
    RHSRearTyre: [],
    SpareTyre: []
  });

  const [lables , setLables] = useState("");
  const [selectfiled , setSelectfiled] = useState("")
  
  console.log(lables)
  console.log(selectfiled)
  const [uploadedImages, setUploadedImages] = useState({
    LHSFrontTyres: null,
    RHSFrontTyres: null,
    LHSRearTyres: null,
    RHSRearTyres: null,
    SpareTyres: null
  });

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
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

  const handleFileChange = async (event, fieldName) => {
    console.log("fromdata",formData)
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
        doctype: "Exterior",
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

  const handleChange= (event) => {
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
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-LHSFrontTyres"
              type="file"
              onChange={(event) => handleFileChange(event, 'LHSFrontTyres')}
            />
            <label
              htmlFor="upload-LHSFrontTyres"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
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
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-RHSFrontTyres"
              type="file"
              onChange={(event) => handleFileChange(event, 'RHSFrontTyres')}
            />
            <label
              htmlFor="upload-RHSFrontTyres"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
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
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-LHSRearTyres"
              type="file"
              onChange={(event) => handleFileChange(event, 'LHSRearTyres')}
            />
            <label
              htmlFor="upload-LHSRearTyres"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
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
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-RHSRearTyres"
              type="file"
              onChange={(event) => handleFileChange(event, 'RHSRearTyres')}
            />
            <label
              htmlFor="upload-RHSRearTyres"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
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
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-SpareTyres"
              type="file"
              onChange={(event) => handleFileChange(event, 'SpareTyres')}
            />
            <label
              htmlFor="upload-SpareTyres"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
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

export default Tyre;
