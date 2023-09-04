import { CardContextOptions } from '../screens/Home'
import React, { useContext } from 'react'




export default function FoodSize() {

  let option = useContext(CardContextOptions)
  let priceOptions = Object.keys(option)

  return (
    <div style={{paddingLeft:"250px",paddingRight:"250px"}}>
        
        <select class="form-select rounded" aria-label="Default select example">
            
        
            {priceOptions.map((data)=>
            {
              return <option key={data} value={data}>{data}</option>
            })}
          </select>
    </div>
  )
}
