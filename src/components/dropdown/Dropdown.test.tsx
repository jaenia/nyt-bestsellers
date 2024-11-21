import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Dropdown from "./Dropdown"; 

const mockTheme = {
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
  },
};

const renderWithTheme = (ui: React.ReactNode) => {
  return render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>);
};

describe("Dropdown Component", () => {
  const categories = [
    { list_name: "fiction", display_name: "Fiction" },
    { list_name: "nonfiction", display_name: "Nonfiction" },
  ];

  const onSelect = jest.fn();

  test("should render dropdown with categories", () => {
    renderWithTheme(
      <Dropdown categories={categories} onSelect={onSelect} selectedCategory="" />
    );

    expect(screen.getByText("Select a category")).toBeInTheDocument();
    expect(screen.getByText("Fiction")).toBeInTheDocument();
    expect(screen.getByText("Nonfiction")).toBeInTheDocument();
  });

  test("should call onSelect when a category is selected", () => {
    renderWithTheme(
      <Dropdown categories={categories} onSelect={onSelect} selectedCategory="" />
    );

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "fiction" } });

    expect(onSelect).toHaveBeenCalledWith("fiction");
  });

  test("should display selected category correctly", () => {
    renderWithTheme(
      <Dropdown categories={categories} onSelect={onSelect} selectedCategory="fiction" />
    );

    expect(screen.getByRole("combobox")).toHaveValue("fiction");
  });
});
