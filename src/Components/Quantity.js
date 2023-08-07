import React from 'react'

export default function() {
  return (
    <div style={{paddingLeft:"250px",paddingRight:"250px"}}>
        
        <select class="form-select rounded" aria-label="Default select example">{Array.from(Array(6), function(e,i)
        {
          return(
            <option key={i+1} value={i+1}>{i+1}</option>
          )
        })}</select>
    </div>
  )
}
