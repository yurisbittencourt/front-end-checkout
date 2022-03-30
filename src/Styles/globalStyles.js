import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;
export default GlobalStyle;

export const theme = {
  color: {
    navBG: "#f6f6f6",
    navButton: "rgba(0, 0, 0, 0.05)",
    navButtonHover: "rgba(0, 0, 0, 0.1)",
    buttonBG: "#6b8067",
    buttonBGHover: "#53634f",
    cartBG: "#f7f7f7",
  },
};
