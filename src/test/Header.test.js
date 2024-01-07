import { render, screen, act } from "@testing-library/react";
import App from "../App";

test("renders learn react link", async () => {
  await act(async () => {
    // Code that triggers asynchronous behavior (e.g., data fetching)
    render(<App />);
  });
  const linkElement = screen.getByTestId("headerImage");
  expect(linkElement).toBeInTheDocument();
});
