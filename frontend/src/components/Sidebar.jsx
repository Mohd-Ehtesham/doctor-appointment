import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { FaUserLarge } from "react-icons/fa6";

export default function Sidebar() {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.login.userDetails);

  // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function logout() {
    localStorage.removeItem("token");
    setIsSidebarOpen(false); // Close sidebar
    navigate("/login");
  }

  // Function to handle role click (e.g., for patients)
  function handleRoleClick() {
    if (userDetails?.role === "patient") {
      setIsSidebarOpen(false); // Close sidebar
      navigate("/myProfile/patientDashboard"); // Navigate to the correct route
    } else if (userDetails?.role === "admin") {
      setIsSidebarOpen(false); // Close sidebar
      navigate("/myProfile/doctorAddService");
    }
  }

  return (
    <>
      {isSidebarOpen && (
        <aside className="fixed left-0 top-0 bg-pink-200 h-full p-5 md:top-28 lg:top-24 w-96 2xl:top-16 2xl:p-10">
          <ul className="space-y-2 flex flex-col justify-center items-center mt-[4rem]">
            <li>
              <img
                src="/nora.jpeg"
                alt="loading..."
                className="w-[10rem] h-[10rem] rounded-full"
              />
            </li>
            <li
              onClick={handleRoleClick}
              className="font-semibold hover:bg-pink-300 px-4 rounded-lg"
            >
              {userDetails?.role}
            </li>
            <li className="font-semibold hover:bg-pink-300 px-4 rounded-lg">
              {userDetails?.email}
            </li>
            <li className="font-semibold hover:bg-pink-300 px-4 rounded-lg">
              {userDetails?.name}
            </li>
            <div className="flex justify-around items-baseline gap-3">
              <FaUserLarge className="" />
              <button
                onClick={logout}
                className="mt-4 px-5 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-[6px] lg:text-lg"
              >
                Log Out
              </button>
            </div>
          </ul>
        </aside>
      )}
    </>
  );
}
