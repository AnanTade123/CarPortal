/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllDealerCompleteBookingQuery } from "../../services/dealerAPI";
import CardUi from "../../ui/CardUi";
import {
  Button,
  CardFooter,
  CardHeader,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CarouselCustomArrows } from "../../ui/CarouselCustomArrows";
const OrderDealer = () => {
  const { id } = useParams();

  const [pageNo, setPageNo] = useState(0);
  const { data, error, isLoading } = useGetAllDealerCompleteBookingQuery({
    pageNo,
    id,
  });

  const nextHandler = () => {
    setPageNo((prePageNo) => {
      if (error?.status === 404) {
        console.log("You are on the last page.");
      } else {
        return prePageNo + 1;
      }
    });
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  if (error) {
    return (
      <div>
        <p>No Data Available</p>

        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography
            variant="medium"
            color="blue-gray"
            className="font-normal"
          >
            Page {pageNo + 1}
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              size="sm"
              disabled={pageNo <= 0}
              onClick={() => setPageNo((a) => a - 1)}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              size="sm"
              onClick={nextHandler}
              disabled={data?.bookings?.length < 10}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </div>
    );
  }
  const renderData = data?.bookings?.map((item, index) => {
    const carid = item?.carId;
    return (
      <div className="ml-8 mt-3 mb-3 " key={index}>
        <CardUi>
          <div className="p-2 md:w-full md:px-5 md:py-3 md:flex md:gap-7">
            <div className="md:w-2/5">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <Link to={`/carlist/cardetails/${carid}`}>
                  <CarouselCustomArrows carId={carid} />
                </Link>
              </CardHeader>
            </div>
            <div>
              <p>
                Date:<span className="text-lg font-semibold">{item?.date}</span>
              </p>
              <p>
                Price:
                <span className="font-semibold text-lg">{item?.price}</span>
              </p>
              <div>
                <div className="font-[latto] text-lg font-bold text-black">
                  Contact Details of the User
                </div>
                <div className="font-[latto] text-base font-medium text-black">
                  User Name: ₹{item?.askingPrice}
                </div>
                <div className="font-[latto] text-base font-medium text-black">
                  Contact No: ₹{item?.askingPrice}
                </div>
              </div>
              <div className="flex gap-10 align-middle items-center">
                <Link to={`/carlist/cardetails/${item?.carId}`}>
                  <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>
                      Do you really want to Revert the Car?
                    </DialogHeader>
                    <DialogFooter>
                      <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                      >
                        <span>Cancel</span>
                      </Button>
                      <Button
                        variant="gradient"
                        color="green"
                        onClick={handleOpen}
                      >
                        <span>Confirm</span>
                      </Button>
                    </DialogFooter>
                  </Dialog>
                  <Button
                    fullWidth
                    className="flex items-center text-xs mt-1 bg-blue-400 w-full"
                  >
                    Car details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </Link>

                <Button
                  className="flex items-center text-xs gap-2 mt-1 bg-red-700"
                  onClick={handleOpen}
                >
                  Revert Deal
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </CardUi>
      </div>
    );
  });
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if (error) {
    return <p>No Data Available</p>;
  }
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-2 md:auto-cols-auto md:auto-rows-auto">
        {renderData}
      </div>

      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="medium" color="blue-gray" className="font-normal">
          Page {pageNo + 1}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            disabled={pageNo <= 0}
            onClick={() => setPageNo((a) => a - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={nextHandler}
            disabled={data?.list?.length < 10}
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </>
  );
};

export default OrderDealer;
