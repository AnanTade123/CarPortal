/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useGetAllDealerCompleteBookingQuery } from "../../services/dealerAPI";
import CardUi from "../../ui/CardUi";
import {
  Button,
  CardFooter,
  CardHeader,
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
      <div className="ml-8 mt-3 mb-3" key={index}>
        <CardUi>
          <div className="w-[35rem] px-5 py-3 flex gap-7">
            <div className="w-2/5">
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
              <Link to={`/carlist/cardetails/${item?.carId}`}>
                <Button className="flex items-center gap-2 mt-1 bg-blue-400">
                  Car details{" "}
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
              <Link to={`/carlist/cardetails/${item?.carId}`}>
                <Button className="flex items-center gap-2 mt-2 bg-red-700">
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
              </Link>
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
      <div className="grid grid-cols-2 auto-cols-auto auto-rows-auto">
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