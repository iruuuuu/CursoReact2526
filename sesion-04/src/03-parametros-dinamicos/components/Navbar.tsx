import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-slate-800 p-4 text-white shadow-md mb-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    <Link 
                    to="/" 
                    className="hover:text-orange-400">
                        Mi App
                    </Link>
                </h1>

                    <NavLink 
                    to="/services" 
                    className={({isActive}) => isActive ? "text-orange-400" : "hover:text-orange-400"}>
                        Servicios
                    </NavLink>
                <div className="flex gap-4">
                    <NavLink 
                        to="/" 
                        className={({isActive}) => isActive ? "text-orange-400 transition" : "hover:text-orange-400 transition"}
                    >
                        Inicio
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({isActive}) => isActive ? "text-orange-400 transition" : "hover:text-orange-400 transition"}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={({isActive}) => isActive ? "text-orange-400 transition" : "hover:text-orange-400 transition"}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
