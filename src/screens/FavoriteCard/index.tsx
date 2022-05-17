import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "styled-components";
import TypeCard from "../../components/TypeCard";
import { PokemonDTO, PokemonName } from "../../dtos/PokemonDTO";
import { Botao, Container, ConteudoSvg, ConteudoTexto, Descricao, LabelBold, Opcao, Tipos } from "./styles";

interface FavoritoCardProps{
 pokemon : PokemonDTO; 

}
function FavoriteCard({pokemon} : FavoritoCardProps ){
    const tema = useTheme();
    return (
        <Container>
            <ConteudoSvg>

            </ConteudoSvg>
            <ConteudoTexto>
                <Descricao>
                <LabelBold type={pokemon.types[0]} style={{marginLeft :30 }}> {pokemon.name}</LabelBold>
                <LabelBold type={pokemon.types[0]}> {pokemon.code} </LabelBold>
                </Descricao>
            <Tipos>
                <TypeCard 
                tipoPokemon={ pokemon.types[0] }
                
                />
            {
                pokemon.types.map(t => (
                    <TypeCard tipoPokemon={pokemon.types[0]} key= {t.id}/>
                    
                    ))
            }
            </Tipos>
            </ConteudoTexto>
            <Opcao><Botao>
            <MaterialCommunityIcons 
            name='heart-broken'
            size={20} 
            color={tema.primary}
            />
            </Botao></Opcao>
        </Container>
        
        )
}export FavoriteCard;