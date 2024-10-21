import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import BookAnAppointment from "./BookAnAppointment";
import "@testing-library/jest-dom/extend-expect"; // Import jest-dom matchers
import { screen, render, fireEvent } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { createAppointment } from "../redux/actions/createAppointmentAction";
jest.mock("../redux/actions/createAppointmentAction");

const mockStore = configureMockStore();
const store = mockStore({});

jest.mock("../redux/actions/createAppointmentAction", () => ({
  createAppointment: jest.fn(),
}));

describe("unit test case of Book An Appointment Form", () => {
  test("check that h3 contains text", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BookAnAppointment />
        </BrowserRouter>
      </Provider>
    );
    // check that h1 contains specific text
    const h3 = screen.getByText("Book An Appointment");
    expect(h3).toBeInTheDocument();
  });

  test("checking all the label and input tags", () => {
    // Wrap RegisterForm with Provider and BrowserRouter
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BookAnAppointment />
        </BrowserRouter>
      </Provider>
    );
    // Check if labels and input fields are present
    expect(screen.getByLabelText(/Select Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Doctor Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Department/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Comments/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Upload Reports/i)).toBeInTheDocument();
  });

  test("should dispatch createAppointment action on form submit", () => {
    createAppointment.mockReturnValue({ type: "CREATE_APPOINTMENT_REQUEST" });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BookAnAppointment />
        </BrowserRouter>
      </Provider>
    );
    // simulate appointment input
    fireEvent.change(screen.getByLabelText(/Select Date/i), {
      target: { value: "24/07/2024" },
    });
    fireEvent.change(screen.getByLabelText(/Select Time/i), {
      target: { value: "12/37/56" },
    });
    fireEvent.change(screen.getByLabelText(/Doctor Name/i), {
      target: { value: "Dr. Mishra" },
    });
    fireEvent.change(screen.getByLabelText(/Department/i), {
      target: { value: "dentist" },
    });
    fireEvent.change(screen.getByLabelText(/Comments/i), {
      target: { value: "headache since morning" },
    });
    // Simulate form submission
    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));
  });
});
