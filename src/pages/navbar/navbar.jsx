import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navbar.css'
const Navbar = () => {
  return (
    <div className = "Navbar">
        <div className = "Links">
            <Link to = "/" className="Link"> Shop </Link>
            <Link to = "/cart"className="Link"> Cart </Link>
            <Link to = "/about" className="Link"> About </Link>
        </div>
    </div>
  )
}

export default Navbar