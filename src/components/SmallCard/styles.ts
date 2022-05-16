import styled from  'styled-components/native';
import { PokemonName } from '../../dtos/PokemonDTO';
interface Props{
    type : PokemonName;
     
}

export const Container = styled.TouchableOpacity<Props>`
width:104px;
height:110px;
border-radius : 8px ;
border-width:1px;
margin: 10px;
border-color : ${({theme , type }) => theme[type] };
background-color : ${({theme }) => theme.white };


`;

export const ConteudoCodigo = styled.View`

align-items :flex-end;
justify-content : center ; 
padding :4px 8px 0px 8px;

`;
export const Codigo = styled.Text<Props>`
font-size:8px;
font-family:${({theme}) => theme.fonts.REGULAR};
color: ${({theme , type}) => theme[type]};
`;

export const ConteudoSvg = styled.View`
align-items : center ; 
justify-content : center; 

`;

export const ConteudoNome = styled.View<Props>`
    width: 100%;
    align-items: center;
    justify-content: center;    
    background-color: ${({theme , type}) => theme[type]};
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 5px 8px;
`;

export const Nome = styled.Text`
    font-family: ${({theme}) => theme.fonts.REGULAR};
    color: ${({theme}) => theme.white};
    font-size: 10px;
`;