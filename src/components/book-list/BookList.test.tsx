import React from "react";
import { render, screen } from "@testing-library/react";
import BookList from "./BookList";
import { Book } from "types";
import { ThemeProvider } from "styled-components";

const mockBooks: Book[] = [
  {
    book_image: "https://example.com/book-image1.jpg",
    title: "Test Book 1",
    author: "Test Author 1",
    description: "This is the description of Test Book 1.",
    rank: 1,
  },
  {
    book_image: "https://example.com/book-image2.jpg",
    title: "Test Book 2",
    author: "Test Author 2",
    description: "This is the description of Test Book 2.",
    rank: 2,
  },
];

const mockTheme = {
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
  },
};

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>);
};

describe("BookList", () => {
  test("renders a list of BookCard components", () => {
    renderWithTheme(<BookList books={mockBooks} />);

    const grid = screen.getByTestId("book-list-grid");
    expect(grid).toBeInTheDocument();

    const bookCards = screen.getAllByRole("article");
    expect(bookCards.length).toBe(mockBooks.length);

    mockBooks.forEach((book) => {
      expect(screen.getByText(book.title)).toBeInTheDocument();
    });
  });

  test("displays a message when there are no books", () => {
    renderWithTheme(<BookList books={[]} />);

    const grid = screen.getByTestId("book-list-grid");
    expect(grid).toBeEmptyDOMElement();
  });

  test("renders BookCard components with correct book data", () => {
    renderWithTheme(<BookList books={mockBooks} />);

    mockBooks.forEach((book) => {
      expect(screen.getByText(book.title)).toBeInTheDocument();

      expect(screen.getByText(`by ${book.author}`)).toBeInTheDocument();

      expect(screen.getByText(`Rank #${book.rank}`)).toBeInTheDocument();
    });
  });

  test("renders the book image correctly", () => {
    renderWithTheme(<BookList books={mockBooks} />);

    mockBooks.forEach((book) => {
      const bookImage = screen.getByAltText(book.title);
      expect(bookImage).toBeInTheDocument();
      expect(bookImage).toHaveAttribute("src", book.book_image);
    });
  });
});
