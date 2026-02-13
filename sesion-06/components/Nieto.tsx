import { useState } from "react";
import { useFamily } from "../hooks/useFamily";

const Nieto = () => {
  const { mensaje, setMensaje } = useFamily();
  const [newMensaje, setNewMensaje] = useState("");
  return (
    <>
        <div className="border-4 border-yellow-500 rounded-lg p-4 bg-yellow-50">
            <h2>Nieto</h2>
        </div>
          <p>
            el mensaje del contexto es
            <br />
            {mensaje}


            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setMensaje("Hola desde el nieto")}>Cambiar mensaje</button>
          </p>
          <input 
            type="text"
            value={newMensaje}
            onChange={(e)=>setNewMensaje(e.target.value)}
          />
    </>

  )
}

export default Nieto