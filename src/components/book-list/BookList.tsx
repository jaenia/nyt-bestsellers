import React from "react";
import { Book } from "types";
import BookCard from "components/book-card";
import { Grid } from "./BookList.styles";

const BookList: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <Grid data-testid="book-list-grid">
      {books.map((book) => (
        <BookCard key={book.title} book={book} />
      ))}
    </Grid>
  );
};

export default BookList;
