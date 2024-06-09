import React from 'react'
import Footer from '../componenets/Footer'
import Freebook from '../componenets/Freebook'
import Banner from '../componenets/Banner'
import Navbar from '../componenets/Navbar'

function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Freebook/>
      <Footer/>
    </>
  )
}

export default Home
