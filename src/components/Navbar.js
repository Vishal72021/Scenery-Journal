import React from 'react'
import SvgComponent from './NavbarSVG'
import '../style.css'

export default function Navbar() {
  return (
    <>
        <div className="navbar">
            <SvgComponent/>
            <p className='navbar-title'>My Travel Journal</p>
        </div>
    </>
  )
}
