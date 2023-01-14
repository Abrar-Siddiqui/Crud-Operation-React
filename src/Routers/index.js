import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Container/Home'
import Header from '../Components/Header'
import CreateData from '../Container/CreateData'
import UpdateData from '../Container/UpdateData'

const Routers = () => {
  return (
    <div>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/create' element={<CreateData />}/>
                <Route path='/update' element={<UpdateData />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routers