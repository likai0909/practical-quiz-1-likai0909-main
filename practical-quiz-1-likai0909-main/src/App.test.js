import { render, screen } from "@testing-library/react";
import App from "./App";

// Set up the root div that React will render into
beforeEach(() => {
  // Enable fake timers
  jest.useFakeTimers();
});

afterEach(() => {
  // Clear mocked timers and system time after each test
  jest.useRealTimers();
});

test('displays "The project is in progress" message and button when within working hours', () => {
  jest.setSystemTime(new Date("2024-10-22T00:00:00Z"));
  render(<App />);
  expect(screen.getByText(/The project is in progress/i)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /view progress/i })
  ).toBeInTheDocument();
});

test('displays "The project is not active" message when outside working hours', () => {
  jest.setSystemTime(new Date("2024-10-22T17:00:00Z"));
  render(<App />);
  expect(screen.getByText(/The project is not active/i)).toBeInTheDocument();
});

test("renders each task with name, description, and priority", () => {
  render(<App />);

  const tasks = [
    {
      name: "Design Homepage",
      description: "Create the initial homepage design",
      priority: "Low",
    },
    {
      name: "Set Up Database",
      description: "Configure the database for user data",
      priority: "Medium",
    },
    {
      name: "Build API",
      description: "Develop the API endpoints",
      priority: "High",
    },
  ];

  tasks.forEach((task) => {
    expect(screen.getByText(new RegExp(task.name, "i"))).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(task.description, "i"))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(task.priority, "i"))
    ).toBeInTheDocument();
  });
});
