import { createContext } from "react";

interface IAuthContext{
    usuario : string;
    AutenticarComIAS(): Promise<void>;
    logoff(): Promise<void>;


}

export const AuthContext = createContext({} as IAuthContext);
