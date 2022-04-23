import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return(
    <nav className='navBar space'>
      <img
        className='logo'
        src='photos/logo.png'
        alt='logo'
        height='60'
        width='60'
      />
      <div className='navLinks' >
        <Link className='navLink' to='/'>Home</Link>
        <Link className='navLink' to='ministries'>Ministries</Link>
        <Link className='navLink' to='media'>Media</Link>
        <Link className='navLink' to='blog'>Blog</Link>
        <Link className='navLink' to='info'>Info</Link>
      </div>
    </nav>
  )
}