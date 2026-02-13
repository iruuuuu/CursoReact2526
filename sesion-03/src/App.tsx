import PlatosList from './components/PlatosList'
import { Suspense } from 'react'
import Header from './components/Header'
import LoadingFallback from './components/LoadingFallback'
import { useState } from 'react'
import { fetchPlatos } from './utils/api'
import ErrorBangding from './components/ErrorBangding'

const App = () => {
  //hooks ; son promesas
  const [platosPromise]=useState(()=>fetchPlatos())

  return (
    <div className='min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
            <Header/> 
            <main>
              <Suspense 
              fallback={<LoadingFallback message="Cocinando para ti" />}>
                <PlatosList platosPromise={platosPromise}/>
              </Suspense>
            </main>
        </div>
    </div>
  )
}

export default App