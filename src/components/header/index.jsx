import './index.css'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../asstes/image/logo.png';
import { BiSearch } from 'react-icons/bi';
import { LuPhoneCall } from 'react-icons/lu';

const Header = () => {
  const [menu, setMenu] = useState(false)
  const location = useLocation();

  const toggleMenu = () => {
    if(menu !== true) {
      setMenu(true)
    } else {
      setMenu(false)
    }
  }
  
  useEffect(() => {
    setMenu(false)
  }, [location]);

  if(window.innerWidth > 992) {
    return (
      <header className={`navbar navbar-expand-lg`}>
          <div className="container">
            <Link className="navbar-brand d-block" to="/">
              <img src={logo} height="107" width="90" alt='' className="brand"/>
            </Link>
  
            <nav className={menu ? "collapse navbar-collapse show" : 'collapse navbar-collapse'} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className={`nav-link navlink`} to="/" exact="true">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link navlink`} to="/about-us" exact="true">About us</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link navlink`} to="/projects" exact="true">Projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link navlink`} to="/happy-customers" exact="true">Happy Customers</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link navlink`} to="/faq" exact="true">FAQ</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link navlink`} to="/contact-us" exact="true">Contact us</NavLink>
                </li>
              </ul>
            </nav>
          </div>
      </header>
    )
  } else {
    return(
      <header className={menu ? `navbar navbar-expand-lg active` : `navbar navbar-expand-lg`}>
          <div className="container">
            <Link className="navbar-brand d-block" to="/">
              <img src={logo} height="100" width="90" alt='' className="brand"/>
            </Link>
            <div className={menu ? "menu active" : 'menu'} onClick={toggleMenu}>
              <div className="icon-circle"></div>
              <div className="icon"></div>
            </div>
          </div>
          <nav className={menu ? "collapse navbar-collapse show bg-light" : 'collapse navbar-collapse'} id="navbarSupportedContent">
            <div className="container">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className={`nav-link navlink`} to="/" exact="true">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link navlink`} to="/about-us" exact="true">About us</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link navlink`} to="/projects" exact="true">Project</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link navlink`} to="/happy-customers" exact="true">Happy Customers</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link navlink`} to="/faq" exact="true">FAQ</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link navlink`} to="/contact-us" exact="true">Contact us</NavLink>
                </li>
              </ul>
            </div>    
          </nav>
      </header>
    )
  }

  
}

export default Header