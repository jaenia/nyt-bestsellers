import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import LoadingIndicator from "./LoadingIndicator";

const mockTheme = {
    colors: {
      primary: "#3498db",
      secondary: "#2ecc71",
    },
  };
  
const renderWithTheme = (ui: React.ReactNode) => {
  return render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>);
};

describe("LoadingIndicator", () => {
  
  test("renders the spinner", () => {
    renderWithTheme(<LoadingIndicator message="Loading data..." />);

    const spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("renders the message when passed", () => {
    const testMessage = "Loading data...";
    
    renderWithTheme(<LoadingIndicator message={testMessage} />);

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  test("does not render the message when not passed", () => {
    renderWithTheme(<LoadingIndicator message="" />);

    const messageElement = screen.queryByText("Loading data...");
    expect(messageElement).toBeNull();
  });

  test("does not render a message when no message is passed", () => {
    renderWithTheme(<LoadingIndicator message="" />);

    const paragraph = screen.queryByRole("paragraph");
    expect(paragraph).toBeNull();
  });
});
