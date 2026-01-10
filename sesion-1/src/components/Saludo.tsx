//un saludo personalizado atraves de las props

import React from 'react'


interface Saludo {
    nombre:string,
    edad:number
}



export const Saludo = ({nombre,edad}:Saludo) => {
  return (
    <div className='p-4 bg-yellow-300 rounded-lg shadow mb-4'>
        <h2 className='text-xl font-semibold'>Hola {nombre} </h2>
        <p className= 'text-black-300 font-medium'>Tienes {edad} años</p>
    </div>
  )
}

export default Saludo
