import { useFamily } from '../hooks/useFamily'
import Padre from './Padre'

const Abuelo = () => {
  const { contador } = useFamily();
  
  return (
        <div className="border-4 border-red-500 rounded-lg p-4 bg-green-50">
            <h2>Abuelo</h2>
            <p>El contador es: {contador}</p>
            <div className='mt-4 ml-4 border-4 border-blue-500 rounded-lg p-4 bg-blue-50'>
            <Padre/>
            </div>
        </div>
  )
}

export default Abuelo