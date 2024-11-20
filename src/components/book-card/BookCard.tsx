import React from "react";
import { Book } from "types";
import { Card } from "./BookCard.styles";

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <Card>
      <img src={book.book_image} alt={book.title} style={{ width: "100px", height: "150px" }} />
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <p>{book.description}</p>
      <p>Rank: {book.rank}</p>
    </Card>
  );
};

export default BookCard;
