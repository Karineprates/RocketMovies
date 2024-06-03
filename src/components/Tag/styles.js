import styled from "styled-components";

export const Container = styled.span`

font-size: 16px;
padding: 8px 16px;
border-radius:  10px;
margin-right: 24px;

background-color: ${({theme}) => theme.COLORS.TAGS};
color: ${({theme}) => theme.COLORS.WHITE}

`;
