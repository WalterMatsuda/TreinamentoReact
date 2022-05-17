import React from "react";
import { Container } from "./style";
import PokebolaLogin from "../../assets/animations/pokeball-load.json"
function Login(){
    return(
        <Container
        color={[ '#133ABC' , '#133ABD' ]}
        start={{x:0 , y: 0}}
        end={{x:0 , y:0}}>
            <PokebolaLogin />
            <BotaoLogar>
        <Label>Autenticar com o IAS</Label>

            </BotaoLogar>

        </Container>

    )
}
export default Login;