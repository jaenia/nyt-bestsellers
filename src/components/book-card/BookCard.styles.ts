import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const BookImage = styled.img`
  width: 120px;
  height: 180px;
  border-radius: 5px;
  object-fit: cover;
  margin-bottom: 0 auto 12px;
`;

export const BookTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin: 8px 0;
`;

export const AuthorText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 4px 0 8px;
  font-style: italic;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  text-align: center;
  line-height: 1.4;
  margin-bottom: 8px;
`;

export const RankBadge = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  padding: 5px 10px;
  border-radius: 20px;
  text-align: center;
  align-self: flex-end;
  margin-top: 10px;
`;
