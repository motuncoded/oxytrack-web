import React from "react";
import ScanTab from "./ScanTab";

const ScanEntry = () => {
  return (
    <div className="p-4 w-full">
      <h2 className="text-2xl font-semibold  mt-4">Quick Scan Entry </h2>
      <div className="mt-6 flex justify-around items-center  bg-white rounded-lg">
        <ScanTab tabs="1" title="Cylinder ID" />
        <ScanTab tabs="2" title="Location & Status" />
        <ScanTab tabs="3" title="Details" />
      </div>
    </div>
  );
};

export default ScanEntry;
