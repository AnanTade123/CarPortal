import  {  useEffect, useState } from 'react';
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
import { useGetInspectionReportQuery, useInspectionReportMutation } from '../../services/inspectorapi';
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

const Engine = () => {
  const classes = useStyles();
  const { id } = useParams();
  console.log(id);
  const { data } = useGetInspectionReportQuery({ id, docType: "Engine" });
  console.log(data);

  const [formData, setFormData] = useState({
    Engine: [],
    EngineMounting: [],
    EngineSound: [],
    Exhaustsmoke: [],
    Gearbox: [],
    Engineoil: [],
    Battery: [],
    Coolant: [],
    Clutch: [],
  });

  const [uploadedImages, setUploadedImages] = useState({
    Engines: null,
    EngineMountings: null,
    EngineSounds: null,
    Exhaustsmokes: null,
    Gearboxs: null,
    Engineoils: null,
    Batterys: null,
    Coolants: null,
    Clutchs: null,
  });

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [inspectionReport] = useInspectionReportMutation();
  const [lables , setLables] = useState("");
  const [selectfiled , setSelectfiled] = useState("")
 
  useEffect(() => {
    // Pre-fill form data and uploaded images based on API data
    data?.object.map((item) => {
      switch (item.subtype) {
        case "Engine":
          setFormData((prev) => ({ ...prev, Engine: item.comment }));
          setUploadedImages((prev) => ({ ...prev, Engines: item.documentLink }));
          break;
        case "EngineMounting":
          setFormData((prev) => ({ ...prev, EngineMounting: item.comment }));
          setUploadedImages((prev) => ({ ...prev, EngineMountings: item.documentLink }));
          break;
        case "EngineSound":
          setFormData((prev) => ({ ...prev, EngineSound: item.comment }));
          setUploadedImages((prev) => ({ ...prev, EngineSounds: item.documentLink }));
          break;
        case "Exhaustsmoke":
          setFormData((prev) => ({ ...prev, Exhaustsmoke: item.comment }));
          setUploadedImages((prev) => ({ ...prev, Exhaustsmokes: item.documentLink }));
          break;
        case "Gearbox":
          setFormData((prev) => ({ ...prev, Gearbox: item.comment }));
          setUploadedImages((prev) => ({ ...prev, Gearboxs: item.documentLink }));
          break;
        case "Engineoil":
          setFormData((prev) => ({ ...prev, Engineoil: item.comment }));
          setUploadedImages((prev) => ({ ...prev, Engineoils: item.documentLink }));
          break;
        case "Battery":
          setFormData((prev) => ({ ...prev, Battery: item.comment }));
          setUploadedImages((prev) => ({ ...prev, Batterys: item.documentLink }));
          break;
        case "Coolant":
          setFormData((prev) => ({ ...prev, Coolant: item.comment }));
          setUploadedImages((prev) => ({ ...prev, Coolants: item.documentLink }));
          break;
        case "Clutch":
          setFormData((prev) => ({ ...prev, Clutch: item.comment }));
          setUploadedImages((prev) => ({ ...prev, Clutchs: item.documentLink }));
          break;
        default:
          break;
      }
    });
  }, [data]);

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
        doctype: "Engine",
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

    if (value.length > 0) {
      setLables(name);
      setSelectfiled(value);
    }
  };
  console.log(selectfiled)
  console.log(lables)

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
        Engine
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Engine</InputLabel>
            <Select
              name="Engine"
              value={formData.Engine}
              onChange={handleChange}
            >
              <MenuItem value="Misfiring">Misfiring</MenuItem>
              <MenuItem value="Long cranking due to weak Compression">Long cranking due to weak Compression</MenuItem>
              <MenuItem value="Permissible blow- by on idle">Permissible blow- by on idle</MenuItem>
              <MenuItem value="Fuel leakage from injector">Fuel leakage from injector</MenuItem>
              <MenuItem value="MIL light glowing">MIL light glowing</MenuItem>
              <MenuItem value="RPM Fluctuating">RPM Fluctuating</MenuItem>
              <MenuItem value="Over Heating">Over Heating</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Engines"
              type="file"
              onChange={(event) => handleFileChange(event, 'Engines')}
            />
            <label htmlFor="upload-Engines" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Engines && (
            <img
              src={uploadedImages.Engines}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Engines)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Engine Mounting</InputLabel>
            <Select
              name="EngineMounting"
              value={formData.EngineMounting}
              onChange={handleChange}
            >
              <MenuItem value="Loose">Loose</MenuItem>
              <MenuItem value="Tight">Tight</MenuItem>
              <MenuItem value="Excess Vibration">Excess Vibration</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-EngineMountings"
              type="file"
              onChange={(event) => handleFileChange(event, 'EngineMountings')}
            />
            <label htmlFor="upload-EngineMountings" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.EngineMountings && (
            <img
              src={uploadedImages.EngineMountings}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.EngineMountings)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Engine Sound</InputLabel>
            <Select
              name="EngineSound"
              value={formData.EngineSound}
              onChange={handleChange}
            >
              <MenuItem value="Minor sound">Minor sound</MenuItem>
              <MenuItem value="No engine sound">No engine sound</MenuItem>
              <MenuItem value="Critical sound">Critical sound</MenuItem>
              <MenuItem value="No Blow-by">No Blow-by</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-EngineSounds"
              type="file"
              onChange={(event) => handleFileChange(event, 'EngineSounds')}
            />
            <label htmlFor="upload-EngineSounds" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.EngineSounds && (
            <img
              src={uploadedImages.EngineSounds}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.EngineSounds)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Exhaust Smoke</InputLabel>
            <Select
              name="Exhaustsmoke"
              value={formData.Exhaustsmoke}
              onChange={handleChange}
            >
              <MenuItem value="Black">Black</MenuItem>
              <MenuItem value="Blue">Blue</MenuItem>
              <MenuItem value="Silencer assembly Damaged and Create Noise">Silencer assembly Damaged and Create Noise</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Exhaustsmokes"
              type="file"
              onChange={(event) => handleFileChange(event, 'Exhaustsmokes')}
            />
            <label htmlFor="upload-Exhaustsmokes" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Exhaustsmokes && (
            <img
              src={uploadedImages.Exhaustsmokes}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Exhaustsmokes)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Gearbox</InputLabel>
            <Select
              name="Gearbox"
              value={formData.Gearbox}
              onChange={handleChange}
            >
              <MenuItem value="Oil leakage">Oil leakage</MenuItem>
              <MenuItem value="Shifting-Hard">Shifting-Hard</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Gearboxs"
              type="file"
              onChange={(event) => handleFileChange(event, 'Gearboxs')}
            />
            <label htmlFor="upload-Gearboxs" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Gearboxs && (
            <img
              src={uploadedImages.Gearboxs}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Gearboxs)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Engine Oil</InputLabel>
            <Select
              name="Engineoil"
              value={formData.Engineoil}
              onChange={handleChange}
            >
              <MenuItem value="Low Level">Low Level</MenuItem>
              <MenuItem value="Leakage">Leakage</MenuItem>
              <MenuItem value="Deteriorated">Deteriorated</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Engineoils"
              type="file"
              onChange={(event) => handleFileChange(event, 'Engineoils')}
            />
            <label htmlFor="upload-Engineoils" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Engineoils && (
            <img
              src={uploadedImages.Engineoils}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginsTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Engineoils)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Battery</InputLabel>
            <Select
              name="Battery"
              value={formData.Battery}
              onChange={handleChange}
            >
              <MenuItem value="Battery Voltage 2.5 Volt">Battery Voltage 2.5 Volt</MenuItem>
              <MenuItem value="Electrical Fault - Start Motor">Electrical Fault - Start Motor</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Batterys"
              type="file"
              onChange={(event) => handleFileChange(event, 'Batterys')}
            />
            <label htmlFor="upload-Batterys" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Batterys && (
            <img
              src={uploadedImages.Batterys}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Batterys)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Coolant</InputLabel>
            <Select
              name="Coolant"
              value={formData.Coolant}
              onChange={handleChange}
            >
              <MenuItem value="Low Level">Low Level</MenuItem>
              <MenuItem value="Leakage">Leakage</MenuItem>
              <MenuItem value="Deteriorated">Deteriorated</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Coolants"
              type="file"
              onChange={(event) => handleFileChange(event, 'Coolants')}
            />
            <label htmlFor="upload-Coolants" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Coolants && (
            <img
              src={uploadedImages.Coolants}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Coolants)}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Clutch</InputLabel>
            <Select
              name="Clutch"
              value={formData.Clutch}
              onChange={handleChange}
            >
              <MenuItem value="Slipping">Slipping</MenuItem>
              <MenuItem value="Hard">Hard</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Clutchs"
              type="file"
              onChange={(event) => handleFileChange(event, 'Clutchs')}
            />
            <label htmlFor="upload-Clutchs" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
          </div>
          {uploadedImages.Clutchs && (
            <img
              src={uploadedImages.Clutchs}
              alt="Uploaded"
              style={{ maxWidth: '20%', marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(uploadedImages.Clutchs)}
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

export default Engine;
