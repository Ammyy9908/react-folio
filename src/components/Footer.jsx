import React from 'react'
import "./Footer.css"
import fb from "../assets/img/fb.png"
import insta from "../assets/img/insta.png"
import Linkedin from "../assets/img/Linkedin.png"
import twitter from "../assets/img/twitter.png"
function Footer() {
    return (
        <footer>
            <div className="footer__wrapper">
                <div className="social__links">
                    <a href="#fb"><img src={fb} alt="" /></a>
                    <a href="#insta"><img src={insta} alt="" /></a>
                    <a href="#twitter"><img src={twitter} alt="" /></a>
                    <a href="#linkedin"><img src={Linkedin} alt="" /></a>
                </div>
                <p>Copyright ©2020 All rights reserved </p>
            </div>
        </footer>
    )
}

export default Footer
