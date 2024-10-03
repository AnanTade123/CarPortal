/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import  { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import {useB2bAssingMesectionMutation} from "../../services/salesAPI"

export default function B2bSellerDialogBox({beadingCarId,buyerDealerId,sellerDealerId,salesPersonId,b2BId}) {
  console.log(beadingCarId,buyerDealerId,sellerDealerId,salesPersonId,b2BId)
    const [open, setOpen] = useState(false);
     const [b2bAssingMesection] = useB2bAssingMesectionMutation()
    const handleOpen = () => setOpen(!open);

   const handlesubmit = async() => {
    const assingData = { 
      beadingCarId: beadingCarId,
  buyerDealerId: buyerDealerId,
  sellerDealerId: sellerDealerId,
  salesPersonId: salesPersonId,
  b2BId: b2BId
    }

    try {
      const res = await b2bAssingMesection({assingData,b2BId});
      console.log(res)
    } catch (error) {
      console.log(error)
    }
    setOpen(!open);
   }
    return (
      <>
        <Button onClick={handleOpen} variant="gradient">
      Click Here
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Are you Sure</DialogHeader>
          
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handlesubmit}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handlesubmit}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
}
