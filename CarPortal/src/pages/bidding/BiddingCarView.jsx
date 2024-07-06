/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-unsafe-optional-chaining */
import { useState } from "react";
import { useFilterCarQuery } from "../../services/carAPI";
// import GridCarList from "../buyCar/GridCarList";
import BiddingCarView1 from "./BiddingCarView1";
import BiddingKnowYourCar from "./BiddingKnowYourCar";
import BiddingInspectionReport from "./BiddingInspectionReport";

const BiddingCarView = ({
  fuelType,
  registration,
  ownerSerial,
  transmission,
  year,
  carInsurance,
  kmDriven,
  beadingCarId,
  data,
}) => {
  console.log(
    beadingCarId
  );

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
      />
      <BiddingInspectionReport />

      {/* <TopFeatures/> */}
    </div>
  );
};

export default BiddingCarView;
