/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
// import {usePlacebidsMutation} from "../../services/placingbidApi";
// import { Client } from '@stomp/stompjs';
// import SockJS from "sockjs-client/dist/sockjs"
import { useWebSocket } from "../../Utiles/WebSocketConnection";

window.global = window;

export default function PlaceBid({
  beadingCarId,
  UserID,
  handleMessage,
  topThreeBids,
  bidCarId,
  biddingAmount
}) {
  const [bidAmount, setBidAmount] = useState(biddingAmount + 2000);
  const [lastBidAmount, setLastBidAmount] = useState(biddingAmount + 2000);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const [error, setError] = useState(null);
  const {  getTopThreeBids, topThreeBidsAmount, placeBid } = useWebSocket();
  

  useEffect(()=>{
    setBidAmount(biddingAmount + 2000);
    setLastBidAmount(biddingAmount + 2000)
  },[biddingAmount])


  const handlePlaceBid = async () => {
    try {
      const bid = {
        placedBidId: null,
        userId: UserID,
        bidCarId: bidCarId,
        dateTime: new Date().toISOString(),
        amount: bidAmount,
      };
      const message = await placeBid(bid);
      if (message?.status === "error") {
        handleMessage(message?.message, "error");
      } else {
        handleMessage(message?.message, "success");
        getTopThreeBids(bidCarId); // Fetch top three bids after placing a bid
        setBidAmount(topThreeBidsAmount[0]?.amount)
      }
      handleOpen();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleMinusAmount = () => {
    if (lastBidAmount < bidAmount) {
      const amount = bidAmount - 2000;
      setBidAmount(amount);
    }
  };

  const handlePlusAmount = () => {
    const amount = bidAmount + 2000;
    setBidAmount(amount);
  };

  const handleamountChange = (e) => {
    setBidAmount(e.target.value);
  };

  return (
    <div>
      <Button onClick={handleOpen} className="bg-[#045e4f]">
        Place Bid
      </Button>
      <Dialog open={open} handler={handleOpen} className="max-w-full">
        <DialogHeader>Place Your Bid</DialogHeader>
        <DialogBody>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex w-full max-w-[35rem] gap-4">
            <Button className="rounded" onClick={handleMinusAmount}>
              Minus
            </Button>
            <Input
              type="text"
              label="Amount"
              value={bidAmount}
              onChange={handleamountChange}
              readOnly
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button onClick={handlePlusAmount} className="rounded">
              Plus
            </Button>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handlePlaceBid}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
