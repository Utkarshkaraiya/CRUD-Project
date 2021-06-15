import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
  <a class="navbar-brand" href="#">React User</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" >
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home / Form
        </Link>
      </li>
     
    </ul>
    </div>
    <Link 
    style={{color:"white" ,backgroundColor: "primary",border:"1px solid white" ,padding:"6px", textDecoration: "none" }}
    to="/users/add"
    >Add User</Link>
  </div>
</nav>
        </div>
    )
}
