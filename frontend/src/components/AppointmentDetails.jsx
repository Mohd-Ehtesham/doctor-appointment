import { format } from "date-fns";

export default function AppointmentDetails({ appointment }) {
  // Format the appointment date
  const formattedDate = format(
    new Date(appointment.appointmentDate),
    "dd MMMM, yyyy"
  );

  return (
    <div className="flex flex-col shadow-lg rounded-lg overflow-hidden w-[30rem] max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl m-4 bg-white mt-16">
      {/* Image */}
      <img
        className="h-52 md:h-60 lg:h-96 w-full object-cover"
        src="/sethestecope.jpg"
        alt="loading..."
      />

      {/* Appointment details in a flex-wrap container */}
      <div className="flex flex-wrap justify-between items-center bg-blue-400 p-5 md:p-6 lg:p-7">
        <div className="flex flex-col">
          <p className="text-blue-700 font-extrabold text-right text-base md:text-lg lg:text-xl">
            {formattedDate}
          </p>
          <h3 className="text-white font-bold mt-2 text-base md:text-lg lg:text-xl">
            Doctor Details
          </h3>
          <h4 className="text-white font-semibold mt-1 text-sm md:text-base lg:text-lg">
            Name: {appointment.doctor}
          </h4>
          <h4 className="text-white font-semibold mt-1 text-sm md:text-base lg:text-lg">
            Department: {appointment.department}
          </h4>
          <h4 className="text-white font-semibold mt-1 text-sm md:text-base lg:text-lg">
            Rating: 4.8
          </h4>
          <h3 className="text-white font-semibold mt-1 text-sm md:text-base lg:text-lg">
            Patient Name: ALINA JOE
          </h3>
        </div>

        {/* Join button */}
        <div className="flex justify-center mt-4 lg:mt-0">
          <button className="bg-white px-4 py-2 rounded-lg text-blue-700 font-bold shadow-md hover:bg-gray-100 transition">
            JOIN
          </button>
        </div>
      </div>
    </div>
  );
}
