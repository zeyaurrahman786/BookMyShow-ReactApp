import { useState } from 'react'
import './App.css'
import NavBar from './Component/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import OneMOvieCard from './Component/Cards/OneMOvieCard'
import AllCard from './Component/CombineDataCard/AllCard'
import Home from './Component/Home'


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={} /> */}
        <Route path='/movies/:id' element={<OneMOvieCard />} />
        <Route path='/AllCard' element={<AllCard />} />
      </Routes>

    </>
  )
}

export default App