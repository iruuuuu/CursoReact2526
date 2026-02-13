import { API_CONFIG } from "./types";
import { useFetch } from "./hooks/useFetch";
import { type Plato } from "./types";
import Header from "./components/Header";
import LoadingFallback from "./components/LoadingFallback";
import PlatoCard from "./components/PlatoCard";


const App18 = () => {
    const url=`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PLATOS}`;
    const {data :platos ,loading,error} = useFetch<Plato[]>(url)
return (
  <div className='min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8'>
    <div className='max-w-7xl mx-auto'>
      <Header />
      <main>
        {loading && <LoadingFallback message="Consultando menu tradicional" />}
        {error && <div>Lo siento, hubo un error</div>}
        {platos && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {platos.map((plato: Plato) => (
              <PlatoCard key={plato.id} plato={plato} />
            ))}
          </div>
        )}
      </main>
    </div>
  </div>
);


}


export default App18
