/* eslint-disable react/prop-types */
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { CarouselCustomArrows } from "./CarouselCustomArrows";
import { Link } from "react-router-dom";

import HeartToggle from "./HeartToggle";




export function CardDefault({ data }) {
  console.log(data);
const carid = data?.carId
console.log(carid)
  return (

    <div className="flex justify-center mx-auto">
    <Card className="w-full flex justify-center sm:w-80 md:w-[260px] lg:w-full items-center border-2 hover:scale-105 border-gray-300 shadow-xl overflow-hidden mx-5 md:mx-0">
      {/* <Link to={`/carlist/cardetails/${data.carId}`}> */}
       <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        
         <Link to={`/carlist/cardetails/${carid}`}>
        {/* <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        /> */}
         <CarouselCustomArrows  carId={carid} />
        </Link>

      </CardHeader>
      {/* <div className="w-[18rem] h-[16rem] ">
        <Link to={`/carlist/cardetails/${carid}`}>
          <CarouselCustomArrows  carId={carid} />
        </Link>
      </div> */}
      <CardBody className="mb-5">
        <div className="flex justify-end">
      <HeartToggle />
      </div>
        <Typography>{data.year}</Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
           {data.brand} {data.model} 
        </Typography>
        <Typography variant="h7" color="blue-gray" className="mb-2">
            {data.title}
        </Typography>
        <p className="text-sm uppercase mb-3 flex flex-wrap gap-2">
          <span className="bg-gray-200 p-[5px] rounded-sm mr-2 text-black">{data.kmDriven}KM</span>
          <span className="bg-gray-200 p-[5px] rounded-sm mr-2 text-black">{data.fuelType}</span>
          <span className="bg-gray-200 p-[5px] rounded-sm mr-2 text-black">{data.transmission}</span>
          
        </p>
        <Typography variant="h6" className="font-bold text-black text-xl">₹ {data.price}</Typography>

     <Link to={`/carlist/cardetails/${data.carId}`}>   <button className="mt-2 mb-4 p-[7px] bg-indigo-500 rounded-lg text-white ">View Car</button></Link>
        <hr />
        <p className="text-sm">Free Test Drive Today at {data.area}</p>
      </CardBody>
      {/* </Link> */}
    </Card>
    </div>
    
  );
}
