import Hijo from './Hijo'
import { useFamily } from '../hooks/useFamily'

const Padre = () => {
  const { contador } = useFamily();
  
  return (
        <div className="p-4 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md">
            <h2>Padre</h2>
            <p className="text-lg font-semibold text-blue-600">Contador modificado: {contador}</p>
            <Hijo/>
        </div>
  )
}

export default Padre