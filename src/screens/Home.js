//import React,{useState} from 'react'
import React,{useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Slide from '../Components/Slide'

export default function Home() {

  // const [foodcategory,setfoodcategory] = useState([]);
  // const [foodItems,setfoodItems] = useState([]);

   console.log("hi")
  async function loadData() {
    try {
      
      let response1 = await fetch("http://localhost:5000/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response1.ok) {
        throw new Error(`HTTP error! Status: ${response1.status}`);
      }
      response1 = await response1.json();
      console.log(response1[0], response1[1]);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  

 useEffect(()=>
 {
  console.log("hi")
  loadData()
 },[])






  return (
    <div>
        <div><Navbar/></div>
        <div><Slide/></div><br></br>
        <Card/>
        <div><Footer/></div>
    </div>
  )
}
