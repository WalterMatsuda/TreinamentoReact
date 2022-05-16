import React, { useState, useEffect } from "react";
import Pokebola from '../../assets/icons/pokeball.svg';
import SortAsc from '../../assets/icons/sortasc.svg';
import SortDesc from '../../assets/icons/sortdesc.svg';
import { BotaoOrdenacao, Container, ConteudoTitulo, Header, InputTexto, Titulo } from "./styles";
import SmallCard from "../../components/SmallCard";
import api from "../../services/api";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import { FlatList, Keyboard, TouchableWithoutFeedback, TouchableWithoutFeedbackBase } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Home() {
    const [decrescente, setDecrescente] = useState(false);
    const [nomeFiltro, setNomeFiltro] = useState('');
    const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);
    const [pokemonsFiltro, setPokemonsFiltro] = useState<PokemonDTO[]>([]);
    const navigation = useNavigation();

    function navegarParaDetalhes(pokemon: PokemonDTO) {
        console.log('a');

        navigation.navigate('Detalhes' as never, { pokemon } as never);
    };


    function alteraValorOrdenacao() {
        setDecrescente(estadoAntigo => !estadoAntigo)
    }
    function alteraNomeFiltro(nome: string) {
        console.log(nome);
        setNomeFiltro(nome);
        const filtrados = pokemons.filter(p => p.name.toLocaleLowerCase().includes(nome.toLocaleLowerCase()));
        setPokemonsFiltro(filtrados);
        console.log(filtrados);
    }

    async function getPokemons() {
        try {
            const filtro = decrescente ? '?_sort=name&_order=desc&_limit=20' : '?_sort=name&_order=asc&_limit=20';
            console.log("filtro", filtro);
            const resposta = await api.get<PokemonDTO[]>('/pokemons' + filtro);
            if (resposta.data && resposta.data.length > 0) {
                setPokemons(resposta.data);
                setPokemonsFiltro(resposta.data);
                console.log(resposta.data[0].name);
            }
        } catch (error) {
            console.log("Erro", error);
        }


    }
    useEffect(() => {

        getPokemons();
    }, [decrescente]);
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>
                <Header>
                    <ConteudoTitulo>
                        <Pokebola width={27} height={27} />
                        <Titulo>Pokemon</Titulo>
                    </ConteudoTitulo>
                    <BotaoOrdenacao onPress={() => alteraValorOrdenacao()} >
                        {
                            decrescente ? <SortAsc /> : <SortDesc />
                        }
                    </BotaoOrdenacao>
                </Header>
                <InputTexto placeholder="Procurar" onChangeText={(texto) => alteraNomeFiltro(texto)} keyboardAppearance="dark" />
                <FlatList data={pokemonsFiltro} keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                    style={{ width: '100%' }}
                    renderItem={({ item }) => <SmallCard pokemon={item} onPress={() => navegarParaDetalhes(item)} />} />

            </Container>
        </TouchableWithoutFeedback>

    )
}

export default Home;