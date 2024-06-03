import styled from "styled-components";

export const Container = styled.div`

width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 105px auto;
grid-template-areas: 
"header"
"content";



.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 16px;
  background-color: ${({theme})=> theme.COLORS.BACKGROUND};
  border-radius: 8px;
}

.button {
  display: flex;
  button:nth-child(1) {
    background-color: ${({theme})=> theme.COLORS.BACKGROUND};
    color: ${({theme})=> theme.COLORS.ROSE};
  }
}



`;

export const Form = styled.form`

max-width: 1040px;
margin: 130px auto;

> header{
 
  h1{
    margin: 24px auto;
  }
  
  a {
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.ROSE};
  }
}

  > div {
    display: flex;
    gap: 40px;
    margin: 40px auto;
  }

  
`;