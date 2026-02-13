//Tipos globales
export type FamiliContextType = {
    mensaje: string;
    contador: number;
}

//acciones a realizar
export type FamiliActionType = {
    setMensaje: (mensaje: string) => void;
    incrementarContador: () => void;
    decrementarContador: () => void;
}