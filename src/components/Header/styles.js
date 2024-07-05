import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.header`

grid-area: header;

height: 105px;
width: 100%;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

display: flex;
justify-content: space-between;
align-items: center;
padding: 24px 124px;
gap: 64px;
position: fixed;
top: 0;
z-index: 1000;


`; 

export const Profile = styled(Link)`

display: flex;
align-items: center;
text-align: end;
flex-direction: row-reverse;

> img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid #3E3B47;
}

> div {
  display: flex;
  flex-direction: column;
  margin-right: 9px;
  line-height: 24px;

  span {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100 };
  
}
strong {
    font-size: 18px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

}


`;

export const Search = styled.div`
    
    display: flex;
    padding: 24px 24px;
    align-items: flex-start;
    flex: 1 0 0; 

  
`; 
export const Brand  = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme})=> theme.COLORS.ROSE};

  `;

export const Logout = styled.button `

border: none;
background: transparent;
color: ${({theme}) => theme.COLORS.WHITE};
`;