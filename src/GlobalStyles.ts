
import { createGlobalStyle } from "styled-components";

// import theme from "./theme";
const GlobalStyle = createGlobalStyle`
  html {
    background: ${props => props.theme.backgroundColor};
    height: 100%;
    color: ${props => props.theme.fontColor};
  }
`;
export default GlobalStyle;