/**
 * Ejercicio 1 Component
 * Crear una interfaz  producto que tenga id , nombre , precio , displonibilidad y opcionalmente categoria
 * Implementar una funcion llamada calcularTotal que reciba un array de tipo Producto y retorne un numero y que sume todos los precios de los productos disponegbles
 * Crea un array de productos con al menos 3 productos diferentes 
 * Probar la funcion 
 */

import React from 'react'

export default function Ejercicio1() {

    interface Producto {
        id: number;
        nombre: string;
        precio: number;
        disponibilidad: boolean;
        categoria?: string;
    }



        const productos: Producto[] = [
        { id: 1, nombre: 'Producto A', precio: 100, disponibilidad: true, categoria: 'Categoria 1' },
        { id: 2, nombre: 'Producto B', precio: 200, disponibilidad: false },
        { id: 3, nombre: 'Producto C', precio: 150, disponibilidad: true, categoria: 'Categoria 2' },
    ];

function calcularTotal ( productos: Producto[] ) : number {
    let total = 0;
    producto.forEach( prod => {
        if (prod.disponibilidad) {
            total += prod.precio;
        }
    });
    return total;
}




  return (
    <div>
        <h1> Ejercicio 1 </h1>
        <p> {calcularTotal(productos)} </p>
    </div>
  )
}
