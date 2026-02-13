import React from 'react'

interface BotonProps{
    texto:string,
    tipoBoton: "primary" | "secondary" | "danger",
    onClick: () => void,
}



const Botonn = ({texto, tipoBoton, onClick, onSubmit = false}: BotonProps) => {
    const estilos = {
        primary: "bg-blue-500 hover:bg-blue-700 text-white",
        secondary: "bg-gray-500 hover:bg-gray-700 text-white",
        danger: "bg-red-500 hover:bg-red-700 text-white"
    }
}

  return (
    <button
        type={onSubmit ? "submit" : "button"}
        className={`px-4 py-2 rounded font-semibold shadow transition  ${estilos[tipoBoton]}`}
        onClick={onClick}
    >
        {texto}
    </button>
    )

export default Boton