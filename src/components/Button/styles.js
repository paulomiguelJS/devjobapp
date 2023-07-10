import styled from "styled-components";

export const Button = styled.button`
  height: 48px;
  border: none;
  padding: 0 16px;

  background: ${({ theme }) => theme.colors.primary.violet};
`;
