import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Quantity from './Quantity';
import FoodSize from './FoodSize';
import { CardContextName,CardContextimage,CardContextOptions,CardContextdescription } from '../screens/Home';
export default function SingleCard(props) {
 const name  = useContext(CardContextName)
 const Image = useContext(CardContextimage)
 const option = useContext(CardContextOptions)
 const description = useContext(CardContextdescription);

  return (
    <div >
      <div className="card" >
        <h5 className="card-header">Featured</h5>
        <div className="card-body" style={{ textAlign: 'center' }}>
          <img src={Image} alt="Food"  height="500px" width="500px"/>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className='container w-100' style={{ marginBottom: '10px', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Quantity /><FoodSize />
            <div className='d-inline h-100 fs-5'>
            Total Prize:
          </div>
          </div>
          
          <Link to="/" className="btn btn-primary">Go to Cart</Link>
        </div>
      </div>
    </div>
  );
}
