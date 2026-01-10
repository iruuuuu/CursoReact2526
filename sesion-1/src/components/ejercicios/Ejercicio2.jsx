//como tipar un estado 

import React, { useState } from 'react'



interface Usuario {
    nombre: string;
    edad: number;
    email:string;
}

interface Producto {
    id: number;
    nombre: string;
    precio: number;
    
}

//Type para datos primitivos o uniones
type Estado = "pendiente" | "aprobado" | "rechazado"



//modo dios.....
//voy a creat un type llamado CamposUsuario que tenga como posibles valores las claves de la interfaz Usuario
type CampoUsuario = keyof Usuario

export const Ejercicio2 = () => {
    const [usuario, setUsuario] = useState<Usuario>({nombre:"", edad:0});
    //const [usuario, setUsuario] = useState<Usuario | null >(null);
    const [productos, setProductos] = useState<Producto | null> (null)
    //cuando lo vaya a renderizar podre gestionar con el null si hay o no productos
    const [estado, setEstado] = useState<Estado>("pendiente"); //la variable de estado inicia en estado pendiente



    if (productos ===null){
        return <p>Cargando datos</p>
    }else{
        <h1>{productos.nombre}</h1>
    }

    let campo : CampoUsuario="nombre"; //solo podre asignar a campo una de las claves de la interfaz Usuario


}

export default Ejercicio2
