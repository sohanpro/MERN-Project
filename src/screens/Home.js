import React, { useEffect, useState, createContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import Slide from '../Components/Slide';
const CardContextName = createContext();
const CardContextOptions = createContext();
const CardContextimage = createContext(); 
const CardContextdescription = createContext();
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
              //console.log("data:", data);
              return (<div><div key={data._id} className='fs-4 m-3 center'  >{data.CategoryName}</div><hr></hr>
              {foodItems.length !==0 
              ?
              foodItems.filter((item)=>
              
                item.CategoryName === data.CategoryName
              ).map(function(filteritem){
                return(<div key={filteritem._id}>
                 
                <CardContextName.Provider value={filteritem.name}>
                <CardContextOptions.Provider value={filteritem.options}>
                <CardContextimage.Provider value={filteritem.img}>
                <CardContextdescription.Provider value={filteritem.description}>
                <Card 
                ></Card>
                </CardContextdescription.Provider>
                </CardContextimage.Provider>
                </CardContextOptions.Provider>
                </CardContextName.Provider>
                
                </div>)
              })
              
              : <div>Null</div>
              }
              </div>)
            })
          : <div>No data available</div>
        }
      </div>
      
      <div><Footer/></div>
    </div>
  );
}
export {CardContextName,CardContextOptions,CardContextimage,CardContextdescription}
