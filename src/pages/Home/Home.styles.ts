import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  height: 80px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
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
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};

  min-height: calc(100vh - 100px);
  padding: 20px;
  margin-top: 40px;
  overflow: hidden;
`;

export const PlaceholderText = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  line-height: 1.5;
`;

export const PlaceholderTitle = styled.span`
  display: block;
  font-weight: 600;
  font-size: 48px;
`;

export const BrandText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const CategoryMessage = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 60px;
  margin-bottom: 20px;
  text-align: center;
`;

export const CategoryName = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ErrorMessage = styled.div`
  color: #ff4d4f;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  width: 90%;
  max-width: 500px;
`;
