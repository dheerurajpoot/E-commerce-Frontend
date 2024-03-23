import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './pages/Body';
import Home from './pages/Home';
import Shop from './pages/Shop';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Body/>}>
              <Route index element={<Home/>}/>
              <Route path='/shop' element={<Shop/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
