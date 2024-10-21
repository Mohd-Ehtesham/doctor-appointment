import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getService } from "../redux/actions/getServicesAction";
import ServiceDetail from "../components/ServiceDetail";

export default function PatientServices() {
  const dispatch = useDispatch();

  // Fetch service details when the component is mounted
  useEffect(() => {
    dispatch(getService());
  }, [dispatch]);

  const { serviceDetails } = useSelector((state) => state.getService);
  console.log(serviceDetails);

  return (
    <div className="flex flex-wrap justify-center gap-5 mt-20 p-4">
      {serviceDetails?.map((service) => (
        <ServiceDetail key={service._id} service={service} />
      ))}
    </div>
  );
}
