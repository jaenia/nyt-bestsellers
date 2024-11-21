import { Category, Book } from "types";

const API_KEY = process.env.REACT_APP_NYT_API_KEY;
const BASE_URL = "https://api.nytimes.com/svc/books/v3";

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch(
    `${BASE_URL}/lists/names.json?api-key=${API_KEY}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await response.json();
  return data.results;
};

export const fetchBooks = async (category: string): Promise<Book[]> => {
  const response = await fetch(
    `${BASE_URL}/lists/current/${category}.json?api-key=${API_KEY}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  return data.results.books;
};
