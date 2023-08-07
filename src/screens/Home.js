import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Slide from '../Components/Slide'

export default function Home() {
  return (
    <div>
        <div><Navbar/></div>
        <div><Slide/></div><br></br>
        <Card/>
        <div><Footer/></div>
    </div>
  )
}
