import React from 'react';
import Header from './components/Header';
import { Saludo } from './components/Saludo';
import Tarjeta from './components/Tarjeta';
import Formulario from './components/Formulario';

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Header/>
      <main className='container bg-gray-100 mx-auto p-4'>
        <Saludo nombre='Carlos' edad={35} />
        <Saludo nombre='Carlos' edad={35} />
        <Saludo nombre='Carlos' edad={35} />

        <div className='my-8'>
          <Tarjeta
            title="React"
            description="Biblioteca de JavaScript para construir interfaces de usuario"
            imageUrl="https://reactjs.org/logo-og.png"
            favorite={true}
          />
          <Tarjeta
            title="TypeScript"
            description="Lenguaje de programación que extiende JavaScript con tipos estáticos"
            imageUrl="https://www.typescriptlang.org/images/branding/logo-grouping.svg"
          />
        </div>
        <Formulario />
      </main>
    </div>
  );
};

export default App;






/**
 * login de validacion basica
 * - email y password
 * hay que validadr que los campos no esten vacios 
 * hay que validar con alguna expresion regular que el email tenga un formato valido
 * hay que mostrar/ocultar la contraseña con un boton
 * hay que mostrar mensajes de error personalizados
 * 
 */