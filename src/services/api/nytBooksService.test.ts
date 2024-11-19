import { fetchCategories } from "./nytBooksService";
import { Category } from "types";

global.fetch = jest.fn();

const mockCategoriesResponse = {
  results: [
    {
      list_name: 'hardcover-fiction',
      display_name: 'Hardcover Fiction',
    },
    {
      list_name: 'hardcover-nonfiction',
      display_name: 'Hardcover Nonfiction',
    },
  ],
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
        expect.stringContaining("/lists/names.json")
      );
      expect(categories).toEqual(mockCategoriesResponse.results);
    });

    it("throws an error when the fetch request fails", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        json: async () => ({ message: "Error" }),
      });

      await expect(fetchCategories()).rejects.toThrow("Failed to fetch categories");
    });
  });
});
