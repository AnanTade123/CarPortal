/* eslint-disable react/prop-types */
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {useDealerStatusMutation} from "../services/dealerAPI";

export default function StatusDialogeBox2({ dealerId }) { // Pass dealerId as a prop
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  // Use a boolean state variable for status
  const [isActive, setIsActive] = React.useState(true); // Assume initial state is active

  const [mutateDealerStatus, { isLoading, error }] = useDealerStatusMutation();

  const handleSelectChange = (event) => {
    const newIsActive = event.target.value === "true";
    setIsActive(newIsActive);
  };

  const getButtonColor = () => {
    return isActive ? "green" : "red";
  };

  const getStatusText = () => {
    return isActive ? "ACTIVE" : "DISABLE";
  };

  // Function to handle confirm and update backend
  const handleConfirm = async () => {
    try {
      // Call the mutation with the updated status
      await mutateDealerStatus({  dealerId, status: isActive  });

      // Handle successful response
      console.log("Dealer status updated successfully!");
      setOpen(false); // Close the dialog
    } catch (error) {
      // Handle errors appropriately (e.g., display an error message)
      console.error("Error updating dealer status:", error);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} color={getButtonColor()}>
        {getStatusText()}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Select Status</DialogHeader>
        <DialogBody className="flex justify-center">
          <select
            className="border border-gray-400 p-4 rounded-md"
            value={isActive ? "true" : "false"} // Set value based on isActive
            onChange={handleSelectChange}
          >
            <option value="">Select</option>
            <option value="true">ACTIVE</option>
            <option value="false">DISABLE</option>
          </select>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleConfirm} disabled={isLoading}>
            <span>Confirm</span>
          </Button>
          {error && <p className="text-red-500">Error: {error.message}</p>}
        </DialogFooter>
      </Dialog>
    </>
  );
}
