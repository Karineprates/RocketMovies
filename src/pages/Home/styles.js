import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
  grid-template-rows: auto auto 1fr; /* Define as três linhas: auto para header, auto para brand e botão, 1fr para o restante */
  grid-template-columns: 1fr; /* Apenas uma coluna */
  grid-template-areas:
    "header"
    "brand"
    "content";

background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};


`;


export const NewMovie = styled(Link)`



background-color: ${({theme})=> theme.COLORS.ROSE};
  color: ${({theme})=> theme.COLORS.BACKGROUND_800};


  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  border-radius: 8px;
  height: 45px;
  border: none;
  
  svg {
    margin-right: 8px;
  }
  


`;

export const Content = styled.div`

max-width: 1040px;
margin: 0 auto;
display: flex;
flex-direction: column;






`;

export const Brand  = styled.div`
  
  
  display: flex;
  margin-top: 135px; 
  margin-bottom: 35px;
  align-items: center;
  justify-content: center;
  justify-content: space-between;

h1 {
    font-size: 32px;
    font-weight: 400;
}


`;