import {Link}from 'react-router-dom'
import React from "react"
const Navbar = () => {
  return (
    <div className = "navbar">
      <div className = "container">
        <nav className = "navbar__nav">
          <h3 className = "nav__brand">
            <Link to = "/"><i className = "fas fa-video"></i><div><h1>TVmaze</h1><h1>Search your favorite shows</h1></div></Link>
          </h3>
          <ul className = "nav__links">
            <li className = "links__link">
              <Link to="/"><input type = "radio" value= "Show"/>Shows</Link>
            </li>
            <li className = "links__link">
              <Link to = "/actor"><input type = "radio" value= "Actor"/>Actor</Link>
            </li>            
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar