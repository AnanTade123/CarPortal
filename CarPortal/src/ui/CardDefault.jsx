/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { CarouselCustomArrows } from "./CarouselCustomArrows";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFavoriteCarMutation, useCarFavoriteAddRemoveQuery } from "../services/carAPI";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

function RatedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="h-6 w-6">
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  );
}

function UnratedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

export function CardDefault({ data, Carid }) {
  const [favoriteCar] = useFavoriteCarMutation();
  const token = Cookies.get("token");
  let jwtDecodes;

  if (token) {
    jwtDecodes = jwtDecode(token);
  }

  const UserId = jwtDecodes.userId;
  
  // useEffect(() => {
  //   if (favData && favData.saveCarId) {
  //     setRated(true);
  //   }
  // }, [favData]);
  
  const [rated, setRated] = useState();
  const data2 = {
    carId: Carid,
    userId: UserId,
  };
  const handleFavoriteClick = async () => {
    try {
        const res = await favoriteCar(data2);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
      setRated(!rated);
  };
  const carid = data2.carId
  const useid = data2.userId
console.log(carid,useid)

  const { data: favData } = useCarFavoriteAddRemoveQuery({ carid, useid });

  console.log(favData)
    console.log(favData?.object)

 useEffect(() => {
    if (favData?.object.saveCarId) {
      setRated(true);
    }
    else{
      setRated(false);
    }
  }, [favData]);
  return (
    <div className="flex justify-center mx-auto">
      <Card className="w-full flex justify-center sm:w-80 md:w-[260px] lg:w-full items-center border-2 hover:scale-105 border-gray-300 shadow-xl overflow-hidden mx-5 md:mx-0">
        <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
          <Link to={`/carlist/cardetails/:carid`}>
            <CarouselCustomArrows carId={data.carId} />
          </Link>
        </CardHeader>
        <CardBody className="mb-5">
          <div className="flex justify-end">
            <div onClick={handleFavoriteClick} className="cursor-pointer">
              <div className='-mb-6'>
                {rated ? <RatedIcon /> : <UnratedIcon />}
              </div>
            </div>
          </div>
          <Typography>{data.year}</Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {data.brand} {data.model}
          </Typography>
          <Typography variant="h7" color="blue-gray" className="mb-2">
            {data.title}
          </Typography>
          <p className="text-sm uppercase mb-3 flex flex-wrap gap-2">
            <span className="bg-gray-200 p-[5px] rounded-sm mr-2 text-black">
              {data.kmDriven}KM
            </span>
            <span className="bg-gray-200 p-[5px] rounded-sm mr-2 text-black">
              {data.fuelType}
            </span>
            <span className="bg-gray-200 p-[5px] rounded-sm mr-2 text-black">
              {data.transmission}
            </span>
          </p>
          <Typography variant="h6" className="font-bold text-black text-xl">
            ₹ {data.price}
          </Typography>
          <Link to={`/carlist/cardetails/${data.carId}`}>
            <button className="mt-2 mb-4 p-[7px] bg-indigo-500 rounded-lg text-white">
              View Car
            </button>
          </Link>
          <hr />
          <p className="text-sm">Free Test Drive Today at {data.area}</p>
        </CardBody>
      </Card>
    </div>
  );
}
