import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const Home = lazy(() => import('./pages/Home'))

const App = () => {
  return (
    <div>
      <Navbar/>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App