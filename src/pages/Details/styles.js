import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 103px auto;
  grid-template-areas:
  "header"
  "content";

> main {
  grid-area: content;
  overflow-y: scroll;
  padding: 64px 0;


}
`;

export const Content = styled.div`

  max-width: 1040px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  >  button {
    align-self: flex-start;
    margin-bottom: 24px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
  >div {
    display: flex;
    gap: 19px;
  
    h1 {
    font-size: 36px;
    font-weight: 500;

  }
  
  
  }


  
  `;

export const Star = styled.button `


border: none;
background: none;
> svg {
  color: ${({theme}) => theme.COLORS.ROSE};
  font-size: 36px;
}

`;

export const Profile = styled.div`

display: flex;
align-items: center;
margin-top: 24px;


img {
  width: 16px;
  height: 16px;
  border-radius: 35px;
  border: ${({theme})=> theme.COLORS.BACKGROUND_700};
}

span {
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
  
}
svg {
  font-size: 18px;
  color: ${({theme}) => theme.COLORS.ROSE};
  margin-left: 8px ;

}

span:nth-child(3){
  margin-left: 8px;
}

`;




