import React from "react";

const CylinderManagement = () => {
  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center mb-6 space-x-4">
        <h2 className="text-2xl font-bold ">Cylinder Management</h2>
        <button className="bg-[#0097b2] text-white px-4 py-2 rounded-md ">
          Add New Cylinder
        </button>
      </div>
      <div className="overflow-x-auto"></div>
    </div>
  );
};

export default CylinderManagement;
