import React, { useEffect } from 'react'

const UseEffectBasico = () => {
//hooks
const [isTabActive, setIsTabActive] = useState(true)
//efectos

useEffect(() => {
    // const active = document.visibilityState==="visible"
    // setIsTabActive(active)
    // document.title = active ? "React App" : "Vuelve Pronto :("
}, [])

/**
 * Crear una tarjeta ue cambia de color si la pestaña esta activa o no y tambien el titulo de la pestaña
 */

//funciones 


  return (
    <div className={'p-8 rounded-3xl transition-all duration-300 border-2 ${isTabActive ? "bg-white border-e-sky-500 shadow-md" : "bg-slate-50 border-slate-600 opacity-60"}'}>
        <h2 className='text-2xl font-black mb-4'>El estado de la pestaña es: {isTabActive ? "Activa" : "Inactiva"}ñ</h2>
    </div>
  )
}

export default UseEffectBasico