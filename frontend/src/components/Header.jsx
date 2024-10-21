import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header({ toggleSidebar }) {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.login.userDetails);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backgroundColor flex justify-between items-center h-36 gap-5 px-4 md:h-28 md:px-8 lg:h-24 lg:px-16 xl:h-24 2xl:h-16">
      <div>
        <button onClick={toggleSidebar} className="text-2xl mx-2 lg:text-3xl">
          &#9776; {/* Hamburger menu icon */}
        </button>
      </div>

      <div className="flex flex-wrap justify-end gap-2 md:gap-4 me-20">
        {userDetails.role === "admin" ? (
          <button
            onClick={() => navigate("/myProfile/doctorAddService")}
            className="bg-white p-2 rounded-lg text-orange-900 text-sm md:text-base lg:text-lg"
          >
            Doctor Add Services
          </button>
        ) : (
          <button
            onClick={() => navigate("/myProfile/services")}
            className="bg-white p-2 rounded-lg text-orange-900 text-sm md:text-base lg:text-lg"
          >
            Services
          </button>
        )}

        <button
          onClick={() => navigate("/myProfile/bookAnAppointment")}
          className="bg-white p-2 rounded-lg text-orange-900 text-sm md:text-base lg:text-lg"
        >
          Book an appointment
        </button>

        <button
          onClick={() => navigate("/myProfile/myAppointment")}
          className="bg-white p-2 rounded-lg text-orange-900 text-sm md:text-base lg:text-lg"
        >
          My appointment
        </button>
      </div>
    </nav>
  );
}
