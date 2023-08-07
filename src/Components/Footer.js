import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div><footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"></svg>
      </a>
      <span class="text-muted">© 2021 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><Link class="text-muted" to="https://www.flaticon.com/free-icons/facebook"><img src='../Images/facebook.png' style={{height:'25px', width:'25px'}} alt='fb'></img></Link></li>
      <li class="ms-3"><Link class="text-muted" to="https://www.flaticon.com/free-icons/facebook"><img src='../Images/github.png' style={{height:'25px', width:'25px'}} alt='git'></img></Link></li>
      <li class="ms-3"><Link class="text-muted" to="https://www.flaticon.com/free-icons/facebook"><img src='../Images/linkedin.png' style={{height:'25px', width:'25px'}} alt='linkdin'></img></Link></li>
    </ul>
  </footer></div>
  )
}
