import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectList from "./projectList";
import { MemoryRouter } from "react-router-dom";

const mockProjects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for project 1",
    image_url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for project 2",
    image_url: "https://via.placeholder.com/150",
  },
];

test("renders the list of projects", () => {
  render(
    <MemoryRouter>
      <ProjectList projects={mockProjects} />
    </MemoryRouter>
  );

  const projectTitles = screen.getAllByText(/Project/i);
  expect(projectTitles.length).toBe(2);
  expect(screen.getByText(/Description for project 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Description for project 2/i)).toBeInTheDocument();
});

test("renders project cards with correct links", () => {
  render(
    <MemoryRouter>
      <ProjectList projects={mockProjects} />
    </MemoryRouter>
  );

  const projectLinks = screen.getAllByRole('link', { name: /View More/i });
  expect(projectLinks.length).toBe(2);

  expect(projectLinks[0].getAttribute('href')).toBe('/projects/1');
  expect(projectLinks[1].getAttribute('href')).toBe('/projects/2');
});
