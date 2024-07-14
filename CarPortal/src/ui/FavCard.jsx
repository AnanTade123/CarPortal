import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { CarouselCustomArrows } from "./CarouselCustomArrows";
import { Link } from "react-router-dom";


function FavCard(CarsData) {
  
  return (
    <div className="flex flex-wrap justify-center mx-auto lg:gap-5">
      <Card className="w-full flex justify-center sm:w-80 md:w-[260px] lg:w-fit items-center border-2 hover:scale-105 border-gray-300 shadow-xl overflow-hidden mx-5 md:mx-0">
        <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
          <Link to={`/carlist/cardetails/${CarsData.carId}`}>
            <CarouselCustomArrows carId={CarsData.carId} />
          </Link>
        </CardHeader>
        <CardBody className="mb-5">
          <Typography>{CarsData.year}</Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {CarsData.brand} {CarsData.model}
          </Typography>
          <Typography variant="h7" color="blue-gray" className="mb-2">
            {CarsData.title}
          </Typography>
          <p className="text-sm uppercase mb-3 flex flex-wrap gap-2">
            <span className="bg-gray-200 p-[5px] rounded-sm mr-2 text-black">
              {CarsData.kmDriven} KM
            </span>
            <span className="bg-gray-200 p-[5px] rounded-sm mr-2 text-black">
              {CarsData.fuelType}
            </span>
            <span className="bg-gray-200 p-[5px] rounded-sm mr-2 text-black">
              {CarsData.transmission}
            </span>
          </p>
          <Typography variant="h6" className="font-bold text-black text-xl">
            ₹ {CarsData.price}
          </Typography>
          <Link to={`/carlist/cardetails/${CarsData.carId}`}>
            <button className="mt-2 mb-4 p-[7px] bg-indigo-500 rounded-lg text-white">
              View Car
            </button>
          </Link>
          <hr />
          <p className="text-sm">Free Test Drive Today at {CarsData.area}</p>
        </CardBody>
      </Card> 
    </div>
  )
}

export default FavCard;