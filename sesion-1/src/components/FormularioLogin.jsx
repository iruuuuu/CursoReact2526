import React, { useState } from 'react'
import Boton from './Boton';


interface Credenciales{
    email:string,
    password:string,
}

const FormularioLogin = () => {

    //hooks
    const [credenciales, setCredenciales] = useState<Credenciales>(null);
    const [errores, setErrores] = useState({email:"", password:""});
    const [showPassword, setShowPassword] = useState(false);



    //Efectos


const emailValido = (email:string) : boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}



    //Funciones



    const validarFormulario = () : boolean => {

        let posiblesErrores:Credenciales= {email:"", password:""};

        if(!credenciales.email.trim()){
            posiblesErrores.email=("Error , falta el email")
            return false;}
            
            else if (!emailValido(credenciales.email)){
            posiblesErrores.email=("Error , formato de email no valido")
                return false;
            }
            if(!credenciales.password.trim()){
            posiblesErrores.password=("Error , falta el password")
            return false}
            else if (!passwordValido(credenciales.password)){
                posiblesErrores.password=("Error , formato de password no valido")
                return false;
            }
        }


    function handleSubmit(e : React.FormEvent<HTMLFormElement >){
        e.preventDefault(); //prevenir el comportamiento por defecto del formulario
        if (validarFormulario()){
            console.log("Formulario valido, enviando datos...", credenciales);
            alert(`login exitoso con email: ${credenciales.email}`);
        }
    }


    //construimos el formulario de login
    return (
    <div className = "max-w-md mx-auto p-6 bg-amber-100 roundeed-lg shadow-">
        <h2 className = "text-2xl font-bold mb-6 text-center">
            Iniciar Sesion
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className= "block text-sm font-medium mb-1">
                    Email:
                </label>
                <input 
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder='tu@email.com'
                value= {credenciales.email} //la ? es para evitar errores si credenciales es null o undefined , sino existe credenciales.email daria error y se detendria la app
                onChange={ (e) => setCredenciales({
                    ...credenciales,email: e.target.value 
                })}
                />
            </div>

            <div>
                <label className= "block text-sm font-medium mb-1">
                    password:
                </label>
                <input 
                type={  showPassword ? "text" : "password" } //si showPassword es true el tipo sera text, si no sera password
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder='introduce tu password'
                value= {credenciales.password} //la ? es para evitar errores si credenciales es null o undefined , sino existe credenciales.password daria error y se detendria la app
                onChange={ (e) => setCredenciales({
                    ...credenciales,password: e.target.value 
                })}
                />
            </div>
                <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "🙉":"🙈"}</button>

            <div>
                <Boton 
                typeBoton="primary"
                onClick={() => handleSubmit}
                texto="Enviar"
                onSubmit={true}
                />
            </div>

        </form>
    </div>
    )}




export default FormularioLogin