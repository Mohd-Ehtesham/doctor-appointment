import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store"; // Remove curly braces here
import { render, fireEvent, screen } from "@testing-library/react"; // Add render
import "@testing-library/jest-dom/extend-expect"; // Import jest-dom matchers for DOM assertions
import MyProfile from "./MyProfile"; // Import the component you're testing

// Create a mock store
const mockStore = configureMockStore();
const store = mockStore({});

// Mock the Header and Sidebar components
jest.mock("../components/Header", () => ({ toggleSidebar }) => (
  <div onClick={toggleSidebar}>Mock Header</div>
));
jest.mock("../components/Sidebar", () => () => <div>Mock Sidebar</div>);

describe("MyProfile Page Component", () => {
  test("renders Header and Sidebar components", () => {
    // Render the MyProfile component within Provider and BrowserRouter
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MyProfile />
        </BrowserRouter>
      </Provider>
    );

    // Check if Header is rendered
    const header = screen.getByText(/Mock Header/i);
    expect(header).toBeInTheDocument();

    // Check if Sidebar is NOT initially visible
    expect(screen.queryByText(/Mock Sidebar/i)).toBeNull();

    // Simulate clicking to open the Sidebar
    fireEvent.click(header); // This should trigger the toggleSidebar function

    // Check if Sidebar is visible after clicking the toggle button
    const sidebar = screen.getByText(/Mock Sidebar/i);
    expect(sidebar).toBeInTheDocument();
  });
});
