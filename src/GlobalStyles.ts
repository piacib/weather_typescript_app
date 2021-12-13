
import { createGlobalStyle } from "styled-components";
// import theme from "./theme";
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "VT323";
    font-weight: 400;
    font-style: normal;
    src: url("fonts/VT323-Regular.woff2") format("woff2"),
    url("fonts/VT323-Regular.woff") format("woff");
  }
html {
  font-size: 20px;
  font-family: 'VT323', monospace;
}
body {
  margin: 0;
  width: 650px;
}
button {
  font-family: inherit;
}
#root {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
h1 {
  font-family: var(--font-family);
  font-size:2.7rem;
}
`;
export default GlobalStyle;