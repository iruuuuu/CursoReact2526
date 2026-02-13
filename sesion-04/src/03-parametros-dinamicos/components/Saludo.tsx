import { Link, useParams } from "react-router-dom";

const Saludo = () => {
    const { nombre } = useParams<{nombre: string}>();
    return (
        <div className="p-20 text-center">
            <title>Hola {nombre}</title>
            <meta name="description" content={`Página de saludo para ${nombre}`}></meta>
            <div>
                <h1>Bienvenido , <span className="text-orange-500 font-bold"> {nombre}</span></h1>
                <p className="text-slate-600 mt-4">
                    Este es un saludo dinámico generado por React Router.
                </p>
                <Link to="/" className="text-orange-500 hover:text-orange-600 mt-4 block">
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
};

export default Saludo;