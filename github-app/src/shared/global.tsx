import { createContext } from "react";


export interface GlobalProps {
    username:string,
    email:string,
    password:string,
    receive_updates:boolean,
    country:string,
}

export const GlobalContext = createContext<GlobalProps>({
    username: '',
    email: '',
    password: '',
    receive_updates: false,
    country: '',
});


