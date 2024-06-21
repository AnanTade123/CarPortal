/* eslint-disable no-unsafe-optional-chaining */
import CarView from "../components/carDetails/CarView";
import PriceCard from "../components/carDetails/PriceCard";
import { useParams } from "react-router-dom";
import { useGetCarByIdQuery } from "../services/carAPI";
import { toast, ToastContainer } from 'react-toastify';
import { useBookingRequestMutation } from "../services/carAPI";



// import { redirectToSignIn } from "../services/apiSlice";
import { useNavigate } from "react-router-dom";

const CarDetailsById = () => {
  const navigate = useNavigate();
  const { carId } = useParams();

  const { data, isLoading, error } = useGetCarByIdQuery(carId);
  console.log(data)
const [bookingRequest] = useBookingRequestMutation();

  if (isLoading) {
    return <p>Loading...</p>;
  }
 
  if (error?.status === 401) {

    navigate("/signin");
    return null
  }

  const handleBuyCar = async (formData) => {
    try{

      const res = await bookingRequest(formData);
      console.log(res);
      if (res?.data) {
        toast.success('Request sent successfully!');
      } else if (res.error) {
        toast.error(res.error.data.message);
      }
    }catch(error){
      toast.error(error);
    }

  }

  const {
    price,
    brand,
    fuelType,
    kmDriven,
    ownerSerial,
    year,
    model,
    registration,
    area,
    transmission,
    carInsurance,
    city,
    color,
    bodyType,
    dealer_id,

  } = data?.object;
 
  return (
    <>
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 gap-2 container mx-auto">
      <div className="p-4 md:col-span-2 max-h-screen overflow-scroll no-scrollbar ">
       <ToastContainer position="top-right" autoClose={1000} />

        <CarView
          fuelType={fuelType}
          registration={registration}
          ownerSerial={ownerSerial}
          transmission={transmission}
          year={year}
          carInsurance={carInsurance}
          kmDriven={kmDriven}
          carId = {carId}
        />
      </div>
      <div className="p-4 sticky top-0">
        <PriceCard
          price={price}
          brand={brand}
          fuelType={fuelType}
          kmDriven={kmDriven}
          ownerSerial={ownerSerial}
          year={year}
          model={model}
          registration={registration}
          area={area}
          city={city}
          color={color}
          bodyType={bodyType}
          dealer_id = {dealer_id}
          carId = {carId}
          handleBuyCar={handleBuyCar}
        />
      </div>
    </div>
    </>
  );
};

export default CarDetailsById;
