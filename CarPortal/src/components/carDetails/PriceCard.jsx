/* eslint-disable react/prop-types */
import Cookies from "js-cookie";
import CardUi from "../../ui/CardUi";
import { jwtDecode } from "jwt-decode";
import DialogBox from "../../ui/DialogBox";

import { Chip } from "@material-tailwind/react";
import { IoHome } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import BiddingSetTime from "../../ui/BiddingSetTime";
import BiddingDailogeBox from "../../ui/BiddingDialogeBox"
import { useBiddingCarByDealerIdQuery } from "../../services/biddingAPI";
import PlaceBid from "../../pages/dealer/PlaceBid";

const PriceCard = ({
  price,
  brand,
  fuelType,
  kmDriven,
  ownerSerial,
  year,
  model,
  registration,
  city,
  area,
  color,
  bodyType,
  dealer_id,
  carId,
  handleBuyCar,
}) => {
  const cookie = Cookies.get("token");

  console.log(cookie);
  const jwtDecodes = cookie ? jwtDecode(cookie) : null;

  const userRole = jwtDecodes?.authorities[0];
  console.log(userRole);
  console.log(userRole);
  const UserID = jwtDecodes?.userId;
  const { data } = useBiddingCarByDealerIdQuery(UserID);

  console.log(data);
  return (
    <CardUi>
      <div className="w-full md:w-full ">
        <p className="font-extrabold text-2xl text-black uppercase font-[latto] ml-2">
          {year} {brand} {model}
        </p>
        <p className="uppercase font-[Merriweather] ml-2 md:ml-0">
          {color} {bodyType} & MANUAL
        </p>
        <div className="my-4 flex gap-2 overflow-x-auto scrollbar ml-2 md:ml-0">
          <Chip
            variant="outlined"
            value={`${kmDriven} KM`}
            className="text-sm text-black font-[latto] hover:bg-gray-900 hover:text-white"
          />
          <Chip
            variant="outlined"
            value={`${
              ownerSerial == 1
                ? "1ST"
                : ownerSerial == 2
                ? "2ND"
                : ownerSerial == 3
                ? "3RD"
                : ownerSerial == 4
                ? "4TH"
                : ownerSerial == 5
                ? "5TH"
                : ""
            } Owner`}
            className="text-base text-black font-[latto] hover:bg-gray-900 hover:text-white"
          />
          <Chip
            variant="outlined"
            value={`${fuelType}`}
            className="text-base text-black font-[latto] hover:bg-gray-900 hover:text-white"
          />
          <Chip
            variant="outlined"
            value={`${registration}`}
            className="text-base text-black font-[latto] hover:bg-gray-900 hover:text-white"
          />
        </div>
        <div className="flex align-bottom items-baseline gap-3 ml-2 md:ml-0">
          <IoHome />
          <div className=" mt-4 text-base font-[lotto]">
            Home Test Drive Available
          </div>
        </div>
        <div className="flex align-bottom items-baseline gap-3 ml-2 md:ml-0">
          <FaLocationDot />
          <div className=" mt-4 text-base text-gray-700 font-[lotto]">
            Parked at: {area},{city}
          </div>
        </div>
        <div className="flex align-bottom items-baseline gap-3 ml-2 md:ml-0">
          <FaFileAlt />
          <div className=" mt-4 text-base text-gray-700 font-[lotto]">
            View Inspection Report
          </div>
        </div>
        <div className="flex align-bottom items-baseline gap-3 ml-2 md:ml-0">
          <IoLogoWhatsapp />
          <div className=" mt-4 mb-6 text-base text-gray-700 font-[lotto]">
            Get Service History Report
          </div>
        </div>
        <hr className="border-gray-400" />
        <div className="flex justify-center align-middle items-center my-3">
          <div className="text-center">
            <div className="text-xl font-bold text-black font-[latto]">
              ₹{price}
            </div>
            <div className="uppercase text-gray-700 text-xs font-[lotto]">
              Understand Price
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center align-middle mb-3">
        {(userRole === "DEALER" || userRole === "ADMIN") ? null : (
  <DialogBox
    price={price}
    dealer_id={dealer_id}
    carId={carId}
    handleBuyCar={handleBuyCar}
    className
  />
)}


          {userRole == "DEALER" ? (
            <div>
              <p className="text-2xl font-semibold text-black">Start Bidding</p>
              <div className="flex mt-5">
                <div>
                  <BiddingSetTime
                    userid={UserID}
                    biddingcarid={data?.beadingCarId}
                  />
                </div>

                <div className="ml-5">
                   <BiddingDailogeBox userid={UserID} biddingcarid={data?.beadingCarId} />
                </div>

                <div className="ml-5">
                   <PlaceBid />
                </div>

              </div>
            </div>
          ) : null}
        </div>
      </div>
    </CardUi>
  );
};

export default PriceCard;
