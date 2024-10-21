import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppointmentDetails from "../components/AppointmentDetails";
import { getAppointment } from "../redux/actions/getAppointmentAction";

export default function MyAppointments() {
  const dispatch = useDispatch();

  // Fetch appointment details when the component is mounted
  useEffect(() => {
    dispatch(getAppointment());
  }, [dispatch]);

  const { appointmentData } = useSelector((state) => state.getAppointment);

  return (
    <div className="rounded-lg mt-20">
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {appointmentData?.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          appointmentData?.map((appointment) => (
            <AppointmentDetails
              key={appointment._id}
              appointment={appointment}
            />
          ))
        )}
      </div>
    </div>
  );
}
