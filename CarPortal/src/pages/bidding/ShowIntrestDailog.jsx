/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";
import {useB2bpostMutation} from "../../services/dealerAPI"

export default function ShowIntrestDailog() {
  const { beadingCarId } = useParams();
  console.log(beadingCarId);
   const [b2bpost] = useB2bpostMutation();
  const [open, setOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [formdata, setFormdata] = useState({
    time: "",
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const token = Cookies.get("token");

  let jwtDecodes;

  if (token) {
    jwtDecodes = jwtDecode(token);
  }
  const DealerId = token ? jwtDecodes?.dealerId : null;
  console.log(DealerId);

  useEffect(() => {
    if (open) {
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
      
      setCurrentTime(formattedDate);
      setFormdata((prevFormData) => ({
        ...prevFormData,
        time: formattedDate, 
      }));
    }
  }, [open]);
  
  

  
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormdata({
  //     ...formdata,
  //     [name]: value, 
  //   });
  // };
const handleSubmit = async() =>{
const interestShow = {
  beadingCarId:beadingCarId,
  buyerDealerId:DealerId,
  time:formdata.time
}
console.log(interestShow)
try {
  const res = await b2bpost(interestShow).unwrap()
  console.log(res)
} catch (error) {
  console.log(error)
}
  setOpen(!open);
}
  return (
    <>
      <p
        onClick={handleOpen}
        className="p-2 rounded-md bg-yellow-500 font-bold text-black cursor-pointer"
      >
        I am Interested
      </p>
      <form onSubmit={handleSubmit}>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Show Interest</DialogHeader>
   
        <DialogBody>
          <Input 
            label="Time" 
            value={currentTime} 
            readOnly 
            name="time" 
          />
         
        </DialogBody>
        
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      </form>
    </>
  );
}
