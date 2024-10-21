import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import { userReducer } from "./reducers/userReducer";
import { userLoginReducer } from "./reducers/userLoginReducer";
import { getServiceReducer } from "./reducers/getServicesReducer";
import { userRegisterReducer } from "./reducers/userRegisterReducer";
import { createServiceReducer } from "./reducers/createServicesReducer";
import { getAppointmentReducer } from "./reducers/getAppointmentReducer";
import { createPatientReducer } from "./reducers/createPatientDetailsReducer";
import { createAppointmentReducer } from "./reducers/createAppointmentReducer";

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  login: userLoginReducer,
  register: userRegisterReducer,
  getService: getServiceReducer,
  createPatient: createPatientReducer,
  createService: createServiceReducer,
  getAppointment: getAppointmentReducer,
  createAppointment: createAppointmentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
