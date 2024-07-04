/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import WindshieldAndLights from "./ExteriorsComponent/WindshieldAndLights";
import Tyre from "./ExteriorsComponent/Tyre";
import OtherComponent from "./ExteriorsComponent/OtherComponent";
import React, { useEffect, useState } from "react";
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
import Structure from './ExteriorsComponent/Structure';
import { useParams } from "react-router-dom";
import { useGetInspectionReportQuery, useInspectionReportMutation } from "../../services/inspectorapi";
import { ToastContainer, toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    maxWidth: "90%",
    maxHeight: "90%",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  fixedImage: {
    width: '500px',
    height: '500px',
    objectFit: 'contain',
  }
}));

const Exterior = () => {
  const classes = useStyles();
  const {id} = useParams()
  console.log(id)
const {data} = useGetInspectionReportQuery({id , docType : "Exterior"})
console.log(data)
  const [inspectionReport] = useInspectionReportMutation();
const [formData, setFormData] = useState({
    BonnetHood: [],
    RightDoorFront: [],
    LeftDoorFront: [],
    RightFender: [],
    LeftQuarterPanel: [],
    RightQuarterPanel: [],
    Roof: [],
    DickyDoor: [],
    LeftDoorRear: [],
    RightDoorRear: [],
    LHSFrontTyre: [],
    RHSFrontTyre: [],
    LHSRearTyre: [],
    RHSRearTyre: [],
    SpareTyre: [],
    Windshield: [],
    Light: [],
    FrontBumper: [],
    RearBumper: [],
    LHSHeadlight: [],
    RHSHeadlight: [],
    LHSTaillight: [],
    RHSTaillight: [],
    HeadLightSupport: [],
    RadiatorSupport: [],
    AlloyWheel: [],
  });

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


  const [uploadedImages, setUploadedImages] = useState({
    BonnetHoods: null,
    RightDoorFronts: null,
    LeftDoorFronts: null,
    RightFenders: null,
    LeftQuarterPanels: null,
    RightQuarterPanels: null,
    Roofs: null,
    DickyDoors: null,
    LeftDoorRears: null,
    RightDoorRears: null,
    LHSFrontTyres: null,
    RHSFrontTyres: null,
    LHSRearTyres: null,
    RHSRearTyres: null,
    SpareTyres: null,
    Windshields: null,
    Lights: null,
    FrontBumpers: null,
    RearBumpers: null,
    LHSHeadlights: null,
    RHSHeadlights: null,
    LHSTaillights: null,
    RHSTaillights: null,
    HeadLightSupports: null,
    RadiatorSupports: null,
    AlloyWheels: null,
    CowlTops : null,
    BootFloors: null,
    RightApronLEGs: null,
    LeftApronLEGs: null,
    RightAprons: null,
    LeftAprons: null,
    LeftPillars: null,
    RightPillars: null,
  });
    console.log(uploadedImages) 
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
    <div className="p-4">
      <ToastContainer/>
      <Typography variant="h4" className="text-black font-bold pb-5">
        Exterior Panel
      </Typography>
      <Grid container spacing={3}>
        {/* Bonnet Hood */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Bonnet Hood</InputLabel>
            <Select
              name="BonnetHood"
              value={formData.BonnetHood}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-BonnetHoods"
              type="file"
              onChange={(event) => handleFileChange(event, "BonnetHoods")}
            />
            <label
              htmlFor="upload-BonnetHoods"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.BonnetHoods && (
            <img
              src={uploadedImages.BonnetHoods}
              alt="Uploaded"
              style={{
                maxWidth: "20%",
                marginTop: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(uploadedImages.BonnetHoods)}
            />
          )}
        </Grid>

        {/* Right Door Front */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Right Door Front</InputLabel>
            <Select
              name="RightDoorFront"
              value={formData.RightDoorFront}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
              <MenuItem value="Faded">Replaced</MenuItem>


            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-RightDoorFronts"
              type="file"
              onChange={(event) => handleFileChange(event, "RightDoorFronts")}
            />
            <label
              htmlFor="upload-RightDoorFronts"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RightDoorFronts && (
            <img
              src={uploadedImages.RightDoorFronts}
              alt="Uploaded"
              style={{
                maxWidth: "20%",
                marginTop: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(uploadedImages.RightDoorFronts)}
            />
          )}
        </Grid>

        {/* Left Door Front */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Left Door Front</InputLabel>
            <Select
              name="LeftDoorFront"
              value={formData.LeftDoorFront}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
              <MenuItem value="Faded">Replaced</MenuItem>

            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-LeftDoorFronts"
              type="file"
              onChange={(event) => handleFileChange(event, "LeftDoorFronts")}
            />
            <label
              htmlFor="upload-LeftDoorFronts"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LeftDoorFronts && (
            <img
              src={uploadedImages.LeftDoorFronts}
              alt="Uploaded"
              style={{
                maxWidth: "20%",
                marginTop: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(uploadedImages.LeftDoorFronts)}
            />
          )}
        </Grid>

        {/* Right Fender */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Right Fender</InputLabel>
            <Select
              name="RightFender"
              value={formData.RightFender}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
              
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-RightFenders"
              type="file"
              onChange={(event) => handleFileChange(event, "RightFenders")}
            />
            <label
              htmlFor="upload-RightFenders"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RightFenders && (
            <img
              src={uploadedImages.RightFenders}
              alt="Uploaded"
              style={{
                maxWidth: "20%",
                marginTop: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(uploadedImages.RightFenders)}
            />
          )}
        </Grid>

        {/* Left Quarter Panel */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Left Quarter Panel</InputLabel>
            <Select
              name="LeftQuarterPanel"
              value={formData.LeftQuarterPanel}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-LeftQuarterPanels"
              type="file"
              onChange={(event) => handleFileChange(event, "LeftQuarterPanels")}
            />
            <label
              htmlFor="upload-LeftQuarterPanels"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LeftQuarterPanels && (
            <img
              src={uploadedImages.LeftQuarterPanels}
              alt="Uploaded"
              style={{
                maxWidth: "20%",
                marginTop: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(uploadedImages.LeftQuarterPanels)}
            />
          )}
        </Grid>

        {/* Right Quarter Panel */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Right Quarter Panel</InputLabel>
            <Select
              name="RightQuarterPanel"
              value={formData.RightQuarterPanel}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-RightQuarterPanels"
              type="file"
              onChange={(event) => handleFileChange(event, "RightQuarterPanels")}
            />
            <label
              htmlFor="upload-RightQuarterPanels"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RightQuarterPanels && (
            <img
              src={uploadedImages.RightQuarterPanels}
              alt="Uploaded"
              style={{
                maxWidth: "20%",
                marginTop: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(uploadedImages.RightQuarterPanels)}
            />
          )}
        </Grid>

        {/* Roof */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Roof</InputLabel>
            <Select name="Roof" value={formData.Roof} onChange={handleChange}>
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-Roofs"
              type="file"
              onChange={(event) => handleFileChange(event, "Roofs")}
            />
            <label
              htmlFor="upload-Roofs"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Roofs && (
            <img
              src={uploadedImages.Roofs}
              alt="Uploaded"
              style={{
                maxWidth: "20%",
                marginTop: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(uploadedImages.Roofs)}
            />
          )}
        </Grid>

        {/* Dicky Door */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Dicky Door</InputLabel>
            <Select
              name="DickyDoor"
              value={formData.DickyDoor}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
              <MenuItem value="Faded">Replaced</MenuItem>

            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-DickyDoors"
              type="file"
              onChange={(event) => handleFileChange(event, "DickyDoors")}
            />
            <label
              htmlFor="upload-DickyDoors"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.DickyDoors && (
            <img
              src={uploadedImages.DickyDoors}
              alt="Uploaded"
              style={{
                maxWidth: "20%",
                marginTop: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(uploadedImages.DickyDoors)}
            />
          )}
        </Grid>

        {/* Left Door Rear */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Left Door Rear</InputLabel>
            <Select
              name="LeftDoorRear"
              value={formData.LeftDoorRear}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
              <MenuItem value="Faded">Replaced</MenuItem>

            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-LeftDoorRears"
              type="file"
              onChange={(event) => handleFileChange(event, "LeftDoorRears")}
            />
            <label
              htmlFor="upload-LeftDoorRears"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.LeftDoorRears && (
            <img
              src={uploadedImages.LeftDoorRears}
              alt="Uploaded"
              style={{
                maxWidth: "20%",
                marginTop: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(uploadedImages.LeftDoorRears)}
            />
          )}
        </Grid>

        {/* Right Door Rear */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Right Door Rear</InputLabel>
            <Select
              name="RightDoorRear"
              value={formData.RightDoorRear}
              onChange={handleChange}
            >
              <MenuItem value="Repainted">Repainted</MenuItem>
              <MenuItem value="Dented">Dented</MenuItem>
              <MenuItem value="Scratched">Scratched</MenuItem>
              <MenuItem value="Rusted">Rusted</MenuItem>
              <MenuItem value="Repaired">Repaired</MenuItem>
              <MenuItem value="Damaged">Damaged</MenuItem>
              <MenuItem value="Faded">Faded</MenuItem>
              <MenuItem value="Faded">Replaced</MenuItem>

            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-RightDoorRears"
              type="file"
              onChange={(event) => handleFileChange(event, "RightDoorRears")}
            />
            <label
              htmlFor="upload-RightDoorRears"
              className="cursor-pointer flex items-center"
            >
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.RightDoorRears && (
            <img
              src={uploadedImages.RightDoorRears}
              alt="Uploaded"
              style={{
                maxWidth: "20%",
                marginTop: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(uploadedImages.RightDoorRears)}
            />
          )}
        </Grid>
      </Grid>

      {/* Modal for displaying clicked image */}
      <Modal open={openModal} onClose={closeModal} className={classes.modal}>
        <div className={classes.paper}>
          {selectedImage && (
            <div>
              <img
                src={selectedImage}
                alt="Selected"
                className={classes.fixedImage}
              />
              <Button
                onClick={closeModal}
                variant="contained"
                color="secondary"
                style={{ marginTop: "10px" }}
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </Modal>

      
      <WindshieldAndLights formData={formData} setFormData={setFormData} handleFileChange={handleFileChange} uploadedImages={uploadedImages} setUploadedImages={setUploadedImages}/>
<Tyre formData={formData} setFormData={setFormData} handleFileChange={handleFileChange} uploadedImages={uploadedImages} setUploadedImages={setUploadedImages}/>
<OtherComponent formData={formData} setFormData={setFormData} handleFileChange={handleFileChange} uploadedImages={uploadedImages} setUploadedImages={setUploadedImages}/>

<Structure formData={formData} setFormData={setFormData} handleFileChange={handleFileChange} uploadedImages={uploadedImages} setUploadedImages={setUploadedImages}/>


{/* <div className="flex justify-end mt-10 px-8">
        
        <Button variant="contained" color="primary">
          Next
        </Button> 
      </div> */}
    </div>
  );
};

export default Exterior;