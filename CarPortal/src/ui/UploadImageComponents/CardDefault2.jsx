/* eslint-disable react/prop-types */
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { CarouselCustomArrows } from "../CarouselCustomArrows";
import { Link } from "react-router-dom";

export function CardDefault2({ data }) {
  console.log(data);
  const carid = data?.carId;
  console.log(carid);
  return (
    <Card className="mt-6 w-80 md:m-0 items-center max-w-[20rem] overflow-hidden">
      <div className="w-[18rem] h-[16rem] ">
      <Link to={`/carlist/cardetails/${carid}`}>
        <CarouselCustomArrows carId={carid} />
        </Link>
      </div>
      <CardBody className="mb-5">
        <Typography>{data.year}</Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {data.brand} {data.model}
        </Typography>
        <p className="text-sm uppercase">
          {data.kmDriven} {data.fuelType} {data.transmission}
        </p>
        <Typography variant="h6">₹ {data.price}</Typography>

        <Link to={`/carlist/cardetails/${data.carId}`}>
          {" "}
          <Button className="mt-2 mb-4">View Car</Button>
        </Link>
        <hr />
        <p className="text-sm">Free Test Drive Today at {data.area}</p>
      </CardBody>
    </Card>
  );
}
