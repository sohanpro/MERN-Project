import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import Slide from '../Components/Slide';

export default function Home() {
  const [foodcategory, setFoodcategory] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

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

      const data = await response1.json();

      // Now, set the state with the fetched data
      setFoodcategory(data[0]);
      setFoodItems(data[1]);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div><Navbar/></div>
      <div><Slide/></div><br></br>
      <div className='container'>
        {foodcategory.length !== 0
          ? foodcategory.map(function(data) {
              console.log("data:", data);
              return <div key={data.id}>Hello World</div>;
            })
          : <div>No data available</div>
        }
      </div>
      <Card/>
      <div><Footer/></div>
    </div>
  );
}
