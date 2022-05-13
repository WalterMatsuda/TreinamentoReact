import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import retornaSvg from "../../utils/retornaSvg";
import { BotaoHeader, Codigo, Nome, Container, ConteudoTitulo, Header, ConteudoSvg, Conteudo } from "./styles";

interface ParametrosRota {
    pokemon: PokemonDTO;

}

function Detalhes() {

    const [pokemon, setPokemon] = useState<PokemonDTO>();
    const route = useRoute();
    useEffect(() => {
        const parametros = route.params as ParametrosRota;
        console.log(parametros.pokemon);
        setPokemon(parametros.pokemon);


    }, [])
    if (!pokemon) {
        return <></>
    }

    return (
        <Container type={pokemon.types[0].name}>
            <Header>
                <ConteudoTitulo>
                    <BotaoHeader />
                    <Nome> {pokemon?.name}</Nome>
                    <Codigo>{pokemon?.code} </Codigo>
                </ConteudoTitulo>
                <BotaoHeader />
            </Header>
            <Conteudo>
            <ConteudoSvg>{retornaSvg(pokemon.name, 200, 200)}</ConteudoSvg>
            </Conteudo>
        </Container>
    )
}
//{retornaSvg(pokemon.name, 200, 200)} 
export default Detalhes;