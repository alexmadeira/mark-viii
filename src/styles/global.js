import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration:none;
}
*:focus{
  outline:0;
}
html,
body,
#root {
  min-height: 100%;
  display:flex;
  flex-direction:column;
  flex:1;
}
body, input, button{
  font-family: 'Architects Daughter', cursive;
  font-size: 16px;
}

body {
  -webkit-font-smoothing: antialiased !important;
  text-rendering: optimizeLegibility !important;
  background: #fff;
  max-width: 100vw;
  overflow-x: hidden;
}
`;
