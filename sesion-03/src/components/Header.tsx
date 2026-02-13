import React from 'react'

const Header = () => {
  return (
     <header className='mb-12 text-center'>
          <h1 className='text-4xl font-extrabold text-slate-900 mb-4'>Menú platos <span className='text-orange-600'>PREMIUM</span></h1>
          <p>
            Explora nuestra carta de platos platosos. Usando:
            <code className='bg-sky-600 text-sky-100 px-2 rounded ml-5'>React 19</code>
          </p>
        </header>
  )
}

export default Header