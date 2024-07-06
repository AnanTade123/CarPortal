
// import CarView from "../../components/carDetails/CarView";
// import PriceCard from "../../components/carDetails/PriceCard";
import { useParams } from "react-router-dom";
import { useGetbeadingCarImageQuery,useGetbeadingCarByIdQuery } from "../../services/biddingAPI";
// import { redirectToSignIn } from "../services/apiSlice";
import { useNavigate } from "react-router-dom";
import BiddingCarView from "./BiddingCarView";
import BiddingPriceCard from "./BiddingPriceCard";

export default function BiddingCarDetailsById1() {

    const navigate = useNavigate();
    const { beadingCarId } = useParams();
    console.log(beadingCarId)
  
    const { data,error } = useGetbeadingCarImageQuery(beadingCarId);
    console.log(data)

    const {data:data1} = useGetbeadingCarByIdQuery(beadingCarId);
    console.log(data1);
  
    // if (isLoading) {
    //   return <p>Loading...</p>;
    // }
    
  //  console.log(carId);
    
    if (error?.status === 401) {
      console.log("navigate");
  
      navigate("/signin");
      return null
    }
  
    
      
   

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-3 gap-4 container mx-auto ">
    <div className="p-4 md:col-span-2 max-h-screen overflow-scroll no-scrollbar ">
      <BiddingCarView
      data={data}
      beadingCarId={beadingCarId}
        // fuelType={fuelType}
        // registration={registration}
        // ownerSerial={ownerSerial}
        // transmission={transmission}
        // year={year}
        // carInsurance={carInsurance}
        // kmDriven={kmDriven}
      />
    </div>
    <div className="p-4 sticky top-0">
      <BiddingPriceCard
      beadingCarId={beadingCarId}
        // price={price}
        // brand={brand}
        // fuelType={fuelType}
        // kmDriven={kmDriven}
        // ownerSerial={ownerSerial}
        // year={year}
        // model={model}
        // registration={registration}
        // area={area}
        // city={city}
        // color={color}
        // bodyType={bodyType}
        // dealer_id = {dealer_id}
        // carId = {carId}
      />
    </div>
  </div>
  )
}
