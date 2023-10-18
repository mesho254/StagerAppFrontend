import React from 'react'
import NavBar from '../components/AppBar'
import Search from '../components/Search'
import TransportCard from '../components/Card'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <NavBar/>
      <Search/>
      <TransportCard/>
      <Footer/>
    </div>
  )
}

export default Home
