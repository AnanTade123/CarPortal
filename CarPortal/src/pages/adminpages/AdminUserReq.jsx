/* eslint-disable no-unused-vars */
import { toast } from 'react-toastify';

import { useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
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
  useGetallInspectorQuery,useInspectorByIdQuery
} from "../../services/inspectorapi";
import {
  useGetUserRequestDataQuery,
  useUserSaleReqFormEditMutation,
} from "../../services/userAPI";
import TableComponent from "../../components/table/TableComponent";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiLoader } from "react-icons/fi";

export default function AdminUserReq() {
  const [pageNo, setPageNo] = useState(0);
  const [userFormId , SetuserFormId] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [selectedInspectors, setSelectedInspectors] = useState({});
  const { data: userdata, isLoading: isUserDataLoading, error: userError } = useGetUserRequestDataQuery({ page: pageNo, size: pageSize });
  console.log(userdata)
  const { data: inspectorData, isLoading: isInspectorDataLoading, error: inspectorError } = useGetallInspectorQuery({ pageNo, pageSize });
  const [ userReqEdit ] = useUserSaleReqFormEditMutation();
  const emptyImage = "..\\..\\cars\\emptyfolder.png";
  const { userid, inspectorprofileid } = useParams();
  const { data:Inspectordata, isLoading, isError, error } = useInspectorByIdQuery({ userid });
  console.log("insp" , Inspectordata)

  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  if (userError?.status === 401) {
    return navigate("/signin");
  }

  const handleInspectorChange = (e, userFormId) => {
    const inspectorId = e.target.value;
    setSelectedInspectors((prevState) => ({
      ...prevState,
      [userFormId]: inspectorId,
    }));
  };
  

  // const submitHandler = () => {
  //   Object.keys(selectedInspectors).forEach((userFormId) => {
  //     const inspectorId = selectedInspectors[userFormId];
  //     userReqEdit({
  //       userFormId,
  //       inspectorId,
  //     });
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
    
  //   const updatedData = {
  //     inspectorId: selectedInspectors[userFormId],
  //   };
  
  //   try {
  //     const res = await userReqEdit({ updatedData, userFormId });
  //     alert("Form updated successfully!");
  //   } catch (err) {
  //     console.error("Failed to update the form:", err);
  //     alert("Error updating the form.");
  //   }
  // };
  
  const nextHandler = () => {
    if (userdata?.list?.length >= pageSize) {
      setPageNo((prevPage) => prevPage + 1);
    }
  };

  const prevHandler = () => {
    if (pageNo > 0) {
      setPageNo((prevPage) => prevPage - 1);
    }
  };

  const columns = [
    {
      Header: "Sr. No",
      accessor: "serialNumber",
      Cell: (cell) => {
        const serialNumber = pageNo * pageSize + cell.row.index + 1;
        return serialNumber;
      },
    },
    {
      accessor: "userFormId", // Hidden column (no Header or Cell)
      Header: "", // Empty Header
      Cell: () => null, // Hide the cell content
    },
    {
      Header: "CarOwnerName",
      accessor: "carOwnerName",
    },
    {
      Header: "Address",
      accessor: "address1",
    },
    {
      Header: "Brand",
      accessor: "brand",
    },
    {
      Header: "Variant",
      accessor: "model",
    },
    // {
    //   Header: "SubVariant",
    //   accessor: "varian",
    // },
    // {
    //   Header: "RC Available",
    //   accessor: "rc",
    // },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Contact No",
      accessor: "mobileNo",
    },
    {
      Header: "Pincode",
      accessor: "pinCode",
    },
    {
      Header: "Select Inspector",
      Cell: (cell) => {
        const { row } = cell;
        const userFormId = row.original.userFormId;
    
        // Combine handle change and submit logic
        const handleInspectorChangeAndSubmit = async (e, userFormId) => {
          const inspectorId = e.target.value;
    
          // Update selected inspector in state
          setSelectedInspectors((prevState) => ({
            ...prevState,
            [userFormId]: inspectorId,
          }));
    
          // Prepare updated data to submit
          const updatedData = {
            inspectorId: inspectorId,
          };
    
          // Call submit function after the selection
          try {
            const rse = await userReqEdit({ updatedData, userFormId });
            console.log(rse)
            alert("Form updated successfully!");
          } catch (err) {
            console.error("Failed to update the form:", err);
            alert("Error updating the form.");
          }
        };
    
        return (
          <select
            value={selectedInspectors[userFormId] || ""}
            onChange={(e) => handleInspectorChangeAndSubmit(e, userFormId)}
          >
            <option value="" disabled>Select Inspector</option>
            {inspectorData?.list.map((inspector) => (
              <option key={inspector.inspectorProfileId} value={inspector.inspectorProfileId}>
                {`${inspector.firstName} ${inspector.lastName}`}
              </option>
            ))}
          </select>
        );
      },
    },
    
    {
      Header: "Actions",
      accessor: "Actions",
      Cell: (cell) => {
        return (
          <div className="flex gap-2 justify-center items-center">
            <Link to={`/Seller/UserRequest/Edit/${cell.row.values.userFormId}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                color="green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </Link>
          </div>
        );
      },
    },
  ];

  if (isUserDataLoading || isInspectorDataLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center p-8">
        <FiLoader className="animate-spin text-blue-gray-800 h-16 w-16" />
      </div>
    );
  }

  if (userError?.status === 404) {
    return (
      <div className="flex flex-col justify-center items-center mt-10">
        <img className="w-40" src={emptyImage} alt="No data" />
        <p className="text-2xl md:text-3xl font-semibold">No Data Available</p>
      </div>
    );
  }

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <Typography variant="h5" color="blue-gray" className="text-center lg:text-start">
              User Request List
            </Typography>
            <Typography color="gray" className="mt-1 font-normal text-center lg:text-start">
              See Information About All User Requests
            </Typography>
            <span className="mt-1 hidden xl:block">
              <div className="flex">
                <Link to="/"> <p className="hover:text-blue-900"> Home </p> </Link> / <p> User Request </p>
              </div>
            </span>
          </div>
        </div>
      </CardHeader>
      <CardBody className="md:overflow-auto overflow-scroll px-1">
        <TableComponent columns={columns} data={userdata?.list || []} />
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="medium" color="blue-gray" className="font-normal">
          Page {pageNo + 1}
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm" onClick={prevHandler} disabled={pageNo <= 0}>
            Previous
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={nextHandler}
            disabled={userdata?.list?.length < pageSize}
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
