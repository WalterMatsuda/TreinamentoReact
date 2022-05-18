import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { FavoritoDTO } from "../../dtos/FavoritoDTO";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import {
Container , 
Header , 
Titulo ,
} from './styles';

function Favoritos(){
    const [favoritos , setFavoritos ] = useState<FavoritoDTO[]>([]);
    const isFocused = useIsFocused(); 

const pokemon = {
    id: 1,
    code: "#001",
    name: "Bulbasaur",
    about: {
        weight: "6,9 kg",
        height: "0,7 m",
        description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger."
    },
    moves: [{
        id: 1,
        name: "Chlorophyll"
        },
        {
            id: 2,
            name: "Overgrow"
        }
    ],
    base_stats:{
        hp: "045",
        atk: "049",
        def: "049",
        satk: "065",
        sdef: "065",
        spd: "045"
    },
    types: [
        {
            id: 1,
            name: "grass"
        },
        {
            id: 2,
            name: "poison"
        }
    ]
} as PokemonDTO;
 
async function getFavoritos(){
    const favoritosStorage = await AsyncStorage.getItem(FAVORITO_KEY);
    if(favoritos){
        const favoritosParse = JSON.parse(favoritosStorage) as FavoritoDTO[];
        setFavoritos(favoritosParse) ; 

    }
}
async function removeStorage(id: number){
    const favoritos = await AsyncStorage.getItem(FAVORITOS_KEY);        
    if(favoritos){
        const favoritosParse = JSON.parse(favoritos) as FavoritoDTO[];
        const filtrados = favoritosParse.filter(f => f.pokemon.id !== id);
        await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(filtrados));
        getFavoritos();
    }
}

useEffect(() => {
    console.log('bateu efeito')
    getFavoritos();

} , [isFocused] ) 


        return( 
<Container>
            <Headers> 
                <Titulo>Favoritos</Titulo>
            </Headers>
            {
                <FlatList data={favoritos} keyExtractor={(item)=> item.id.toString()} renderItem={({item})=>(

                    <FavoriteCard pokemon={item.pokemon} />
                )} /> 

            }
            <FavoriteCard></FavoriteCard>
</Container>

        )
}export default Favoritos 