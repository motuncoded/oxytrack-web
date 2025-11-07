import React from "react";
import { useAuth } from "../hooks/auth/useAuth";

const DashboardSection = ({ title, number, icon, border }) => {
  return (
    <section
      className={`flex w-full px-6 py-4 rounded-lg shadow-md bg-white flex items-center space-x-4 border-l-4 ${border}`}
    >
      <div>
        <h2 className="text-gray-400 text-sm">{title}</h2>

        <p className="text-4xl font-semibold">{number}</p>
      </div>
      <p className="text-lg">{icon}</p>
    </section>
  );
};

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <section className="w-full p-4 ">
      <header className="hidden  md:flex md:justify-self-end">
        <p className="text-sm text-gray-600">Welcome, {user?.username}</p>
      </header>
      <div className="my-4">
        <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DashboardSection
            title="Active Cylinders"
            number={12}
            icon={null}
            border="border-l-green-500"
          />
          <DashboardSection
            title="Due for Inspections"
            number={34}
            icon={null}
          />
          <DashboardSection title="Active Facilities" number={5} icon={null} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
