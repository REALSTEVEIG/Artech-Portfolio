import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders the portfolio header", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const headerElement = screen.getByText(/My Portfolio/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders the search input", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const searchInput = screen.getByPlaceholderText("Search projects...");
  expect(searchInput).toBeInTheDocument();
});
