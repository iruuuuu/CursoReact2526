import Nieto from './Nieto'
import { useFamily } from '../hooks/useFamily'


const Hijo = () => {
  const { incrementarContador, decrementarContador } = useFamily();

  return (
        <div className="border-4 border-green-500 rounded-lg p-4 bg-green-50">
            <h2>Hijo</h2>
            <div className="flex gap-2 my-2">
              <button 
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={incrementarContador}
              >
                Incrementar
              </button>
              <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={decrementarContador}
              >
                Decrementar
              </button>
            </div>
            <Nieto/>
        </div>
  )
}

export default Hijo