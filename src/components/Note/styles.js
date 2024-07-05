import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
width: 100%;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

border: none;
border-radius: 16px;
padding: 32px;
margin-bottom: 35px;

> h1 {
  flex: 1;
  text-align: left;
  font-weight: 700;
  font-size: 24px;
  color: ${({theme}) => theme.COLORS.WHITE};
}
> p {
  flex: 1;
  font-size: 16px;
  text-align: left;
  font-weight: 200;
  color: ${({theme}) => theme.COLORS.WHITE};
  margin-top: 10px;
}

> footer {
  width: 100%;
  display: flex;
  margin-top: 30px;
}
`;

export const Star = styled.button `


border: none;
background: none;
display: flex;

> svg {
  color: ${({theme}) => theme.COLORS.ROSE};
  font-size: 16px;
  margin-top: 10px;
}

`;
