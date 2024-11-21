import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import BookCard from "./BookCard";
import { Book } from "types";

const mockBook: Book = {
  book_image: "https://example.com/book-image.jpg",
  title: "Test Book Title",
  author: "Test Author",
  description: "This is a short description of the book.",
  rank: 1,
};

const mockTheme = {
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
  },
};

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>);
};

describe("BookCard", () => {
  test("renders book title, author, and description correctly", () => {
    renderWithTheme(<BookCard book={mockBook} />);

    expect(screen.getByText(mockBook.title)).toBeInTheDocument();
    expect(screen.getByText(`by ${mockBook.author}`)).toBeInTheDocument();
    expect(screen.getByText(mockBook.description)).toBeInTheDocument();
  });

  test("renders the book image with correct alt text", () => {
    renderWithTheme(<BookCard book={mockBook} />);

    const bookImage = screen.getByAltText(mockBook.title);
    expect(bookImage).toBeInTheDocument();
    expect(bookImage).toHaveAttribute("src", mockBook.book_image);
  });

  test("renders the rank badge with the correct rank", () => {
    renderWithTheme(<BookCard book={mockBook} />);

    expect(screen.getByText(`Rank #${mockBook.rank}`)).toBeInTheDocument();
  });
});
