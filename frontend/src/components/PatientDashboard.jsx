import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { createPatient } from "../redux/actions/createPatientDetailsAction";

export default function PatientDashboard() {
  const dispatch = useDispatch();

  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [firstName, setFirstName] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const newPatientDetails = {
      firstName,
      lastName,
      phone,
      email,
      address1,
      address2,
      city,
      state,
      zip,
    };

    try {
      const result = await dispatch(createPatient(newPatientDetails));
      console.log(result);
    } catch (error) {
      console.error("Error during creating patient:", error);
    } finally {
      // Clear form fields after submission
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setAddress1("");
      setAddress2("");
      setCity("");
      setState("");
      setZip("");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center p-5 gap-10">
      <header className="text-lg sm:text-2xl font-bold">
        Patient Dashboard
      </header>

      <div className="bg-white rounded-lg w-full sm:w-auto shadow-md p-5">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="First Name.."
                className="p-2 sm:p-3 border rounded-md w-full"
                required
              />
            </div>
            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Last Name.."
                className="p-2 sm:p-3 border rounded-md w-full"
                required
              />
            </div>
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Phone..."
                className="p-2 sm:p-3 border rounded-md w-full"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email..."
                className="p-2 sm:p-3 border rounded-md w-full"
                required
              />
            </div>
            {/* Address 1 */}
            <div>
              <label htmlFor="address1" className="block text-sm font-medium">
                Address 1
              </label>
              <input
                type="text"
                name="address1"
                id="address1"
                value={address1}
                onChange={(event) => setAddress1(event.target.value)}
                placeholder="Address 1..."
                className="p-2 sm:p-3 border rounded-md w-full"
                required
              />
            </div>
            {/* Address 2 */}
            <div>
              <label htmlFor="address2" className="block text-sm font-medium">
                Address 2
              </label>
              <input
                type="text"
                name="address2"
                id="address2"
                value={address2}
                onChange={(event) => setAddress2(event.target.value)}
                placeholder="Address 2..."
                className="p-2 sm:p-3 border rounded-md w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                placeholder="City..."
                className="p-2 sm:p-3 border rounded-md w-full"
                required
              />
            </div>
            {/* State */}
            <div>
              <label htmlFor="state" className="block text-sm font-medium">
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                value={state}
                onChange={(event) => setState(event.target.value)}
                placeholder="State..."
                className="p-2 sm:p-3 border rounded-md w-full"
                required
              />
            </div>
            {/* Zip */}
            <div>
              <label htmlFor="zip" className="block text-sm font-medium">
                Zip
              </label>
              <input
                type="text"
                name="zip"
                id="zip"
                value={zip}
                onChange={(event) => setZip(event.target.value)}
                placeholder="Zip..."
                className="p-2 sm:p-3 border rounded-md w-full"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-40 px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-lg font-bold bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition duration-300"
          >
            Add
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
