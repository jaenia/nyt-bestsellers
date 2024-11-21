import React, { useEffect, useState } from "react";
import { fetchCategories, fetchBooks } from "services/api";
import { Category, Book } from "types";
import Dropdown from "components/dropdown";
import BookList from "components/book-list";
import LoadingIndicator from "components/loading-indicator";

import {
  CategoryMessage,
  CategoryName,
  Container,
  Header,
  Title,
  MainContent,
  PlaceholderText ,
  PlaceholderTitle,
  BrandText
} from "./Home.styles";

const Home: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<String>("");
  const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
  const [loadingBooks, setLoadingBooks] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

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
    const selected = categories.find((cat) => cat.list_name === category);
    setSelectedCategory(selected?.display_name || "");
    setLoadingBooks(true);
    fetchBooks(category)
      .then(setBooks)
      .catch(() => setError("Failed to load books"))
      .finally(() => setLoadingBooks(false));
  };

  return (
    <Container>
      <Header>
        <Title>
          <BrandText>NYT Bestsellers</BrandText> Explorer</Title>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {loadingCategories && <LoadingIndicator message="Loading categories..." />}
            {!error && !loadingCategories && (
              <Dropdown categories={categories} onSelect={handleCategoryChange} />
            )}
          </div>
      </Header>

      <MainContent>
        {error && <PlaceholderText>{error}</PlaceholderText>}

        {!loadingBooks && books.length === 0 && !error && (
          <PlaceholderText>
            <PlaceholderTitle>
              Explore the world of <BrandText>NYT Bestsellers</BrandText>!
            </PlaceholderTitle>
            Select a category to discover the top books in different genres and categories.
          </PlaceholderText>
        )}

        {selectedCategory && books.length > 0 && (
          <CategoryMessage>
            Displaying the bestsellers from the <CategoryName>{selectedCategory}</CategoryName> category.
          </CategoryMessage>
        )}

        {loadingBooks ? (
          <PlaceholderText>Loading books...</PlaceholderText>
        ) : (
          <BookList books={books} />
        )}
      </MainContent>
    </Container>
  );
};

export default Home;
