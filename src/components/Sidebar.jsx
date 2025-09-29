import React, { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
  FaChartBar,
} from "react-icons/fa";
import { PiCylinderBold } from "react-icons/pi";
import { useAuth } from "../hooks/auth/useAuth";
import { Link } from "@tanstack/react-router";
const Sidebar = () => {
  const { user } = useAuth();

  const [activeItem, setActiveItem] = useState(1);

  const menuItems = [
    {
      id: 1,
      label: "Dashboard",
      icon: <FaHome className="text-lg" />,
      path: "/home",
    },
    {
      id: 2,
      label: "Cylinders",
      icon: <PiCylinderBold className="text-lg" />,
      path: "/cylinders",
    },
    {
      id: 3,
      label: "Facility",
      icon: <FaUsers className="text-lg" />,
      path: "/facility",
    },
    {
      id: 4,
      label: "Inventory",
      icon: <FaCalendarAlt className="text-lg" />,
      path: "/inventory",
    },
    // { id: 5, label: 'Documents', icon: <FaFileAlt className="text-lg" />, path: '/documents' },
    // { id: 6, label: 'Reports', icon: <FaChartBar className="text-lg" />, path: '/reports' },
  ];

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  //     const handleLogout = () => {
  //     logout();
  //   };

  return (
    <aside className="h-screen border-r  border-gray-200 bg-white shadow-sm">
      {/* Sidebar */}
      <div className="flex flex-col border-r  border-gray-200 h-full w-20 md:w-64 transition-width duration-300 ease-in-out">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-center md:justify-start">
            <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center">
              <h1 className="text-lg font-bold">O</h1>
            </div>
            <div className="hidden md:block ml-3">
              <h1 className="text-lg font-semibold text-gray-800">OxyTrack</h1>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link to={item.path}
                  className={`flex items-center p-3 rounded-lg transition-colors duration-200 group ${
                    activeItem === item.id
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                  onClick={() => handleItemClick(item.id)}
                >
                  <span
                    className={`${activeItem === item.id ? "text-blue-600" : "text-gray-500 group-hover:text-gray-700"}`}
                  >
                    {item.icon}
                  </span>
                  <span className="hidden md:block ml-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-center md:justify-start">
            <div className="hidden md:block">
              <p className="text-sm text-gray-600">Welcome, {user?.username}</p>
              <p className="text-sm text-gray-600">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
