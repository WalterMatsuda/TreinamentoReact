import styled from "styled-components/native";
import themes from "./src/styles/theme";
export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => themes.electric};
align-items: center;
justify-content: center;
`;

export const Texto = styled.Text`
font-size: 20px;
font-weight : bold; 
color : #aaa;
`;