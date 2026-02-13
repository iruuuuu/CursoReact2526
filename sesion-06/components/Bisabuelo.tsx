import Abuelo from './Abuelo'
import { useFamily } from '../hooks/useFamily'

const Bisabuelo = () => {
    const { mensaje } = useFamily();
  return (
    <div className="p-4 max-w-2xl mx-auto">
        <div className="border-4 border-purple-500 rounded-lg p-4 bg-green-50">
            <h2>Bisabuelo</h2>
        <div className="p-4 max-w-4xl mx-auto">
            <p>
                {mensaje}
            </p>
            <Abuelo/>
        </div>
        </div>
        
    </div>
    
  )
}

export default Bisabuelo