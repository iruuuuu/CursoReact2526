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


import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


interface Contacto{
    id:number,
    nombre:string,
    telefono:number,
    email:string,
}


const ListaContactos = () => {

    // Estado para la lista de contactos
  const [contactos, setContactos] = useState([]); //setContactos se inicializa como un array vacio

  // Estado para los campos del formulario
  const [formulario, setFormulario] = useState({
    nombre: '',
    telefono: '',
    email: ''
  });

  // Manejar cambios en los inputs
  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value //esto permite actualizar el campo correspondiente
    });
  };

  // Función para agregar contacto
  const agregarContacto = (e) => {
    e.preventDefault();

    // Validación básica
    if (!formulario.nombre || !formulario.telefono || !formulario.email) {
        alert("Por favor, rellena todos los campos");
        return;
    }

    const nuevoContacto = {
        ...formulario,
        id: uuidv4() // Genera ID automático
    };

    setContactos([...contactos, nuevoContacto]);

    // Limpiar el formulario
    setFormulario({ nombre: '', telefono: '', email: '' });
    };
    
  // Función para eliminar contacto
    const eliminarContacto = (id) => {
    const nuevaLista = contactos.filter(contacto => contacto.id !== id);
    setContactos(nuevaLista);
    };
    
    return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
    <h2>Agenda de Contactos</h2>

        {/* Formulario */}
        <form onSubmit={agregarContacto} style={{ marginBottom: '20px' }}>
        <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={formulario.telefono}
            onChange={manejarCambio}
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <input
            type="email"
            name="email"
            placeholder="Email"
            value={formulario.email}
            onChange={manejarCambio}
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <button type="submit" style={{ cursor: 'pointer' }}>Agregar Contacto</button>
        </form>

        <hr />

        {/* Lista de Contactos */}
        <h3>Contactos Guardados</h3>
        {contactos.length === 0 ? (
        <p>No hay contactos almacenados.</p>
        ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {contactos.map((contacto) => (
            <li key={contacto.id} style={{ 
              border: '1px solid #ccc', 
              padding: '10px', 
              marginBottom: '10px',
              borderRadius: '5px'
            }}>
              <p><strong>Nombre:</strong> {contacto.nombre}</p>
              <p><strong>Tel:</strong> {contacto.telefono}</p>
              <p><strong>Email:</strong> {contacto.email}</p>
              <button 
                onClick={() => eliminarContacto(contacto.id)}
                style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaContactos