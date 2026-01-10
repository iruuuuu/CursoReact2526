import React from 'react';

let nombreTS : string = 'TypeScript';
let edadTS : number = 10;
let isAdminTS: boolean = false;
let nuloTS: null = null;
let indefinidoTS: undefined = undefined;

let lenguajes: string[] = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#']; 
let arrayTS: number[] = [1, 2, 3, 4, 5];


const usuarios:{nombre:string, edad:number}[] = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'María', edad: 30 },
  { nombre: 'Pedro', edad: 28 },
];


//objeto simple tipado
const persona: {nombre:string, edad:number, isAdmin:boolean} = {
  nombre: 'Ana',
  edad: 28,
  isAdmin: true
};


//si accedo a  persona.apellido me da error porque no existe esa propiedad


// ** INTERFACES ** //
//Las interfaces son "contratos" que definen la forma de un objeto

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad?: number;
  isAdmin: boolean;
}

const usuario1: Usuario = {
  id: 1,
  nombre: "Mario",
  email: "mario@gmail.com",
  isAdmin: false
};

const usuario2: Usuario = {
  id: 2,
  nombre: "Lucas",
  email: "lucas@gmail.com",
  edad: 22,
  isAdmin: false
};




function sumar(a: number, b: number): number {
  return a + b;
}

function saludar(nombre: string): void {
  console.log(`Hola, ${nombre}`);
}


//funciones con parametros opcionales...
function crearUsuario(nombre: string, edad?: number): Usuario {
    return {
        id: Date.now(),
        nombre: nombre, //nombre solo es posible
        email: `${nombre.toLowerCase()}@gmail.com`,
        edad,
        isAdmin: false
    };
}


//union tyes (posibles valores que puede tomar una variable)
let estado: 'activo' | 'inactivo' | 'pendiente';
type Tamano = 'pequeño' | 'mediano' | 'grande';

let talla : Tamano = 'mediano';

//--------------- CUANDO USAR TYPES Y CUANDO USAR INTERFACES ------------------//
//Usar Types con primitivos y uniones
//Usar interfaces con Objetos 

//Ejemplo:
type ID = string | number;

type EstadoCuenta = 'activo' | 'inactivo' | 'pendiente';

interface Persona{
  nombre: string;
  email: string;
}


interface Empleado extends Persona {
  idEmpleado: ID;
  estado: EstadoCuenta;
}


const empleado1: Empleado = {
  idEmpleado: 1,
  nombre: 'Juan',
  email: 'juan@',
  estado: 'activo'
}



const Recuerdo = () => {
  return (
    <div>
        Recuerdo
    </div>
  );
}

export default Recuerdo