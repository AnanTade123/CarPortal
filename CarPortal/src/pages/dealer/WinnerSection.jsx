/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import {  useAllDealerFinalBidQuery,useBiddingCarByIdQuery} from "../../services/biddingAPI";
 
//import TableComponent from "../../components/table/TableComponent";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import WInnerSubCompoment from "./WInnerSubCompoment";

const WinnerSection = () => {
  const { id } = useParams();
 
  const token = Cookies.get("token");
  let jwtDecodes;
  if (token) {
    jwtDecodes = jwtDecode(token);
  }
 
  const UserID = jwtDecodes?.userId;
  const dealerId = jwtDecodes?.dealerId;
 
 console.log(UserID,dealerId)
 

  const {data:didData} = useAllDealerFinalBidQuery(UserID)
  console.log(didData)
 
  const [carIds, setCarIds] = useState([]);
  

  useEffect(() => {
    if (didData?.finalBids) {
      const carIdList = didData.finalBids.map(car => car?.beadingCarId);
      setCarIds(carIdList);
    }
  }, [didData]);

  if (carIds.length===0) {
    return <div>
      <p>No Data Available</p>
    </div>
  }

  // const columns = [
  //   {
  //     Header : "",
  //     accessaor : ""
  //   }
  // ]
  return (
    <>
  
   <div className="flex w-full justify-center mb-10 mt-5">
    <p className="text-3xl font-semibold">Winner Section</p>
   </div>
  <div className="flex flex-wrap gap-5 justify-center">
      {didData?.finalBids.map((carId, index) => (
        <WInnerSubCompoment key={index} carId={carId} />
      ))}
    </div>

{/* <div>
  <TableComponent columns={columns} data={didData} />
</div> */}
    </>
  );
};
 
export default WinnerSection;
 
 