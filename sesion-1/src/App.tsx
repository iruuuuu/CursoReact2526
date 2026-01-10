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
 * Crear un componente que gestione una lista de contactos  el usuario pueda agregar y eliminar contactos para ello los requisitos son:
 * 
 * - Crear una interfaz Contacto con el id , nombre, telefono y email
 * -El componente debe de tenerner un pormulario con 3 inputs nombre, telefono y email y un boton para agregar el contacto , una lista que muestre todos los contactos , un boton para eliminar el contacto.
 * Las funcionalidades deben de ser : 
 * - agregar contacto (generar un id automatico con alguna libreria npm )
 * - eliminar contacto por su id 
 * -limpiar el formulario despues de limpiar 
 * -mostrar un mensaje sino hay contactos almacenados
 */



/**
 * login de validacion basica
 * - email y password
 * hay que validadr que los campos no esten vacios 
 * hay que validar con alguna expresion regular que el email tenga un formato valido
 * hay que mostrar/ocultar la contraseña con un boton
 * hay que mostrar mensajes de error personalizados
 * 
 */