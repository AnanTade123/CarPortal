import { useEffect, useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel, Grid, Typography, Button, Modal, makeStyles } from '@material-ui/core';
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
  fixedImage: {
    width: '500px',
    height: '500px',
    objectFit: 'contain',
  }
}));

const Ac = () => {
  const classes = useStyles();
  const { id } = useParams();
  console.log(id);
  const { data } = useGetInspectionReportQuery({ id, docType: "AC" });
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
  const [lables , setLables] = useState("");
  const [selectfiled , setSelectfiled] = useState("")
 
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
        doctype: "AC",
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
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-ACCoolings"
              type="file"
              onChange={(event) => handleFileChange(event, 'ACCoolings')}
            />
            <label htmlFor="upload-ACCoolings" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
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
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-Heaters"
              type="file"
              onChange={(event) => handleFileChange(event, 'Heaters')}
            />
            <label htmlFor="upload-Heaters" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
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
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-ClimateControlACs"
              type="file"
              onChange={(event) => handleFileChange(event, 'ClimateControlACs')}
            />
            <label htmlFor="upload-ClimateControlACs" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
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
          <div className="flex items-center mt-2">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-AcVents"
              type="file"
              onChange={(event) => handleFileChange(event, 'AcVents')}
            />
            <label htmlFor="upload-AcVents" className="cursor-pointer flex items-center">
              <CloudUploadIcon />
              <span className="ml-2">Upload Image</span>
            </label>
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
        open={openModal}
        onClose={closeModal}
        className={classes.modal}
      >
        <div className={classes.paper}>
          {selectedImage && (
            <div>
              <img src={selectedImage} alt="Selected" className={classes.fixedImage} />
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

export default Ac;
