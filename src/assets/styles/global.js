import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Sora', sans-serif;
}

body {
  background: ${({ theme }) => theme.colors.secondary.lightGray};
  font-size: 16px;
}

button {
  cursor: pointer;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
}
`;
