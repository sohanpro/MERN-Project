import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'

export default function Home() {
  return (
    <div>
        <div><Navbar/></div>
        <div>Screens Body</div><br></br>
        <Card/>
        <div><Footer/></div>
    </div>
  )
}
