/* eslint-disable no-unused-vars */
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import InspectionReport from "./InspectionReport";
import Exterior from "./Exterior";
import Interior from "./Interior";
import Engine from "./Engine";
import Steering from "./Steering";
import AC from "./Ac";
import Electrical from "./Electrical";

export default function CarVerify() {
  const [activeTab, setActiveTab] = React.useState("Exterior");
  const data = [
    {
      label: "Exterior",
      value: "Exterior",
      desc: <Exterior />,
    },
    {
      label: "Interior",
      value: "interior",
      desc: <Interior />,
    },
    {
      label: "Engine",
      value: "engine",
      desc: <Engine />,
    },
    {
      label: "AC",
      value: "ac",
      desc: <AC />,
    },
    {
      label: "Electricals",
      value: "electricals",
      desc: <Electrical />,
    },
    {
      label: "Steering",
      value: "steering",
      desc: <Steering />,
    },
    {
      label: "Inspection Report",
      value: "report",
      desc: <InspectionReport />,
    },
  ];

  return (
    <div className="mt-5">
      <div className="sticky">
      <Tabs value={activeTab}>
        <TabsHeader
          className="sticky top-0 z-10 bg-white rounded-none border-b border-blue-gray-50 overflow-x-auto md:overflow-x-visible p-2"
          style={{ maxWidth: "100%" }} // Ensure the header tabs don't extend beyond the viewport width
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-indigo-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900 text-xl" : ""}
              style={{ minWidth: "120px" }} // Adjust the minimum width as needed
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
    </div>
  )
}
