import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
        <aside className="fixed left-0 top-36 bg-pink-200 h-full w-36 p-5 md:w-44 md:top-28 lg:w-52 lg:top-24 xl:w-60 2xl:w-72 2xl:top-16 2xl:p-10">
          <ul className="space-y-4 flex flex-col justify-center items-center mt-[4rem]">
            <li>
              <img
                src="/nora.jpeg"
                alt="loading..."
                className="w-[10rem] h-[10rem] rounded-full"
              />
            </li>
            <li className="text-[8px] font-semibold hover:bg-pink-300 px-4 rounded-lg md:text-xs lg:text-lg">
              {userDetails?.email}
            </li>
            <li className="text-[6px] font-semibold hover:bg-pink-300 px-4 rounded-lg md:text-[10px] lg:text-sm">
              {userDetails?.name}
            </li>
            <li
              onClick={handleRoleClick}
              className="text-[8px] font-semibold hover:bg-pink-300 px-4 rounded-lg md:text-xs lg:text-lg"
            >
              {userDetails?.role}
            </li>
            <button
              onClick={logout}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-[6px] lg:text-lg"
            >
              Log Out
            </button>
          </ul>
        </aside>
      )}
    </>
  );
}
