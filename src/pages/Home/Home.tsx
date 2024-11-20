import React, { useEffect, useState } from "react";
import { fetchCategories, fetchBooks } from "services/api";
import { Category, Book } from "types";
import Dropdown from "components/dropdown";
import BookList from "components/book-list";

import { Container } from "./Home.styles";

const Home: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<String>("");
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch(() => setError("Failed to load categories"));
  }, []);

  const handleCategoryChange = (category: string) => {
    if (!category) return;
    setLoading(true);
    fetchBooks(category)
      .then(setBooks)
      .catch(() => setError("Failed to load books"))
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <h1>NYT Bestsellers Explorer</h1>
      {error && <p>{error}</p>}
      <Dropdown categories={categories} onSelect={handleCategoryChange} />
      {loading ? <p>Loading...</p> : <BookList books={books} />}
    </Container>
  );
};

export default Home;
