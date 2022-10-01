import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #0C2126;
  color: #fff;
  line-height: 1.5;
  margin: 0;
  overflow-x: hidden;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}
button {
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
    list-style: none;
}

a {
  text-decoration: none;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
`;

export const Container = styled.div`
    width: 100vw;
    padding: 0px 30px;
`;
