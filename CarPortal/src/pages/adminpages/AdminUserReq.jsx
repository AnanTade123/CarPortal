/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,

} from "@material-tailwind/react";
import {

  useGetallInspectorQuery,
} from "../../services/inspectorapi";
import {

  useGetUserRequestDataQuery

} from "../../services/userAPI"
import TableComponent from "../../components/table/TableComponent";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiLoader } from 'react-icons/fi';

export default function AdminUserReq() {
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(0);
  const [size, setPSize] = useState(10);
  const { data:userdata } = useGetUserRequestDataQuery({ page, size });
  const { data, isLoading, error } = useGetallInspectorQuery({ pageNo, pageSize });
  const emptyImage = "..\\..\\cars\\emptyfolder.png";
   
console.log(data)
console.log("req" ,userdata)
  const [open, setOpen] = useState(false);
  const [deleteid, setDeleteid] = useState();

  // const handleOpen = (id) => {
  //   setOpen(!open);
  //   setDeleteid(id);
  // };

  // const handleOpen1 = (id) => {
  //   deleteDealerHandler(deleteid);
  //   setOpen(!open);
  // };

  const navigate = useNavigate();
  if (error?.status === 401) {
    return navigate("/signin");
  }

  // const deleteDealerHandler = async (id) => {
  //   const res = await deleteDealer(id);
  // };
  const nextHandler = () => {
    setPage((prevPage) => {
      // Check if the error status is 404
      if (error?.status === 404) {
        // console.log(prevPageNo);
        // Display message or perform any action indicating that it's the last page
        return prevPage; // Keep pageNo unchanged
      } else {
        // Increment pageNo
        return prevPage + 1;
      }
    });
  };

  const columns = [
    {
      Header: "Sr. No",
      accessor: "serialNumber",
      Cell: (cell) => {
        const { pageSize } = cell.state; // Assuming you're using React Table's useTable hook
        const serialNumber = page * size + cell.row.index + 1;
        return serialNumber;
      },
    },
    // {
    //   Header: "ID",
    //   // accessor: "userFormId",
      
    // },
    {
      Header: "CarOwnerName",
       accessor: "carOwnerName"
    // Cell: () => <span>Pranav</span>,
    },

    {
      Header: "Address ",
    //   accessor: "lastName",
     accessor: "address1",
      // Cell: (cell) => (
      //   <span>{`${cell.row.original.address1}, ${cell.row.original.address2}`}</span>
      // ),
    
    },
    {
      Header: "Brand",
       accessor: "brand",
    // Cell: () => <span>Pune </span>
    },
    {
      Header: "Variant",
       accessor: "variant",
      // Cell: () => <span>0</span>
    },
    {
        Header: "SubVariant",
         accessor: "model",
        // Cell: () => <span>0</span>
      },
      {
        Header: "RC Available",
         accessor: "rc",
        // Cell: () => <span>0</span>
      },
      {
        Header: "Status",
         accessor: "status",
        // Cell: () => <span>0</span>
      },
      {
        Header: "Contact No",
         accessor: "mobileNo",
        // Cell: () => <span>0</span>
      },
      {
        Header: "Pincode",
         accessor: "pinCode",
        // Cell: () => <span>0</span>
      },
      {
        Header: "Select Inspector",
        Cell: () => (
          <select>
              <option value="" disabled selected>Select Inspector</option>
            {data.list.map((inspector) => (
              <option 
                key={inspector.inspectorProfileId} 
                value={inspector.inspectorProfileId}
              >
                {`${inspector.firstName} ${inspector.lastName}`}
              </option>
            ))}
          </select>
        ),
      },
   
    
    
   
   
  ];

  let dealerApiData;
  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center p-8">
        <FiLoader className="animate-spin text-blue-gray-800 h-16 w-16" />
      </div>
    );
  } else {
    dealerApiData = userdata?.list;
  }

  return (
    <>
      {error?.status === 404 ? (
        <div>
          <div className="flex shrink-0 gap-2 sm:flex-row justify-end mr-5 mt-5">
            <></>
          
          </div>
          <div className="flex justify-center mt-10">
           <img
          className="w-40"
          src={emptyImage}
          alt="no data"
        />
         </div>
          <p className="flex justify-center text-2xl md:text-3xl font-semibold">No Data Available</p>
         
          
        </div>
      ) : (
        <div>
          <Card className="h-full w-full">
            
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="text-center lg:text-start"
                  >
                    User Request List
                  </Typography>
                  <Typography
                    color="gray"
                    className="mt-1 font-normal text-center lg:text-start"
                  >
                    See Information About All User Request 
                  </Typography>
                  <span className="mt-1 hidden xl:block">
                <div className="flex">
                <Link to={"/"}>
              <p className="hover:text-blue-900"> Home</p> 
              </Link>
              /

              <p>User Request</p>
              </div>
              </span>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row items-center">
                   
                </div>
              </div>
            </CardHeader>
            <CardBody className="md:overflow-auto overflow-scroll px-1">
              <TableComponent columns={columns} data={dealerApiData} />
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
              <Typography
                variant="medium"
                color="blue-gray"
                className="font-normal"
              >
                Page {pageNo + 1}
              </Typography>
              <div className="flex gap-2">
                <Button
                  variant="outlined"
                  size="sm"
                  disabled={pageNo <= 0}
                  onClick={() => setPageNo((a) => a - 1)}
                >
                  Previous
                </Button>
                <Button
                  variant="outlined"
                  size="sm"
                  onClick={nextHandler}
                  disabled={data?.list?.length < 10}
                >
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
           
     
    </>
  );
}
{
  /* <AddDealerForm /> */
}
