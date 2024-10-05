/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import  { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import {useAddB2BConfirmationApiMutation} from "../../services/salesAPI"

export default function B2BsellerConfirmationModel({b2BId}) {
    const [open, setOpen] = useState(false);
    const [AddB2BConfirmationApi] = useAddB2BConfirmationApiMutation()
    const handleOpen = () => setOpen(!open);
    const [amount , setAmount] = useState('');


   const handlesubmit = async() => {
    let assingData ;
      assingData = {
        price: amount,
        b2BId : b2BId
    }
    try {
      const res = await AddB2BConfirmationApi(assingData);
    } catch (error) {
      console.log(error)
    }
    setOpen(!open);
   }

   const isButtonDisabled = !amount || Number(amount) <= 99999;

    return (
      <>
        <Button size="sm" color="blue" onClick={handleOpen}>Sold</Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Modal</DialogHeader>
          <DialogBody>
          <Typography variant="h6" color="blue-gray" className="">
                  Price :
                </Typography>
            <Input label="Amount" value={amount} onChange={(e) => {
    const inputValue = e.target.value;
    // Only allow numeric values
    if (/^\d*$/.test(inputValue)) {
      setAmount(inputValue) // Update the value if it's a number
    }
  }} labelProps={{
                className: "hidden",
              }} placeholder="Enter amount of car" />
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handlesubmit}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handlesubmit} disabled={isButtonDisabled}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
}
