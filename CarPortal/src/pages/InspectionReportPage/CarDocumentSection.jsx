import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const CarDocumentSection = () => {
  const [formData, setFormData] = React.useState({
    rcAvailability: 'Yes',
    mismatchInRC: 'No mismatch',
    rtoNocIssued: 'Yes',
    insuranceType: 'Zero Depreciation, Comprehensive',
    noClaimBonus: 'Yes',
    underHypothecation: 'No',
    roadTaxPaid: 'LTT',
    partipeshiRequest: 'No',
    duplicateKey: 'Yes',
    chassisNumberEmbossing: 'Yes',
    manufacturingDate: '20/06/2024',
    registrationDate: '20/06/2024',
    rto: 'MH21-Jalna',
    fitnessUpto: '20/06/2024',
    cngLpgFitmentInRC: 'No mismatch',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  return (

    
    <div className='p-4 flex-col ' >
      <Typography variant="h4" className='text-black font-bold pb-10'>
      <span >Important Document</span>
      </Typography>
      <div className=' bg-white border-2 rounded-md shadow-md p-7 -mt-2'>
       <Grid container spacing={3}>
        {/* RC Availability */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">RC Availability: {formData.rcAvailability}</Typography>
        </Grid>

        {/* Mismatch in RC */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Mismatch in RC: {formData.mismatchInRC}</Typography>
        </Grid>

        {/* RTO NOC Issued */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">RTO NOC Issued: {formData.rtoNocIssued}</Typography>
        </Grid>

        {/* Insurance Type */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Insurance Type: {formData.insuranceType}</Typography>
        </Grid>

        {/* No Claim Bonus */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">No Claim Bonus: {formData.noClaimBonus}</Typography>
        </Grid>

        {/* Under Hypothecation */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Under Hypothecation: {formData.underHypothecation}</Typography>
        </Grid>

        {/* Road Tax Paid */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Road Tax Paid: {formData.roadTaxPaid}</Typography>
        </Grid>

        {/* Partipeshi Request */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Partipeshi Request: {formData.partipeshiRequest}</Typography>
        </Grid>

        {/* Duplicate Key */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Duplicate Key: {formData.duplicateKey}</Typography>
        </Grid>

        {/* Chassis Number Embossing */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Chassis Number Embossing: {formData.chassisNumberEmbossing}</Typography>
        </Grid>

        {/* Manufacturing Date */}
        <Grid item xs={12} sm={6}>
          
          <Typography variant="body1">Manufacturing Date: {formData.manufacturingDate}</Typography>
        </Grid>

        {/* Registration Date */}
        <Grid item xs={12} sm={6}>
          
          <Typography variant="body1" onChange={handleChange}>Registration Date: {formData.registrationDate}</Typography>
        </Grid>

        {/* RTO */}
        <Grid item xs={12} sm={6}>
          
          <Typography variant="body1"><label htmlFor="">RTO:</label> {formData.rto}</Typography>
        </Grid>

        {/* Fitness Upto */}
        <Grid item xs={12} sm={6}>
          
          <Typography variant="body1"><label htmlFor="">Fitness Upto:</label> {formData.fitnessUpto}</Typography>
        </Grid>

        {/* CNG/LPG Fitment in RC */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">CNG/LPG Fitment in RC: {formData.cngLpgFitmentInRC}</Typography>
        </Grid>
      </Grid>
      </div>
      {/* <div className="flex justify-between mt-10 px-8">
        <button
          className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default CarDocumentSection;
