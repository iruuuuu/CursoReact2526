import { createContext, useState } from "react";
import type { FamiliContextType, FamiliActionType } from "../types";

//Crear el contexto con createContext

const FamiliContext = createContext<(FamiliContextType & FamiliActionType) | null>(null);


//estado inicial del contexto

const estadoInicial: FamiliContextType = {
    mensaje: "Hola desde el contexto de la familia",
    contador: 0,
}

//crear el provider (aquello que envuelve a los componentes que van a consumir el contexto)

export function FamiliProvider({ children }: {children: React.ReactNode}) {
    //hooks

    const [state, setState] = useState<FamiliContextType>(estadoInicial);
    
    //funciones para cambiar los elementos del contexto
    const setMensaje = (newMessage: string) => {
        setState(prev=>({...prev, mensaje: newMessage}));
    }
    const incrementarContador = () => {
        setState(prev=>({...prev, contador: prev.contador + 1}));
    }
    const decrementarContador = () => {
        setState(prev=>({...prev, contador: prev.contador - 1}));
    }


    const value: FamiliContextType & FamiliActionType = {
        ...state,
        setMensaje,
        incrementarContador,
        decrementarContador,
    }


    //Return
    return (
        <FamiliContext value={value}>
            {children}
        </FamiliContext>
    )
}



export default FamiliContext;