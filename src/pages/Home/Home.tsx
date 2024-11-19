import React, { useEffect, useState } from "react";
import { fetchCategories } from "services/api";
import { Category } from "types";
import Dropdown from "components/dropdown";

import { Container } from "./Home.styles";

const Home: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch(() => setError("Failed to load categories"));
  }, []);

  const handleCategoryChange = (category: string) => {
    if (!category) return;
    console.log("categoria mudou")
  };

  return (
    <Container>
      <h1>NYT Bestsellers Explorer</h1>
      {error && <p>{error}</p>}
      <Dropdown categories={categories} onSelect={handleCategoryChange} />
    </Container>
  );
};

export default Home;
