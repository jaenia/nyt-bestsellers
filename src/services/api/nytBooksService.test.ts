import { fetchCategories, fetchBooks } from "./nytBooksService";
import { Category, Book } from "types";

global.fetch = jest.fn();

const mockCategoriesResponse = {
  results: [
    {
      list_name: "hardcover-fiction",
      display_name: "Hardcover Fiction",
    },
    {
      list_name: "hardcover-nonfiction",
      display_name: "Hardcover Nonfiction",
    },
  ],
};

const mockBooksResponse = {
  results: {
    books: [
      {
        title: "The Book Title",
        author: "Author Name",
        description: "Book description.",
        book_image: "https://image.url",
        rank: 1,
      },
    ],
  },
};

describe("NYT Books Service Functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("fetchCategories", () => {
    it("fetches categories successfully", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockCategoriesResponse,
      });

      const categories: Category[] = await fetchCategories();

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining("/lists/names.json"),
      );
      expect(categories).toEqual(mockCategoriesResponse.results);
    });

    it("throws an error when the fetch request fails", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        json: async () => ({ message: "Error" }),
      });

      await expect(fetchCategories()).rejects.toThrow(
        "Failed to fetch categories",
      );
    });
  });

  describe("fetchBooks", () => {
    it("fetches books for a given category successfully", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockBooksResponse,
      });

      const books: Book[] = await fetchBooks("hardcover-fiction");

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining("lists/current/hardcover-fiction.json"),
      );
      expect(books).toEqual(mockBooksResponse.results.books);
    });

    it("throws an error when the fetch request fails", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        json: async () => ({ message: "Error" }),
      });

      await expect(fetchBooks("hardcover-fiction")).rejects.toThrow(
        "Failed to fetch books",
      );
    });
  });
});
