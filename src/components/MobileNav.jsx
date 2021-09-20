import React from 'react'
import { Link } from 'react-router-dom'
import "./MobileNav.css"
function MobileNav({toggle}) {
    return (
        <div className={`mobile__nav ${toggle && "mobile__nav__enable"}`}>
            <ul>
                <li>
                    <div><Link to="/work">Works</Link></div>
                </li>
                <li>
                    <div><Link to="/blog">Blog</Link></div>
                </li>
            </ul>
        </div>
    )
}

export default MobileNav
