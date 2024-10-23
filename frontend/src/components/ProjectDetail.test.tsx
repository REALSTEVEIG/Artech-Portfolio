import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectDetail from "./projectDetail";
import { MemoryRouter, Route, Routes } from "react-router-dom";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          id: 1,
          title: "Mock Project",
          description: "Mock project description",
          image_url: "https://via.placeholder.com/150",
          project_url: "https://example.com",
        }),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks();
});

test("renders project details", async () => {
  render(
    <MemoryRouter initialEntries={["/projects/1"]}>
      <Routes>
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </MemoryRouter>
  );

  const titleElement = await screen.findByText(/Mock Project/i);
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = await screen.findByText(/Mock project description/i);
  expect(descriptionElement).toBeInTheDocument();

  const imageElement = screen.getByAltText(/Mock Project/i);
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', 'https://via.placeholder.com/150');

  const projectLink = screen.getByRole('link', { name: /Visit Project/i });
  expect(projectLink).toHaveAttribute('href', 'https://example.com');
});
