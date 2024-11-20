import React from "react";
import { Book } from "types";
import {
  Card,
  BookImage,
  AuthorText,
  BookTitle,
  Description,
  RankBadge, 
} from "./BookCard.styles";

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <Card>
      <div>
        <BookImage src={book.book_image} alt={book.title} />
        <BookTitle>{book.title}</BookTitle>
        <AuthorText>by {book.author}</AuthorText>
        <Description>{book.description}</Description>
      </div>
      <div>
        <RankBadge>Rank #{book.rank}</RankBadge>
      </div>
    </Card>
  );
};

export default BookCard;
