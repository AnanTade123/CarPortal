import { useState, useEffect } from 'react';
import TableComponent from "../../components/table/TableComponent";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { CarModelsForm } from "./CarModelsForm";
// import StatusDialogeBox3 from "../adminpages/StatusDialogeBox3";
import EditCarForm from "../adminpages/EdiCarForm";
import { useGetAllBrandsQuery } from "../../services/brandAPI";

const CarListModels = () => {
  const { data } = useGetAllBrandsQuery();
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    if (data) {
      setCarList(data?.list?.map((item, index) => ({
        carId: index + 1,
        brandDataId: item.brandDataId,
        brand: item.brand,
        variant: item.variant,
        subVariant: item.subVariant,
        carStatus: item.status,
      })));
    }
  }, [data]);

  const addCar = (newCar) => {
    setCarList((prevList) => [
      ...prevList,
      { carId: prevList.length + 1, ...newCar },
    ]);
  };

  const updateCar = (updatedCar) => {
    setCarList((prevList) => 
      prevList.map(car => car.carId === updatedCar.carId ? updatedCar : car)
    );
  };

  const deleteCar = (carId) => {
    setCarList((prevList) => 
      prevList.filter(car => car.carId !== carId)
    );
  };

  const columns = [
    {
      Header: "ID",
      accessor: "brandDataId",
    },
    {
      Header: "Brand",
      accessor: "brand",
    },
    {
      Header: "Model ",
      accessor: "variant",
    },
    {
      Header: "Variant",
      accessor: "subVariant",
    },
    // {
    //   Header: "Status",
    //   accessor: "carStatus",
    //   Cell: (cell) => (
    //     <div className="flex gap-2 justify-center items-center">
    //       {/* <StatusDialogeBox3 status={cell.row.values.carStatus}/> */}
    //     </div>
    //   ),
    // },
    {
      Header: "Action",
      accessor: "action",
      Cell: (cell) => {
        const car = cell.row.original;
        return (
          <div className="flex gap-2 justify-center items-center">
            <EditCarForm initialData={car} onSave={updateCar} />
            <Button color="red" onClick={() => deleteCar(car.carId)}>Delete</Button>
          </div>
        );
      },
    }
  ];

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Car list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all cars
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <CarModelsForm addCar={addCar} />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <TableComponent columns={columns} data={carList} />
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="medium" color="blue-gray" className="font-normal">
            {/* Page {pageNo + 1} */}
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default CarListModels;
