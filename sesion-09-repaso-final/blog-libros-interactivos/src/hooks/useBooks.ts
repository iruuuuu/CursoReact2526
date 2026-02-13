/**
un hook que permita gestionar la carga de libros manteniendo el estado de errores y si estamos o no estamos cargando
 * 
 */

import type { Book } from "../types/book";
import { useEffect, useState } from "react";

interface UseBooksResult {
    books: Book[] | null;
    loading: boolean;
    error: string | null;
}

export function useBooks(): UseBooksResult {
    const [books, setBooks] = useState<Book[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    const cargarLibros = async () => {
        setLoading(true);
        setError(null);
        fetchBooks()
            .then((data) => {
                setBooks(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };
}



useEffect(() => {
    cargarLibros();
}