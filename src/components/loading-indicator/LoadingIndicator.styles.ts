import styled from "styled-components";

export const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1.2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingIndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
