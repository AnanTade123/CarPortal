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
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Inspection Report",
      value: "html",
      desc: <InspectionReport/>,
    },
    {
      label: "Exterior",
      value: "react",
      desc: <Exterior/>,
    },
    {
      label: "Interior",
      value: "vue",
      desc: <Interior/>,
    },
    {
      label: " Engine",
      value: "angular",
      desc: <Engine/>,
    },
    {
      label: "AC",
      value: "svelte",
      desc: <AC/>,
    },
    {
      label: "Electricals",
      value: "electricals",
      desc:<Electrical/>,
    },
    {
      label: "Steering",
      value: "steering",
      desc:<Steering/>,
    },
  ];

  return (
    <div className="mt-5">
      <Tabs value={activeTab}>
      <TabsHeader
  className="rounded-none border-b border-blue-gray-50 overflow-x-auto md:overflow-x-visible p-2"
  indicatorProps={{
    className: "bg-transparent border-b-2 border-indigo-900 shadow-none rounded-none",
  }}
>
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900 text-xl" : ""}
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
  )
}
