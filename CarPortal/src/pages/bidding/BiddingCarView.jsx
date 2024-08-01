/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-unsafe-optional-chaining */
import { useState } from "react";
import { useFilterCarQuery } from "../../services/carAPI";
// import GridCarList from "../buyCar/GridCarList";
import BiddingCarView1 from "./BiddingCarView1";
import BiddingKnowYourCar from "./BiddingKnowYourCar";
import BiddingInspectionReport from "./BiddingInspectionReport";
import { Button } from "@material-tailwind/react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import TopFeatures from "../../components/carDetails/TopFeatures";

const BiddingCarView = ({
  fuelType,
  registration,
  ownerSerial,
  transmission,
  year,
  carInsurance,
  carInsuranceType,
  kmDriven,
  beadingCarId,
  data,
  musicFeature,
  acFeature,
  powerWindowFeature,
  rearParkingCameraFeature,
  adas,
  childSafetyLocks,
  automaticEmergencyBraking,
  parkingSensors,
  sunroof,
  adaptiveHeadlights
}) => {
  
  const token = Cookies.get("token");
  let jwtDecodes;
  if (token) {
    jwtDecodes = jwtDecode(token);
  }

  const userRole = token ? jwtDecodes?.authorities[0] : null;
  console.log(userRole)
  return (
    <div>
      <BiddingCarView1 beadingCarId={beadingCarId} data={data} />
      <BiddingKnowYourCar
        fuelType={fuelType}
        registration={registration}
        ownerSerial={ownerSerial}
        transmission={transmission}
        year={year}
        carInsurance={carInsurance}
        kmDriven={kmDriven}
        carInsuranceType={carInsuranceType}
      />
      {/* <BiddingInspectionReport /> */}

      
          
      <TopFeatures
      adas={adas}
      childSafetyLocks={childSafetyLocks}
      sunroof={sunroof}
      adaptiveHeadlights={adaptiveHeadlights}
      automaticEmergencyBraking={automaticEmergencyBraking}
      parkingSensors={parkingSensors}
      acFeature={acFeature}
      musicFeature={musicFeature}
      powerWindowFeature={powerWindowFeature}
      rearParkingCameraFeature={rearParkingCameraFeature}
      />
    </div>
  );
};

export default BiddingCarView;
