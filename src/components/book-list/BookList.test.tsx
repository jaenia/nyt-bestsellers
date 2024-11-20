import React from "react";
import { render, screen } from "@testing-library/react";
import BookList from "./BookList";
import { Book } from "types";

jest.mock("../book-card/BookCard", () => ({ book }: { book: Book }) => (
  <div data-testid="book-card">{book.title}</div>
));

const mockBooks: Book[] = [
  {
    title: "Sample Book 1",
    author: "Author 1",
    description: "A great book!",
    book_image: "https://example.com/book1.jpg",
    rank: 1,
  },
  {
    title: "Sample Book 2",
    author: "Author 2",
    description: "Another great book!",
    book_image: "https://example.com/book2.jpg",
    rank: 2,
  },
];

describe("BookList", () => {
  it("renders the correct number of books", () => {
    render(<BookList books={mockBooks} />);
    
    const bookCards = screen.getAllByTestId("book-card");
    expect(bookCards).toHaveLength(mockBooks.length);

    expect(bookCards[0]).toHaveTextContent("Sample Book 1");
    expect(bookCards[1]).toHaveTextContent("Sample Book 2");
  });

  it("renders nothing if the book list is empty", () => {
    render(<BookList books={[]} />);
    
    const bookCards = screen.queryAllByTestId("book-card");
    expect(bookCards).toHaveLength(0);
  });
});
