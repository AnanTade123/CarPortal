/* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { motion } from "framer-motion"
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
  useGetUserRequestDataQuery,
} from "../../services/userAPI";
import TableComponent from "../../components/table/TableComponent";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useB2bstatuCheckQuery} from "../../services/salesAPI"
import B2bSellerDialogBox from './B2bSellerDialogBox';

export default function B2BSeller() {
    const [statuss, setStatuss] = useState("");
    const { status } = useParams();
    const [filteredData, setFilteredData] = useState([]);
    const [pageNo, setPageNo] = useState(0);
    const [pageSize, setPageSize] = useState(10);
  
    const { data } = useB2bstatuCheckQuery(statuss);
  
    const { data: userdata, isLoading: isUserDataLoading, error: userError } = useGetUserRequestDataQuery({
      page: pageNo,
      size: pageSize,
    });
  
    const navigate = useNavigate();
    useEffect(() => {
      if (userError?.status === 401) {
        navigate("/signin");
      }
    }, [userError, navigate]);
  
   
    useEffect(() => {
      if (data?.list) {
        let updatedData;
        if (status === "active") {
          updatedData = data?.list.filter((item) => item.requestStatus === "ACTIVE");
        } else if (status === "pending") {
          updatedData = data?.list.filter((item) => item.requestStatus === "PENDING");
        } else {
          updatedData = data?.list;
        }
        setFilteredData(updatedData); 
      }
    }, [data, status]);
  console.log(filteredData)
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
    {
      Header: "Status",
      accessor: "status",
      Cell: (cell) => {
        const Status = cell.row.values.status;
        return (
          <div>
            {Status === "pending" ? (
              <div className="relative cursor-pointer group">
                <motion.p
                  whileHover={{ scale: 1.3, originX: 0.5 }}
                  className="text-yellow-800 uppercase "
                >
                  {Status}
                </motion.p>
                <div className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-800 transition-all duration-300 group-hover:w-[50%] group-hover:-translate-x-1/2"></div>
              </div>
            ) : (
              <div>
                <motion.p whileHover={{ scale: 1.3, originX: 0.5 }}>
                  <p className="text-green-500 uppercase cursor-pointer group">
                    {Status}
                  </p>
                </motion.p>
                <div className="absolute left-1/2 bottom-0 w-0 h-0.5 text-green-500 transition-all duration-300 group-hover:w-[50%] group-hover:-translate-x-1/2"></div>
              </div>
            )}
          </div>
        );
      },
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
      Header: "Assign me",
      Cell: (cell) => {
        const beadingCarId = cell.row.original.beadingCarId;
        const buyerDealerId = cell.row.original.buyerDealerId;
        const sellerDealerId = cell.row.original.sellerDealerId;
        const salesPersonId = cell.row.original.salesPersonId;
        const b2BId = cell.row.original.b2BId;
        console.log(beadingCarId);
        return (
          <div className="cursor-pointer">
            <B2bSellerDialogBox beadingCarId={beadingCarId} buyerDealerId={buyerDealerId} sellerDealerId={sellerDealerId} salesPersonId={salesPersonId} b2BId={b2BId} />
          </div>
        );
      },
    },
  
  ];
    

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
      <div className="flex justify-center space-x-4">
      <Card className="w-96">
    <Link to="/Seller/b2b/pending">
      <CardBody>
        <Typography
          variant="h5"
          color={status === "pending" ? 'green' : 'blue-gray'}
          className="mb-2"
          onClick={() => setStatuss("pending")}
        >
          Pending Request
        </Typography>
      </CardBody>
    </Link>
  </Card>

  <Card className="w-96">
    <Link to="/Seller/b2b/active">
      <CardBody>
        <Typography
          variant="h5"
          color={status === "active" ? 'green' : 'blue-gray'}
          className="mb-2"
          onClick={() => setStatuss("active")}
        >
          Assigned Request
        </Typography>
      </CardBody>
    </Link>
  </Card>

  <Card className="w-96">
    <Link to="/Seller/b2b/sold">
      <CardBody>
        <Typography
          variant="h5"
          color={status === "sold" ? 'green' : 'blue-gray'}
          className="mb-2"
          onClick={() => setStatuss("sold")}
        >
          Sold Car
        </Typography>
      </CardBody>
    </Link>
  </Card>
    </div>


      <CardBody className="md:overflow-auto overflow-scroll px-1">
        <TableComponent columns={columns} data={filteredData || []} />
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="medium" color="blue-gray" className="font-normal">
          Page {pageNo + 1}
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm"  disabled={pageNo <= 0}>
            Previous
          </Button>
          <Button
            variant="outlined"
            size="sm"
            
            disabled={userdata?.list?.length < pageSize}
          >
            Next
          </Button>
        </div>
      </CardFooter>
      <ToastContainer />
    </Card>
  );
}
