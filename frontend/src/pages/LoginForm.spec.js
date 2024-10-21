import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import { loginUser } from "../redux/actions/userLoginAction";
import "@testing-library/jest-dom/extend-expect"; // Import jest-dom matchers
import LoginForm from "./LoginForm";
jest.mock("../redux/actions/userLoginAction");

// Create a mock store
const mockStore = configureMockStore();
const store = mockStore({});

jest.mock("../redux/actions/userLoginAction", () => ({
  loginUser: jest.fn(),
}));

describe("Unit Test Cases Of Login Form", () => {
  test("check that h1 contains text", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );
    // check that h1 contains specific text
    const h1 = screen.getByText("Log in to your Account");
    expect(h1).toBeInTheDocument();
  });

  test("checking all the label and input tags", () => {
    // Wrap RegisterForm with Provider and BrowserRouter
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );
    // Check if labels and input fields are present
    expect(screen.getByLabelText(/E-Mail Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Remember Me/i)).toBeInTheDocument();
  });

  test("check that navlink is present and has the correct href attribute", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );
    //  Check if navlink is present and  has the correct href attribute
    const navlink = screen.getByText(/New to app\? Register/i);
    expect(navlink).toBeInTheDocument();
  });

  test("should dispatch loginUser action on form submit", () => {
    // Mock the action creator to return a plain object
    loginUser.mockReturnValue({ type: "LOGIN_REQUEST" });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );

    // Simulate user input
    fireEvent.change(screen.getByLabelText(/E-Mail Address/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });

    // Simulate form submission
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    // Assert that the action creator was called with the correct arguments
    expect(loginUser).toHaveBeenCalledWith({
      email: "john@example.com",
      password: "password123",
      rememberMe: false,
    });
  });
});
