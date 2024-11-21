import React from "react";
import { DropdownProps } from "./Dropdown.types";

import { Select } from "./Dropdown.styles";

const Dropdown: React.FC<DropdownProps> = ({
  categories,
  onSelect,
  selectedCategory,
}) => {
  return (
    <Select onChange={(e) => onSelect(e.target.value)} value={selectedCategory}>
      <option value="" disabled>
        Select a category
      </option>
      {categories.map((category) => (
        <option key={category.list_name} value={category.list_name}>
          {category.display_name}
        </option>
      ))}
    </Select>
  );
};

export default Dropdown;
