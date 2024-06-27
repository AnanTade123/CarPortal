/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import TableComponent from "../../components/table/TableComponent";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { CarModelsForm } from "./CarModelsForm";
import EditCarForm from "../adminpages/EdiCarForm"
import { useGetAllBrandsQuery, useDeleteCarBrandsMutation } from "../../services/brandAPI";

const CarListModels = () => {
  const { data, refetch } = useGetAllBrandsQuery();
  const [deleteCarBrands] = useDeleteCarBrandsMutation();
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    if (data) {
      setCarList(data?.list?.map((item) => ({
        brandDataId: item.brandDataId,
        brand: item.brand,
        variant: item.variant,
        subVariant: item.subVariant,
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

  const deleteCar = async (brandDataId) => {
    try {
      await deleteCarBrands(brandDataId).unwrap();
      // Refetch the data after deletion
      refetch();
    } catch (error) {
      console.error('Failed to delete the car brand:', error);
    }
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
    {
      Header: "Action",
      accessor: "action",
      Cell: (cell) => {
        const car = cell.row.original;
        return (
          <div className="flex gap-2 justify-center items-center">
            <EditCarForm initialData={car} brandDataId={cell.row.values.brandDataId} onSave={updateCar} />
            <Button color="red" onClick={() => deleteCar(cell.row.values.brandDataId)}>Delete</Button>
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
