import { NavLink, useNavigate, Link} from "react-router"
import {motion} from 'motion/react'
import './header.css'
// My Costume Hooks
import useIcon from "../../Hooks/useIcon"

import logo from '/logo.png'
import { useState } from "react"

export default function Header(){
    const [navBarMarginLeft, setNavBarMarginLeft] = useState('-56vw')
    // THIS FUNCTION IS TO CREATE OBJECT OF LINKS
    function link(url, tag){
        return{
            url,
            tag
        }
    }

    // ARRAY OF LINKS IN OBJECT
    // NAVLINK
    const links = [
        link("/", "Home"),
        link("sss", "Gallery"),
    ]
// Link
    const llinks = [
        link("services", "Services"),
        link("about", "About"),
        link("contact", "Contact"),
    ]

    let navIsOpen = (navBarMarginLeft === '0');
    let root = window.location.pathname.toString();
    root = root === '/' || root.includes('home');
 
    const navigate = useNavigate();
    return(
        <motion.header
            initial = {{y: -40, opacity: 0}}
            animate = {{y: 0, opacity: 1}}
            transition={{duration: .55, ease: 'easeIn'}}>
            <div>
                <img onClick={() => navigate('./')} src={logo} className="logo" />
            </div>
            
            {/* CHANGES THE MARGIN LEFT OF NAV ICON IN MOBILE FROM TO -56vw TO 0 TO -56vw */}
            <i icon="" className="mobile" onClick={() => setNavBarMarginLeft(navBarMarginLeft === '-56vw'? '0' : '-56vw')}>
                {!navIsOpen && useIcon("menu")}
                {navIsOpen && useIcon('close')}
            </i>
 
            <nav style={{marginLeft: navBarMarginLeft}}>
                <ul>
                    {links.map(
                        (lk, index) => 
                        <li className="navlink" key={index}>
                            <NavLink to={lk.url}>{lk.tag}</NavLink>
                        </li>)}

                    {root && llinks.map(
                        (llk, index) => 
                        <li key={index}>
                            <a href={`#${llk.url}`}>{llk.tag}</a>
                        </li>)}
                </ul>
            </nav>
        </motion.header>
    )
}