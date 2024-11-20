import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import BookCard from "./BookCard";
import { Book } from "types";

// needed due to BookCard styles using the theme
const mockTheme = {
  colors: {
    cardBackground: "#ffffff",
  },
};

const mockBook: Book = {
  title: "Sample Book",
  author: "Sample Author",
  description: "This is a great book about testing.",
  book_image: "https://example.com/sample-book.jpg",
  rank: 1,
};

describe("BookCard", () => {
  it("renders the book information correctly", () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <BookCard book={mockBook} />
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(mockBook.title);
    expect(screen.getByText(`by ${mockBook.author}`)).toBeInTheDocument();
    expect(screen.getByText(mockBook.description)).toBeInTheDocument();
    expect(screen.getByText(`Rank: ${mockBook.rank}`)).toBeInTheDocument();
  });

  it("renders the book image with correct alt text", () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <BookCard book={mockBook} />
      </ThemeProvider>
    );

    const bookImage = screen.getByRole("img", { name: mockBook.title });
    expect(bookImage).toHaveAttribute("src", mockBook.book_image);
    expect(bookImage).toHaveAttribute("alt", mockBook.title);
  });
});
