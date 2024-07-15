/* eslint-disable no-undef */
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import {  useBiddingAllCardQuery } from "../../services/biddingAPI";
 
import TableComponent from "../../components/table/TableComponent";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { MdPendingActions } from "react-icons/md";
// import StatusDialogeBox from "../../ui/StatusDialogeBox";
// import BiddingDailogeBox from "../../ui/BiddingDialogeBox";
// import PlaceBid from "./PlaceBid";
// import PlaceBid from "../dealer/PlaceBid";
// import BiddingSetTime from "../../ui/BiddingSetTime";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import {  useEffect, useState } from "react";

const BiddingDealerCars = () => {
  const { id } = useParams();
  const navigate = useNavigate();
 
  const token = Cookies.get("token");
  let jwtDecodes;
  if (token) {
    jwtDecodes = jwtDecode(token);
  }
 
  const UserID = jwtDecodes?.userId;
  const dealerId = jwtDecodes?.dealerId;
  const userRole =  token ?  jwtDecodes?.authorities[0] :null;
  const [pageNo, setPageNo] = useState(0);
  console.log("UserId------",UserID,dealerId,id);
  // const { data, isLoading, error } = useBiddingCarByDealerIdQuery(UserID);
  // const { data, isLoading, error } = useGetByDealerIdQuery(dealerId);
  const {data , isLoading, error } = useBiddingAllCardQuery();
  const [totalCars,setTotalCars] = useState(data?.length || "-");
  const activeCarCount = data?.filter(car => car.carStatus === "ACTIVE").length;
  const pendingCarCount =  data?.filter(car => car.carStatus === "pending").length;
  const soldCarCount =  data?.filter(car => car.carStatus === "sold").length;
  
  const [activeCars,setActiveCars ] = useState(activeCarCount || "-");
  const [pendingCars ,setPendingCars ] = useState(pendingCarCount || "-");
  const [soldCars , setSoldCars] = useState(soldCarCount || "-");
  console.log("activeCarCount",error);

  const itemsPerPage = 10;
  useEffect(() => {
    if (data) {
      setTotalCars(data?.length);
      setActiveCars(data?.filter((car) => car.carStatus === "ACTIVE").length);
      setPendingCars(data?.filter((car) => car.carStatus === "pending").length);
      setSoldCars(data?.filter((car) => car.carStatus === "sold").length);
      
    }
  }, [data]);
  if (isLoading) {
    return <p>Loading..</p>;
  }
  if(error?.status){
    navigate("/signin");
  }
  // const userId = data[0].userId; // Access userId from the first object
  // console.log('User ID:', userId);
  const columns = [
    {
      Header: "ID",
      accessor: "beadingCarId",
    },
    {
      Header: "Brand",
      accessor: "brand",
    },
 
    {
      Header: "Model ",
      accessor: "model",
    },
    {
      Header: "Fuel Type",
      accessor: "fuelType",
    },
    {
      Header: "Year",
      accessor: "year",
    },
 
    {
      Header: "Price",
      accessor: "price",
      disableSortBy: true,
    },
 
    {
      Header: "Inspection Report",
      accessor: "carStatus",
      Cell: (cell) => {
        console.log(cell.row.values.carStatus);


        return userRole === "DEALER" ? (
          <Link to={`/dealer/finalreport/${cell.row.values.beadingCarId}`} className="button-link">
        <Button variant="gradient" color="blue">
            View Report
        </Button>
          </Link>
        ) :(
        cell.row.values.carStatus == "pending" ? (
          
          
        <Button variant="gradient" color="yellow">
            Pending
        </Button>
          
      ) : (
          
        <Button variant="gradient" color="green">
            Done
        </Button>
         
      ))
      },
    },
    // {
    //   Header: "Set Time",
    //   accessor: "",
    //   Cell: (cell) => {
    //     console.log(cell.row.values.carStatus);
    //     return (
    //       <div>
    //         <div className="flex gap-2 justify-center items-center  ">
    //           <BiddingSetTime
    //             userid={UserID}
    //             biddingcarid={cell.row.values.beadingCarId}
    //           />
    //         </div>
    //       </div>
    //     );
    //   },
    // },
 
    // {
    //   Header: "Start Bidiing",
    //   accessor: "",
    //   Cell: (cell) => {
    //     console.log(cell.row.values.beadingCarId);
    //     return (
    //       <div>
    //         <div className="flex gap-2 justify-center items-center  ">
    //           <BiddingDailogeBox
    //             userid={UserID}
    //             biddingcarid={cell.row.values.beadingCarId}
    //           />
    //         </div>
    //       </div>
    //     );
    //   },
    // },
 
    // {
    //   Header: "Place Bid",
    //   accessor: "",
    //   Cell: (cell) => {
    //     console.log(cell.row.values.carStatus);
    //     return (
    //       <div>
    //         <div className="flex gap-2 justify-center items-center  ">
    //           <PlaceBid userid={UserID} id={id} />
    //         </div>
    //       </div>
    //     );
    //   },
    // },
    {
      Header: "Action",
      accessor: "",
      Cell: (cell) => {
        return (
          <div>
            <div className="flex gap-2 justify-center items-center  ">
              <Link to={`/biddinglist/cardetails/${cell.row.values.beadingCarId}`}>
                    <Button  className="bg-[#045e4f]">{userRole === 'DEALER' ? 'Place Bidding' : 'Set Bidding'} </Button>
              </Link>
              {/* <PlaceBid userid={UserID} id={id} /> */}
            </div>
          </div>
        );
      },
    },
 
    // {
    //   Header: "Action",
    //   accessor: "Edit",
    //   // eslint-disable-next-line no-unused-vars
    //   Cell: (cell) => {
    //     console.log(cell.row.values.beadingCarId);
    //     return (
    //       <div>
    //         <div className="flex gap-2 justify-center items-center  ">
    //           <Link to={`/car/${cell.row.values.beadingCarId}/pendingreq`}>
    //             <div className="w- h-">
    //               <MdPendingActions color="#b09b12" className="h-6 w-6" />
    //             </div>
    //           </Link>
 
    //           <Link
    //             to={`/biddinglist/cardetails/${cell.row.values.beadingCarId}`}
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="w-6 h-6"
    //               color="blue"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    //               />
    //             </svg>
    //           </Link>
 
    //           <Link to={`/bidding/${cell.row.values.dealer_id}/editcar`}>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="w-6 h-6"
    //               color="green"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
    //               />
    //             </svg>
    //           </Link>
    //           <div
    //           // onClick={() => deleteDealerHandler(cell.row.values.dealer_id)}
    //           >
    //             {/* <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="w-6 h-6"
    //               color="red"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    //               />
    //             </svg> */}
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   },
    // },
  ];
  console.log(columns);
  let dealerApiData;
  if (isLoading) {
    return <p>isLoading</p>;
  } 
  else {
    dealerApiData = data ? data?.slice(Math.max(data.length - 10, 0)) : [];
    // dealerApiData = data;
  }

 
  

  console.log("dealerApiData------",dealerApiData);
  const startIndex = pageNo * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // eslint-disable-next-line no-unused-vars
  const paginatedData = data ? data.slice(startIndex, endIndex) : [];

 
  return (
    <>
     <h1 className="mt-2 text-xl ml-2 mb-5 font-bold">Bidding Car list</h1>
     <div className="flex flex-wrap justify-center divide-x-4 mx-5 mb-8">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-5 text-center bg-green-500 rounded-2xl shadow-xl mb-5 sm:mb-2 sm:mr-5">
          <div className="text-4xl font-bold text-white">{totalCars}</div>
          <div className="mt-2 font-medium">Total Cars</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-5 text-center bg-orange-500 rounded-2xl shadow-xl mb-5 sm:mb-2 sm:mr-5">
          <div className="text-4xl font-bold text-white">{activeCars}/{totalCars}</div>
          <div className="mt-2 font-medium">Active Cars</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-5 text-center bg-red-400 rounded-2xl shadow-xl mb-5 sm:mb-2 sm:mr-5">
          <div className="text-4xl font-bold text-white">{pendingCars}/{totalCars}</div>
          <div className="mt-2 font-medium">Pending Cars</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-5 text-center bg-blue-300 rounded-2xl shadow-xl mb-5 sm:mb-2 sm:mr-5">
          <div className="text-4xl font-bold text-white">{activeCars}/{totalCars}</div>
          <div className="mt-2 font-medium">Inspection Done Cars</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-5 text-center bg-green-500 rounded-2xl shadow-xl sm:mb-2 sm:mr-5">
          <div className="text-4xl font-bold text-white">{soldCars}/{totalCars}</div>
          <div className="mt-2 font-medium">Sell Cars</div>
        </div>
      </div>
 
      <div>
      {error?.status === 404 ? (
        <div>
          <p className="text-3xl font-semibold ">No Data Available</p>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {/* <Link to={`/bidding/${UserID}/addcar`}>
              <Button>Add Car</Button>
            </Link> */}
          </div>
        </div>
      ) : (
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className=" flex items-center justify-between gap-8">
              {/* <div>
                <Typography variant="h5" color="blue-gray">
                  Bidding Car list
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  See information about all cars
                </Typography>
              </div> */}
              {/* <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Link to={`/bidding/${UserID}/addcar`}>
                  <Button>Add Car</Button>
                </Link>
              </div> */}
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll px-0">
            <TableComponent columns={columns} data={paginatedData} />
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography
              variant="medium"
              color="blue-gray"
              className="font-normal"
            >
              {/* Page {pageNo + 1} */}
              Page {pageNo + 1}

            </Typography>
            <div className="flex gap-2">
              <Button
                variant="outlined"
                size="sm"
                // disabled={pageNo <= 0}
                // onClick={() => setPageNo((a) => a - 1)}
                disabled={pageNo <= 0}
                onClick={() => setPageNo((prev) => Math.max(prev - 1, 0))}
              >
                Previous
              </Button>
              <Button
                variant="outlined"
                size="sm"
                // onClick={nextHandler}
                // disabled={data?.list?.length < 10}
                onClick={() => setPageNo((prev) => (data?.length > endIndex ? prev + 1 : prev))}
                disabled={data?.length <= endIndex}
              >
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
      </div>
    </>
  );
};
 
export default BiddingDealerCars;
 
 