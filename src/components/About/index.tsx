import React from "react";
import Altura from "../../assets/icons/weight.svg";
import Peso from "../../assets/icons/height.svg";
import { Acoes, Container, Dados, Medidas, Nome, Valor } from "./styles";

interface AboutDataProps{
    weight: string ; 
    height : string;
    moves : PokemonMove[];
}
function AboutData({weight , height , moves  }:AboutDataProps){
return(
        <Container>
            <Dados>
                <Medidas>
                    <Peso width={16} height={16} />
                    <Valor  >10kg</Valor>
                    <Nome>Width</Nome>
                </Medidas>
            </Dados>
            <Dados>
                <Medidas>
                    <Altura width={16} height={16}  style= {{marginRight:0}} />
                    <Valor  >10kg</Valor>
                </Medidas>
                <Nome>Height</Nome>
            </Dados>
            <Dados 
            naoExibirBorda >
                <Acoes>
                    {moves.map(m => (
                        <Valor key={m.id}>{m.name}</Valor>

                    ))}
                    <Valor  >10kg</Valor>
                </Acoes>
                <Nome>Moves</Nome>
            </Dados>


            
        </Container>
)

}

export default AboutData;
