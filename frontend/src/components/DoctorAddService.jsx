import { useState } from "react";
import { useDispatch } from "react-redux";

import { createService } from "../redux/actions/createServicesAction";

import AddServiceModal from "./AddServiceModal";

export default function DoctorAddService() {
  const [price, setPrice] = useState(0);
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  const dispatch = useDispatch();

  async function handleSubmit(event) {
    event.preventDefault();
    const serviceDetails = { price, serviceName, description };

    try {
      // Dispatch the createService action with serviceDetails
      await dispatch(createService(serviceDetails));
    } catch (error) {
      console.error("Error during creating service:", error);
    } finally {
      setPrice(0);
      setServiceName("");
      setDescription("");
    }

    setIsModalOpen(false); // Close the modal after submission
  }

  return (
    <AddServiceModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleSubmit}
      price={price}
      serviceName={serviceName}
      description={description}
      setPrice={setPrice}
      setServiceName={setServiceName}
      setDescription={setDescription}
    />
  );
}
