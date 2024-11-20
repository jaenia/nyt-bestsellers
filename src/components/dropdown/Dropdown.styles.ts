import styled from "styled-components";

export const Select = styled.select`
  padding: 10px 15px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 16px;
  color: #333;
  appearance: none;
  outline: none;
  cursor: pointer;

  /* Custom arrow */
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6"%3E%3Cpath fill="none" stroke="%23333" stroke-width="1.5" d="M1 1l4 4 4-4" /%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10px;
`;