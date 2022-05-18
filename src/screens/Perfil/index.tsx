import React from "react";
import { Image } from "react-native";
import { BackgroundImage, BotaoSair, Container, Conteudo, Header, Sair, Titulo } from "./styles";

function Perfil (){

const {usuario} = useAuth(); 
    return (
        <Container>
            <Header>
                <Titulo>Perfil</Titulo>
            </Header>
            <Conteudo>
                <BackgroundImage>
                    <Image
                        source={{
                            uri: 'https://avatars.githubusercontent.com/u/91134093?s=96&v=4'
                        }}
                        style={{
                            width: 130,
                            height: 130,
                            borderRadius: 65
                        }} 
                    />
                </BackgroundImage>
                    <Titulo> {usuario?.usuarioNome} </Titulo>
                <BotaoSair onPress ={logoff} >
                    <Sair>Sair</Sair>
                </BotaoSair>
            </Conteudo>
        </Container>
    )
}

export default Perfil;

function useAuth(): { usuario: any; } {
    throw new Error("Function not implemented.");
}
