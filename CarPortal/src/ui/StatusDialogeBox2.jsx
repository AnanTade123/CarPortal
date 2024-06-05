/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDealerStatusMutation,useGetDealerQuery } from "../services/dealerAPI";

export default function StatusDialogeBox2({ dealer_id }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const [isActive, setIsActive] = React.useState(true); // Assume initial state is active

  const [dealerStatus, { isLoading, error }] = useDealerStatusMutation();

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

  // const [id, setId] = React.useState();
  var id;
  console.log(id)
const handleConfirm = async () => {

  try {
    // Ensure dealerId is logged before calling mutation
    console.log("Updating dealer with ID:", dealer_id, "to status:", isActive);
    
    // Call the mutation with the updated status
    const res = await dealerStatus({ dealer_id, status: isActive });
    console.log(res);
     // Update the dealerId state
     
    console.log("Dealer status updated successfully!");
    setOpen(false); // Close the dialog
    
  } catch (error) {
    // Handle errors appropriately (e.g., display an error message)
    console.error("Error updating dealer status:", error);
  }
  
   id = dealer_id
console.log(id)
  
};
const { data } = useGetDealerQuery(id);
  console.log(data)
// useEffect(() => {
//   if (id) {
    
//     console.log(data);
//   }
// }, [id]); // Run the effect when dealerId changes

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
            value={isActive ? "true" : "false"}
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
