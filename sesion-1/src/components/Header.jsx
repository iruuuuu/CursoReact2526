/**
 * Crear un componente header estilado con typescript donde aparezcan nuestros datos 
 */


import React from 'react'

function Header() {
  return (
    <header className='bg-blue-600 text-white p-4 shadow'>
        <div>
            <h2> Ian AT Componentes en React</h2>
        </div>
    </header>
  )
}

export default Header
