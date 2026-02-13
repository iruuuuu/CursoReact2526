// api hara un fetching a mi api para traer todos los platos


//me traigo 1 objeto de la data , luego me creo una interfaz

export interface Plato {
    id: number;
    nombre: string;
    categoria: string;
    origen:string;
}

import { API_CONFIG } from "../types";
export const fetchPlatos = async () :Promise<Plato[]> => {
    const url=`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PLATOS}`;
    try{
        const response = await fetch (url);
        if(!response.ok){
            throw new Error('Error al obtener los platos');
        }
        return await response.json();
    }catch(error){
        console.log(error);
        throw error
        
    }

}   