import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  margin: 10px;
`;