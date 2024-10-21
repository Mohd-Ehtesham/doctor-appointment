import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./redux/store";

import Services from "./pages/Services";
import LoginForm from "./pages/LoginForm";
import MyProfile from "./pages/MyProfile";
import RegisterForm from "./pages/RegisterForm";
import MyAppointments from "./pages/MyAppointments";
import ProtectedRoute from "./components/ProtectedRoute";
import BookAnAppointment from "./pages/BookAnAppointment";
import DoctorAddService from "./components/DoctorAddService";
import PatientDashboard from "./components/PatientDashboard";

export default function App() {
  return (
    <div className="min-h-screen">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />

            {/* Private route for authenticated users */}
            <Route
              path="/myProfile/*"
              element={
                <ProtectedRoute>
                  <MyProfile />
                </ProtectedRoute>
              }
            >
              {/* Nested routes based on role */}
              <Route path="services" element={<Services />} />
              <Route path="myAppointment" element={<MyAppointments />} />
              <Route path="doctorAddService" element={<DoctorAddService />} />
              <Route path="patientDashboard" element={<PatientDashboard />} />
              <Route path="doctorAddService" element={<DoctorAddService />} />
              <Route path="bookAnAppointment" element={<BookAnAppointment />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
