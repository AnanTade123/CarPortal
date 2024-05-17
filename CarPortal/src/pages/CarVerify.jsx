import { useState } from "react";
import CardUi from "../ui/CardUi";
import { Input, Button } from "@material-tailwind/react";

function CarVerify() {
  const [partName, setPartName] = useState("");
  const [partCondition, setPartCondition] = useState("");

  const handleSubmit = () => {
    const partObject = {
      name: partName,
      condition: partCondition
    };
    console.log("Submitted object:", partObject); 
  };

  return (
    <div className="w-full flex justify-center ">
      <CardUi>
        <div className="min-w-[30rem]">
          <div className="w-full flex justify-center">
            <div className="mt-5 flex flex-col justify-center">
              <div className="flex">
                <div className="flex text-lg mt-3 font-[latto] font-medium text-black">
                  Part Name:
                <Input
                  label="Part Name"
                  placeholder="Enter part name"
                  value={partName}
                  onChange={(e) => setPartName(e.target.value)}
                />
                </div>
              </div>
              <div className="flex">
                <div className="mt-3 font-[latto] text-lg font-medium text-black">
                  Part Condition:
                </div>
                <Input
                  label="Part Condition"
                  placeholder="Enter part condition"
                  value={partCondition}
                  onChange={(e) => setPartCondition(e.target.value)}
                />
              </div>
              <div>
                <Button color="green" onClick={handleSubmit} className="items-center text-center">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardUi>
    </div>
  );
}

export default CarVerify;
