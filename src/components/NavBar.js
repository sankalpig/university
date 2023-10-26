import React from 'react'
import logo from '../Images/logo.svg'
import '../home.css'

export default function NavBar() {
    return (
        <div className='flex flex-col md:flex-row justify-between  mx-60 pt-4 z-10 flex-wrap md:text-white text-left text-center relative'>
            <div>
                <img src={logo} alt='' />
            </div>
            <div className='flex flex-col md:flex-row my-3 text-left text-center'>
                <h5 className='my-1 md:mx-3'>Home</h5>
                <h5 className='my-1 md:mx-3'>Admission</h5>
                <h5 className='my-1 md:mx-3'>Coprate Training</h5>
                <h5 className='my-1 md:mx-3'>Program & Courses</h5>
                <h5 className='my-1 md:mx-3'>About US</h5>
                <h5 className='my-1 md:mx-3'>Blog</h5>
            </div>
            <div className='text-left text-center bg-slate-100 rounded-xl text-orange-500 h-10 w-32  flex justify-center'>
                <button type='button'>Apply</button>
            </div>
        </div>
    )
}
