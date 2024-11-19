import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";
import { Category } from "types";

describe("Dropdown Component", () => {
  const mockCategories: Category[] = [
    { list_name: "fiction", display_name: "Fiction" },
    { list_name: "nonfiction", display_name: "Non-Fiction" },
  ];

  const mockOnSelect = jest.fn();

  it("renders the dropdown with options", () => {
    render(<Dropdown categories={mockCategories} onSelect={mockOnSelect} />);

    expect(screen.getByText("Select a category")).toBeInTheDocument();

    expect(screen.getByText("Fiction")).toBeInTheDocument();
    expect(screen.getByText("Non-Fiction")).toBeInTheDocument();
  });

  it("calls onSelect when an option is selected", () => {
    render(<Dropdown categories={mockCategories} onSelect={mockOnSelect} />);

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "fiction" },
    });

    expect(mockOnSelect).toHaveBeenCalledWith("fiction");
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });

  it("renders correctly when no categories are provided", () => {
    render(<Dropdown categories={[]} onSelect={mockOnSelect} />);

    expect(screen.getByText("Select a category")).toBeInTheDocument();

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(1);
  });
});
