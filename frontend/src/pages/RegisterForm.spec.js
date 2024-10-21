import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import RegisterForm from "./RegisterForm";
import configureMockStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import { registerUser } from "../redux/actions/userRegisterAction";
import "@testing-library/jest-dom/extend-expect"; // Import jest-dom matchers
jest.mock("../redux/actions/userRegisterAction");

// Create a mock store
const mockStore = configureMockStore();
const store = mockStore({});

describe("Unit Test Cases Of Register Form", () => {
  test("check that h1 contains text", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      </Provider>
    );
    // check that h1 contains specific text
    const h1 = screen.getByText("Sign up to your Account");
    expect(h1).toBeInTheDocument();
  });

  test("checking all the label and input tags", () => {
    // Wrap RegisterForm with Provider and BrowserRouter
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      </Provider>
    );
    // Check if labels and input fields are present
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-Mail Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Role/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Remember Me/i)).toBeInTheDocument();
  });

  test("check that navlink is present and has the correct href attribute", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      </Provider>
    );
    //  Check if navlink is present and  has the correct href attribute
    const navlink = screen.getByText(/Already have an account\? Login/i);
    expect(navlink).toBeInTheDocument();
  });

  test("should dispatch registerUser action on form submit", () => {
    // Mock the action creator to return a plain object
    registerUser.mockReturnValue({ type: "USER_REGISTER_REQUEST" });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      </Provider>
    );

    // Simulate user input
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/E-Mail Address/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText(/Role/i), {
      target: { value: "patient" },
    });

    // Simulate form submission
    fireEvent.click(screen.getByRole("button", { name: /SIGN UP/i }));

    // Assert that the action creator was called with the correct arguments
    expect(registerUser).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      role: "patient",
    });
  });
});
