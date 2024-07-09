import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`


background: none;
color: ${({theme}) => theme.COLORS.ROSE};
border: none;
font-size: 16px;
margin-bottom: 25px;

svg {
  margin-right: 8px;
}



`;