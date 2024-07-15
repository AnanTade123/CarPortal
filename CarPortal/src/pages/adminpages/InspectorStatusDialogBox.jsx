/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";    
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useInspectorupdateMutation, useInspectorByIdQuery } from "../../services/inspectorapi";


export default function InspectorStatusDialogBox({ userId, inspectorProfileId, status }) {
  console.log("status",status);
  const [open, setOpen] = React.useState(false);
  const [isActive, setIsActive] = React.useState(status === true);

  const { data, isLoading, isError, error } = useInspectorByIdQuery({ userId });

  

  useEffect(() => {
    if (data && data.response) {
      const { response } = data;
      setIsActive(response.status === "ACTIVE");
    }
  }, [data]);

  const [InspctorStatus, { isLoading: isUpdating, error: updateError }] = useInspectorupdateMutation();

  const handleOpen = () => setOpen(!open);

  const handleSelectChange = (event) => {
    const newIsActive = event.target.value === "true";
    setIsActive(newIsActive);
  };

  const getButtonColor = () => {
    return isActive ? "green" : "red";
  };

  const getStatusText = () => {
    return isActive ? "Active" : "Disabled";
  };

  const handleConfirm = async (e) => {
    e.preventDefault();

    const inspectordata = {
      status: isActive ? true : false
    };

    console.log("Inspectordata to be sent:", inspectordata);

    try {
      console.log("Updating Inspector with ID:", inspectorProfileId, "to status:", isActive);

      const res = await InspctorStatus({ id: inspectorProfileId, inspectordata }).unwrap();
      console.log("API response:", res);
      console.log("Inspector status updated successfully!");
      setOpen(false); 
    } catch (error) {
      console.error("Error updating Inspector status:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Button onClick={handleOpen} color={getButtonColor()}>
        {getStatusText()}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Select Status</DialogHeader>
        <form onSubmit={handleConfirm}>
          <DialogBody className="flex justify-center">
            <select
              className="border border-gray-400 p-4 rounded-md"
              value={isActive ? true : false}
              onChange={handleSelectChange}
            >
              <option value="">Select</option>
              <option value={true}>ACTIVE</option>
              <option value={false}>DISABLE</option>
            </select>
          </DialogBody>
          <DialogFooter>
            <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" type="submit" disabled={isUpdating}>
              <span>Confirm</span>
            </Button>
            {updateError && <p className="text-red-500">Error: {updateError.data?.message || updateError.error}</p>} 
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
