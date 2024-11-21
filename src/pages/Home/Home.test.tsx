/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-debugging-utils */

import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import { fetchCategories, fetchBooks } from "services/api";
import { ThemeProvider } from "styled-components";
import { Category, Book } from "types";
import Home from "./Home";

jest.mock("services/api", () => ({
  fetchCategories: jest.fn(),
  fetchBooks: jest.fn(),
}));

const mockCategories: Category[] = [
  { list_name: "fiction", display_name: "Fiction" },
  { list_name: "non-fiction", display_name: "Non-Fiction" },
];

const mockBooks: Book[] = [
  {
    title: "Book 1",
    author: "Author 1",
    description: "Description 1",
    rank: 1,
    book_image: "image1.jpg",
  },
  {
    title: "Book 2",
    author: "Author 2",
    description: "Description 2",
    rank: 2,
    book_image: "image2.jpg",
  },
];

const mockTheme = {
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
    background: "#eee",
  },
};

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>);
};

describe("Home Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render loading indicator when categories are being fetched", async () => {
    (fetchCategories as jest.Mock).mockResolvedValueOnce(mockCategories);

    renderWithTheme(<Home />);

    await waitFor(() => {
      expect(screen.getByText(/Loading categories.../i)).toBeInTheDocument();
    })
  });

  it("should display categories after they are loaded", async () => {
    (fetchCategories as jest.Mock).mockResolvedValueOnce(mockCategories);

    renderWithTheme(<Home />);

    await waitFor(() => {
      expect(screen.getByRole("combobox")).toBeInTheDocument();
      expect(screen.getByText("Fiction")).toBeInTheDocument();
      expect(screen.getByText("Non-Fiction")).toBeInTheDocument();
    });
  });

  it("should display error message if categories fail to load", async () => {
    (fetchCategories as jest.Mock).mockRejectedValueOnce(new Error("Failed to load categories"));

    renderWithTheme(<Home />);

    await waitFor(() => {
      expect(screen.getByText("Failed to load categories")).toBeInTheDocument();
    });
  });

  it("should display books when a category is selected", async () => {
    (fetchCategories as jest.Mock).mockResolvedValueOnce(mockCategories);
    (fetchBooks as jest.Mock).mockResolvedValueOnce(mockBooks);

    renderWithTheme(<Home />);

    fireEvent.change(await screen.findByRole("combobox"), {
      target: { value: "fiction" },
    });

    await waitFor(() => {
      expect(fetchBooks).toHaveBeenCalledWith("fiction");
      expect(screen.getByText("Book 1")).toBeInTheDocument();
      expect(screen.getByText("Book 2")).toBeInTheDocument();
    });
  });

  it("should display error message if books fail to load", async () => {
    (fetchCategories as jest.Mock).mockResolvedValueOnce(mockCategories);
    (fetchBooks as jest.Mock).mockRejectedValueOnce(new Error("Failed to load books"));

    renderWithTheme(<Home />);

    fireEvent.change(await screen.findByRole("combobox"), {
      target: { value: "fiction" },
    });

    await waitFor(() => {
      expect(fetchBooks).toHaveBeenCalledWith("fiction");
      expect(screen.getByText("Failed to load books")).toBeInTheDocument();
    });
  });

  it("should display placeholder text when no category is selected", async () => {
    (fetchCategories as jest.Mock).mockResolvedValueOnce(mockCategories);

    renderWithTheme(<Home />);

    await waitFor(() => {
      expect(
        screen.getByText(
          /Select a category to discover the top books in different genres and categories/i
        )
      ).toBeInTheDocument();
    });
  });

  it("should reset state when clicking the 'NYT Bestsellers Explorer' header", async () => {
    (fetchCategories as jest.Mock).mockResolvedValueOnce(mockCategories);
    (fetchBooks as jest.Mock).mockResolvedValueOnce(mockBooks);
    
    renderWithTheme(<Home />);

    fireEvent.change(await screen.findByRole("combobox"), {
      target: { value: "fiction" },
    });

    await waitFor(() => {
      expect(fetchBooks).toHaveBeenCalledWith("fiction");
    })

    expect(screen.getByText("Book 1")).toBeInTheDocument();

    fireEvent.click(await screen.findByText("NYT Bestsellers"));

    await waitFor(() => {
      expect(screen.queryByText("Book 1")).not.toBeInTheDocument();
      expect(screen.getByText("Select a category")).toBeInTheDocument();
    });
  });

  it("should display a message indicating which category is being viewed", async () => {
    (fetchCategories as jest.Mock).mockResolvedValueOnce(mockCategories);
    (fetchBooks as jest.Mock).mockResolvedValueOnce(mockBooks);

    renderWithTheme(<Home />);

    fireEvent.change(await screen.findByRole("combobox"), {
      target: { value: "fiction" },
    });

    await waitFor(() => {
      const messageDiv = screen.getByText(/Displaying the bestsellers from the/i);
      const categorySpan = within(messageDiv).getByText(/fiction/i);
      expect(categorySpan).toBeInTheDocument();
    });
  });
});

