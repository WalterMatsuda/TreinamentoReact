import React from "react";
import { BotaoLogar, Container, Label } from "./style";
import PokebolaLogin from "../../assets/PokebolaLogin.svg";
import { useAuth } from "../../hooks/auth";
function Login() {

    const { autenticarComIAS } = useAuth();

    return (
        <Container
            color={['#133ABC', '#133ABD']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0 }}>
            <PokebolaLogin />
            <BotaoLogar onPress={autenticarComIAS}>
                <Label>Autenticar com o IAS</Label>

            </BotaoLogar>

        </Container>

    )
}
export default Login;