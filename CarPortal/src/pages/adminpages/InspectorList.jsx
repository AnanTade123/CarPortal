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
  useGetallInspectorQuery
} from "../../services/inspectorapi";
import TableComponent from "../../components/table/TableComponent";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AddInspectorForm } from "../AddInspectorForm";
 
export default function InspectorList() {
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(7);
  const { data, isLoading, error } = useGetallInspectorQuery({ pageNo, pageSize });
  console.log(data)
  const navigate = useNavigate();
  if (error?.status === 401) {
    return navigate("/signin");
  }
 
  const nextHandler = () => {
    if (!error) {
      setPageNo((prevPageNo) => prevPageNo + 1);
    }
  };
 
  const prevHandler = () => {
    if (pageNo > 0) {
      setPageNo((prevPageNo) => prevPageNo - 1);
    }
  };
 
  const columns = [
    {
      Header: "Serial No",
      accessor: "inspectorProfileId",
    },
    {
      Header: "UserID",
      accessor: "userId",
    },
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name ",
      accessor: "lastName",
    },
    {
      Header: "Address",
      accessor: "address",
    },
    {
      Header: "Phone",
      accessor: "mobileNo",
    },
    {
      Header: "City",
      accessor: "city",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Actions",
      accessor: "Actions",
      Cell: (cell) => {
        console.log(cell.row.values.userId)
        return (
          <div>
            <div className="flex gap-2 justify-center items-center">
              <Link to={`/admin/inspector/info/${cell.row.values.userId}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  color="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </Link>
 
 
              <Link to={`/admin/inspector/edit/${cell.row.values.userId}/${cell.row.values.inspectorProfileId}`}>
             
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
          </div>
        );
      },
    },
  ];
 
  let dealerApiData;
  if (isLoading) {
    return <p>isLoading</p>;
  } else {
    dealerApiData = data?.list;
  }
 
  return (
    <>
 
    {error?.status===404 ? (
        <div>
          <p className="text-3xl font-semibold">No Data Available</p>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <AddInspectorForm />
          </div>
        </div>
      ) : (
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Inspectors List
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  See information about all members
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <AddInspectorForm />
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll px-0">
            <TableComponent columns={columns} data={dealerApiData} />
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography variant="medium" color="blue-gray" className="font-normal">
              Page {pageNo + 1}
            </Typography>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm" disabled={pageNo <= 0} onClick={prevHandler}>
                Previous
              </Button>
              <Button variant="outlined" size="sm" onClick={nextHandler} disabled={data?.list?.length < pageSize}>
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
 
 