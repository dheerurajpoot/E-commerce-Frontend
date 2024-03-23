import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Body = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Body
