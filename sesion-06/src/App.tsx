import Bisabuelo from '../components/Bisabuelo'
import { FamiliProvider } from '../context/FamiliContext'

const App = () => {
  return (
    <FamiliProvider>
      <Bisabuelo/>
    </FamiliProvider>

  )
} 

export default App