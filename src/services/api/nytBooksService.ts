import { Category } from "types"

const API_KEY = process.env.REACT_APP_NYT_API_KEY;
const BASE_URL = "https://api.nytimes.com/svc/books/v3";

export async function fetchCategories(): Promise<Category[]> {
  const response = await fetch(`${BASE_URL}/lists/names.json?api-key=${API_KEY}`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await response.json();
  return data.results;
}
