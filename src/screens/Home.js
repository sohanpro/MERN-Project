import React, { useEffect, useState, createContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';

const CardContextName = createContext();
const CardContextOptions = createContext();
const CardContextimage = createContext(); 
const CardContextdescription = createContext();
export default function Home() {
  const [foodcategory, setFoodcategory] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search,setSearch] = useState('');
  

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
      <div><div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" id="carousel">
        <div className="carousel-item active">
          <img
            src="https://source.unsplash.com/random/?chowmein"
            className="d-block w-100"
            style={{ objectFit: 'cover', height: '600px' }} alt='food'
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/?burger"
            className="d-block w-100"
            style={{ objectFit: 'cover', height: '600px' }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/?pizza"
            className="d-block w-100"
            style={{ objectFit: 'cover', height: '600px' }}
            alt="..."
          />
        </div>
        <div className="carousel-caption d-none d-md-block" style={{ zIndex: '10' }}>
          <div className="d-flex justify-content-center">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            {/* <button className="btn btn-outline-success text-white bg-success" type="submit">
              Search
            </button> */}
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div><br></br>
      <div className='container'>
        {foodcategory.length !== 0
          ? foodcategory.map(function(data) {
              //console.log("data:", data);
              return (<div><div key={data._id} className='fs-4 m-3 center'  >{data.CategoryName}</div><hr></hr>
              {foodItems.length !==0 
              ?
              foodItems.filter((item)=>
              
                (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))
              ).map(function(filteritem){
                return(<div key={filteritem._id}>
                 
                <CardContextName.Provider value={filteritem.name}>
                <CardContextOptions.Provider value={filteritem.options[0]}>
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
