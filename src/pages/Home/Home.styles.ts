import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const PlaceholderText = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #555;
`;

export const PlaceholderTitle = styled.span`
  display: block;
  font-weight: 600;
  font-size: 48px;
`;

export const BrandText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`
