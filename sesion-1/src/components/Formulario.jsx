/**
 * crear un formulario formularioUsuario que gestione el nombreUsuario y el email usuario
 */


import React from 'react'

interface Usuario {
    nombreUsuario: string;
    emailUsuario: string;
    edad: number;
}



const Formulario = () => {
const [usuario, setusuario] = useState<Usuario>({nombreUsuario:"", emailUsuario:"", edad:0});

const actualizarCampo =(campo: keyof Usuario, valor:string|number) =>{
    setusuario({
        ...usuario,
        [campo]:valor
    })
}

const handleSubmit = (e: React.FormEvent) => {
    e.preventeDefault();
}

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow'>
        <h3 className='text-xl font-bold mb-4'>
            Formulario
        </h3>
        <form onSubmit={handleSubmit}className='space-y-4'>
            <div>
                <label className='block text-sm font-medium mb-2'>
                    Nombre de usuario:
                </label>
                <input
                type="text"
                value={usuario.nombre}
                className='w-full px-3 py-2 border-gray-400 rounded focus:focusoutline-none focus:ring-blue-500'
                onChange={(e)=> {actualizarCampo("nombre",e.target.value)}}
                required
                />
            </div>
            <div>
                <label className='block text-sm font-medium mb-2'>
                    Email de usuario:
                </label>
                <input
                type="email"
                value={usuario.email}
                className='w-full px-3 py-2 border-gray-400 rounded focus:focusoutline-none focus:ring-blue-500'
                onChange={(e)=> {actualizarCampo("email",e.target.value)}}
                required
                />
            </div>
                        <div>
                <label className='block text-sm font-medium mb-2'>
                    Edad de usuario:
                </label>
                <input
                type="edad"
                value={usuario.edad}
                className='w-full px-3 py-2 border-gray-400 rounded focus:focusoutline-none focus:ring-blue-500'
                onChange={(e)=> {actualizarCampo("edad",Number(e.target.value))}}
                required
                />
            </div>

            <button type="submit" className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
                Enviar
            </button>

            guardar Usuario
            <div className='mt-6 mb-6 p-4 bg-gray-100 rounded'>
                
            </div>
        </form>
    </div>
)
}

export default Formulario