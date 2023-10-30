import React from 'react'
import logo from '../Images/logo.svg'
import '../home.css'
// import React, { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function NavBar() {
  return (
    <div className='custom-nav flex flex-col md:flex-row justify-between  mx-60 pt-4 z-10 flex-wrap md:text-white text-left text-center relative'>
      <div>
        <img src={logo} alt='' />
      </div>
      <div className='flex flex-col md:flex-row my-3 text-left text-center'>
        <h5 className='my-1 md:mx-3  cursor-pointer nav-glow hover:scale-110 hover:shadow-md transition duration-300 ease-in-out cursor-pointer nav-glow hover:scale-110 hover:shadow-md transition duration-300 ease-in-out'> <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >Home</Link  ></h5>
        <h5 className='my-1 md:mx-3  cursor-pointer nav-glow hover:scale-110 hover:shadow-md transition duration-300 ease-in-out '> <Link
          activeClass="active"
          to="admission"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >Admission</Link  ></h5>
        <h5 className='my-1 md:mx-3  cursor-pointer nav-glow hover:scale-110 hover:shadow-md transition duration-300 ease-in-out '> <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >Coprate Training</Link  ></h5>
        <h5 className='my-1 md:mx-3  cursor-pointer nav-glow hover:scale-110 hover:shadow-md transition duration-300 ease-in-out '> <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >Program & Courses</Link  ></h5>
        <h5 className='my-1 md:mx-3  cursor-pointer nav-glow hover:scale-110 hover:shadow-md transition duration-300 ease-in-out '> <Link
          activeClass="active"
          to="footer"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >About US</Link  ></h5>
        <h5 className='my-1 md:mx-3  cursor-pointer nav-glow hover:scale-110 hover:shadow-md transition duration-300 ease-in-out '> <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >Blog</Link  ></h5>
      </div>
      <div className='text-left text-center bg-slate-100 rounded-xl text-orange-500 h-10 w-32  flex justify-center'>
        <button type='button'>Apply</button>
      </div>
    </div>
  )
}
