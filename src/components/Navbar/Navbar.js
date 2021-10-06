import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Group from '../../assets/Group.png'
import { NavData } from './NavData'
import {
  NavWrapper,
  NavLinks
} from './NavbarStyles'

const Navbar = () => {
  return (
    <NavWrapper>
      <Link to="/">
      <img src={logo} alt="logo"/>
      </Link>
      <NavLinks>
        {NavData.map((item, index)=>{
          return(
            <Link to={item.link} key={index}>
              {item.text}
            </Link>
          )
        })}
      </NavLinks>
      <Link to="/login">
      <button><img src={Group} alt="icon"/>Login</button>
      </Link>
    </NavWrapper>
  )
}

export default Navbar
