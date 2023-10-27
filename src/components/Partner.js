import React from 'react'
import img1 from '../Images/p1.png'
import img2 from '../Images/p2.png'
import img3 from '../Images/p3.png'
import img4 from '../Images/p4.png'

export default function Partner() {
    return (
        <div className='back-partner mt-80 px-56'>
            <h1 className='text-white py-10 text-4xl font-semibold text-center'>Our Partners</h1>
            <div className='flex justify-around pb-10'>
                <img className='w-32' src={img1} />
                <img className='w-32' src={img2} />
                <img className='w-32' src={img3} />
                <img className='w-32' src={img4} />
            </div>
        </div>
    )
}
