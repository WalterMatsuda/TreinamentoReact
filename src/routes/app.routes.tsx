import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Detalhes from "../screens/Detalhes";
import Perfil from "../screens/Perfil";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favoritos from "../screens/Favoritos";
import { useTheme } from "styled-components";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 

function AppRoutes() {
    const tema = useTheme();

    return (

        <Tab.Navigator screenOptions={{headerShown: false , tabBarActiveTintColor : tema.fire , tabBarInactiveTintColor : tema.ligth_gray }}>
            <Tab.Screen name = "Home" component={Home} options={{ tabBarIcon : (({size , color})=>(
                <MaterialIcons
                name="home" size={size} color={color}/>
            ) ) }}
             />
            <Tab.Screen name = "Favoritos" component={Favoritos}  options={{ tabBarIcon : (({size , color})=>(
                <MaterialIcons
                name="home" size={size} color={color}/>
            ) ) }} />
            <Tab.Screen name = "Perfil" component={Perfil}  options={{ tabBarIcon : (({size , color})=>(
                <MaterialIcons
                name="home" size={size} color={color}/>
            ) ) }}/>

        </Tab.Navigator>
    )
}

function  HomeStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={ Home} /> 
            <Stack.Screen name="Detalhes" component={ Detalhes}/>
        </Stack.Navigator>

    )
}

function PerfilStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="PerfilScreen" component={ Perfil } />
        </Stack.Navigator>

    )
}

export default AppRoutes;