import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MyProfile() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen((isOpen) => !isOpen); // Toggle sidebar open/close state
  }

  return (
    <div className="relative min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      {/* Pass toggleSidebar to Header */}
      {/* Sidebar */}
      <div className="flex justify-start">
        <div
          className={`absolute inset-y-0 left-0 transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          {isOpen && <Sidebar />}
          {/* Sidebar always exists in DOM */}
        </div>
        <div className={`ml-0 md:ml-72 me-9`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
