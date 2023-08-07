import React from 'react';
import { Link } from 'react-router-dom';
import Quantity from './Quantity';
import FoodSize from './FoodSize';

export default function SingleCard() {
  return (
    <div>
      <div className="card">
        <h5 className="card-header">Featured</h5>
        <div className="card-body" style={{ textAlign: 'center' }}>
          <img src="/Images/food.jpeg" alt="Food" width={200} height={200} />
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
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
