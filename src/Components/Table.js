import React from 'react'

import SingleCard from './SingleCard'
export default function Table
(props) {
  return (
    <div>
        <table class="table-primary" className="col-12 col-md-6 col-lg-3">

<tr>
    <td>
    <SingleCard detail={{...props}}/>
    </td>
    

</tr>

</table>
    </div>
  )
}
