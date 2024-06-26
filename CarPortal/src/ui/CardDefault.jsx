/* eslint-disable react/prop-types */
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { CarouselCustomArrows } from "./CarouselCustomArrows";
import { Link } from "react-router-dom";

export function CardDefault({ data }) {
  console.log(data);
const carid = data?.carId
console.log(carid)
  return (

    <Card className="mt-6 w-96 md:m-0 m-3 items-center border-2 md:hover:scale-105 border-gray-300 shadow-xl">

      <div className="w-[18rem] h-[16rem] ">
        <CarouselCustomArrows  carId={carid} />
      </div>
      <CardBody className="mb-5">
        <Typography>{data.year}</Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
           {data.brand} {data.model} 
        </Typography>
        <Typography variant="h7" color="blue-gray" className="mb-2">
            {data.title}
        </Typography>
        <p className="text-sm uppercase mb-3">
          <span className="bg-gray-200 p-[5px] rounded-sm mr-2 text-black">{data.kmDriven}KM</span>
          <span className="bg-gray-200 p-[5px] rounded-sm mr-2 text-black">{data.fuelType}</span>
          <span className="bg-gray-200 p-[5px] rounded-sm mr-2 text-black">{data.transmission}</span>
          
        </p>
        <Typography variant="h6" className="font-bold text-black text-xl">₹ {data.price}</Typography>

     <Link to={`/carlist/cardetails/${data.carId}`}>   <button className="mt-2 mb-4 p-[7px] bg-indigo-500 rounded-lg text-white ">View Car</button></Link>
        <hr />
        <p className="text-sm">Free Test Drive Today at {data.area}</p>
      </CardBody>
    </Card>
  );
}
