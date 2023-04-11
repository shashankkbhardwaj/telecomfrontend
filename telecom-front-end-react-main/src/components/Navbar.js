import React from 'react'
import {Link, useNavigate} from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('username')

    navigate("/")
  }

  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">STeL</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="/plans">Mobile Plans</a></li>
        <li className="nav-item"><a className="nav-link" href="/broadband">Broadband Plans</a></li>
     </ul>
       {!localStorage.getItem('token')?<form className="d-flex">
          <Link className="btn btn-outline-success mx-1" role="button" to="/login">Login</Link>
          <Link className="btn btn-outline-success mx-1" role="button" to="/signup">SignUp</Link>
        </form>: <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li><Link className="nav-bag mx-3" to="/cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg>
            <span className="bag-quantity">
              <span>3</span>
              </span>
        </Link></li> */}

        <li className="nav-item  dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/orders">Orders</Link></li>
            <li><Link className="dropdown-item" to="/account">Account Detail</Link></li>
          </ul>
        </li>
        <li className="nav-item"><a className="btn btn-outline-success mx-1" onClick={handleLogout} href="/">Logout</a></li>
        </ul>
        </div>
        }
    </div>
  </div>
</nav>
  )
}
