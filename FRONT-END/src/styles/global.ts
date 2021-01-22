import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Mulish&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  outline:0;

}
body {
  color:#fff;
  -webkit-font-smoothing: antialiased;
}
body,input,button {
font-family:'Roboto', serif;
font-size:16px;
}


h1,h2,h3,h4,h5,h6,strong {
  font-family: 'Montserrat', sans-serif;

}

p, :placeholder-shown{
  font-family: 'Mulish', sans-serif;
}

button {
  cursor: pointer;
}
`;
