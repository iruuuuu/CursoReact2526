/*
*   crear un servicio llamado api.ts que contemple las funcionalidades para de como seria un fechtBooks , fetchbooksbyid
construir aqui la bsse de variables qeu apunten a los libros
*/

import type { Book } from "../types/book";



const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL = `${BASE_URL}/api/books`;
const Images_url = `${BASE_URL}`;

export const fetchBooks: () => Promise<Book[]> = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data;
};

export const fetchBookById: (id: number) => Promise<Book> = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
}

