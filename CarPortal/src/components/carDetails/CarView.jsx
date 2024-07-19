/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-unsafe-optional-chaining */

import CarView1 from "./CarView1";
import KnowYourCar from "./KnowYourCar";
import TopFeatures from "./TopFeatures";

const CarView = ({
  fuelType,
  registration,
  ownerSerial,
  transmission,
  year,
  carInsurance,
  kmDriven,
  carId,
  musicFeature,
  acFeature,
  powerWindowFeature,
  rearParkingCameraFeature
}) => {
  return (
    <div>
      <CarView1 carId = {carId} />
      <KnowYourCar
        fuelType={fuelType}
        registration={registration}
        ownerSerial={ownerSerial}
        transmission={transmission}
        year={year}
        carInsurance={carInsurance}
        kmDriven={kmDriven}
      />

      {/* <InspectionReport/> */}
      
      <TopFeatures
      acFeature={acFeature}
      musicFeature={musicFeature}
      powerWindowFeature={powerWindowFeature}
      rearParkingCameraFeature={rearParkingCameraFeature}
      />
    </div>
  );
};

export default CarView;
