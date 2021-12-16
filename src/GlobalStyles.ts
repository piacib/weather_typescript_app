
import { createGlobalStyle } from "styled-components";

// import theme from "./theme";
const GlobalStyle = createGlobalStyle`
  html {
    background: ${props => props.theme.backgroundColor};
    height: 100%;
  }
`;
export default GlobalStyle;