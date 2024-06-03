import styled from "styled-components";

export const Container = styled.section`
margin:  0 0 40px;

> h2 {


  padding-bottom: 16px;
  margin: 15px auto;

  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-size: 20px;
  font-weight: 400;

}

`;