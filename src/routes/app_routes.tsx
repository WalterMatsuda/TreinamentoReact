import React from "react";
import Home from "../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detalhes from "../screens/detalhes";
const Stack = createNativeStackNavigator();

function AppRoutes() {
    return (

        <Stack.Navigator  
        screenOptions={{
            headerShown : false 
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detalhes" component={Detalhes} />

        </Stack.Navigator>
    );

}
export default AppRoutes;
