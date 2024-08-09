/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useAllDealerFinalBidQuery, useLazyBiddingCarByIdQuery } from "../../services/biddingAPI";

import TableComponent from "../../components/table/TableComponent";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useLazyGetDealerByUserIdQuery } from "../../services/dealerAPI";

const WinnerSection = () => {
  const { id } = useParams();

  const token = Cookies.get("token");
  let jwtDecodes;
  if (token) {
    jwtDecodes = jwtDecode(token);
  }

  const UserID = jwtDecodes?.userId;
  const dealerId = jwtDecodes?.dealerId;


  const { data: didData } = useAllDealerFinalBidQuery(UserID);
  let [trigger] = useLazyBiddingCarByIdQuery();
  let [triggerGetDealer] = useLazyGetDealerByUserIdQuery();
  const [liveCarsWinData, setLiveCarsWinData] = useState([]);

  useEffect(() => {
    const fetchServiceProducts = async () => {

      if (didData) {
        const liveCarsData = [];

        for (let i = 0; i < didData.finalBids.length; i++) {
          const carId = didData.finalBids[i]?.beadingCarId;
          const id = didData.finalBids[i]?.sellerDealerId;
          console.log("check my data", id)
          if (carId) {

            // Fetch car data
            const { data: carData, error: carError, isLoading: carIsLoading } = await trigger(carId);
            if (carError) {
              console.error("Error fetching car data:", carError);
              continue;  // Skip this iteration if there's an error
            }

            // Fetch dealer data
            const { data: dealerName, error: dealerError } = await triggerGetDealer(id);
            console.log("check my data", dealerName)

            if (dealerError) {
              console.error("Error fetching dealer data:", dealerError);
              continue;  // Skip this iteration if there's an error
            }

            // Merge data into a single object
            const combinedData = {
              ...carData,
              ...dealerName,
              ...didData.finalBids[i]
            };

            // Push the combined data object to the liveCarsWinData array
            liveCarsData.push(combinedData);
          }
        }

        setLiveCarsWinData(liveCarsData);
      }

    };

    fetchServiceProducts();
  }, [didData, trigger, triggerGetDealer]);

  if (liveCarsWinData?.length === 0) {
    return (
      <div>
        <p>No Data Available</p>
      </div>
    );
  }

  console.log("Live Cars Win Data:", liveCarsWinData);


  const columns = [
    {
      Header: "Sr.No",
      accessaor: "bidCarId"
    },
    {
      Header: "Brand",
      accessaor: "brand"
    },
    {
      Header : "Model",
      accessaor : "model"
    },
    {
     Header : "price",
     accessaor : "price"
    },
    {
      Header : "Dealer Name",
      accessaor : "firstName"
    },
    {
      Header : "Action",
      accessaor : "firstName"
    }


  ]


  return (
    <>

      <div className="flex w-full justify-center mb-10 mt-5">
        <p className="text-3xl font-semibold">Winner Section</p>
      </div>
      <div>
        {liveCarsWinData && (
          <TableComponent columns={columns} data={liveCarsWinData} />

        )}
      </div>
    </>
  );
};

export default WinnerSection;

