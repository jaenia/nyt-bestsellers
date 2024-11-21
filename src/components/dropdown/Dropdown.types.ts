import { Category } from "types";

export interface DropdownProps {
  categories: Category[];
  onSelect: (category: string) => void;
  selectedCategory: string;
}