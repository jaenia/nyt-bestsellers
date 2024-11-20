import React, { useEffect, useState } from "react";
import { fetchCategories, fetchBooks } from "services/api";
import { Category, Book } from "types";
import Dropdown from "components/dropdown";
import BookList from "components/book-list";
import LoadingIndicator from "components/loading-indicator";

import { Container } from "./Home.styles";

const Home: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<String>("");
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingBooks, setLoadingBooks] = useState(false);

  useEffect(() => {
    fetchCategories()
      .then((data) => {
        setCategories(data);
        setLoadingCategories(false);
      })
      .catch(() => {
        setError("Failed to load categories");
        setLoadingCategories(false);
      });
  }, []);

  const handleCategoryChange = (category: string) => {
    if (!category) return;
    setLoadingBooks(true);
    fetchBooks(category)
      .then((data) => {
        setBooks(data);
        setLoadingBooks(false);
      })
      .catch(() => {
        setError("Failed to load books");
        setLoadingBooks(false);
      });
  };

  return (
    <Container>
      <h1>NYT Bestsellers Explorer</h1>
      {error && <p>{error}</p>}
      {loadingCategories ? (
        <LoadingIndicator message="Loading categories..." />
      ) : (
        <Dropdown categories={categories} onSelect={handleCategoryChange} />
      )}
      {loadingBooks ? (
        <LoadingIndicator message="Loading books..." />
      ) : (
        <BookList books={books} />
      )}
    </Container>
  );
};

export default Home;
