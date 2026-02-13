import React, { useActionState, useState } from 'react'
//Uso de formularios ocn TypeScript

interface Usuario{
    nombre:string,
    edad:number,
    email:string
}

export const Ejercicio3 = () => {

    const [usuario, setUsuario] = useState<Usuario>({nombre:"",edad:0,email:""});//const [usuario, setUsuario] = useState<Usuario>({nombre:"",edad:0,email:""})
    
    const actualizarCampo =(campo: keyof Usuario, valor:string|number) =>{
        setUsuario({
            ...usuario,
            [campo]:valor
        })
    }

  return (//Uso de formularios ocn TypeScript
    <>
    <div>Ejercicio3</div>
    <p>Introduce tu nombre:</p>
    <input value={usuario.nombre} onchange={ (e) => actualizarCampo("nombre", e.target.value)} />
    </>


  )
}//Uso de formularios ocn TypeScript


