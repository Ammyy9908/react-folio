import React from 'react'
import "./Navbar.css"
import menu from "../assets/img/menu.png"
import { Link } from 'react-router-dom';
function Navbar({toggle,setToggle}) {

    return (
        <div className="navbar">
           <div className="navbar__wrapper">
           <nav>
                <ul>
                    <li>
                        <div><Link to="/work">Works</Link></div>
                    </li>
                    <li>
                        <div><Link to="/blog">Blog</Link></div>
                    </li>
                </ul>
            </nav>
            <label htmlFor="hamburger" className="hamburger">
                <img src={menu} alt="menu-icon" />
                <input type="checkbox" name="hamburger" id="hamburger" onChange={()=>setToggle(!toggle)}/>
            </label>
           </div>
        </div>
    )
}

export default Navbar
