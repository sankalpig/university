import React from 'react'
import card1 from '../Images/card-1.png'
import card2 from '../Images/card-2.png'
import card3 from '../Images/card-3.png'
import clock from '../Images/time-svgrepo-com 1.svg'
import video from '../Images/video-svgrepo-com 1.svg'
import download from '../Images/download-svgrepo-com 1.svg'

export default function Path() {
    return (
        <div className='my-12 flex justify-center flex-col align-middle w-full circle'>
            <div className=''>
                <h2 className='text-4xl text-center'>Choose  Your Career Path</h2>
                <p className='mt-6 text-sm md:mx-80 lg:px-44 text-center'>Nous nous engageons à fournir une éducation technologique à la prochaine génération de leaders au Bénin, en promouvant l'égalité et l'autonomisation</p>
            </div>
            <div className='flex flex-col md:flex-row mt-24 justify-center align-middle mb-10'>
                <div className='shadow-lg bg-white rounded-lg mx-10 overflow-hidden' style={{ width: "21rem" }}>
                    <div className=''>
                        <img className='min-w-full' src={card3} />
                    </div>
                    <div className='m-2'>
                        <div className='my-3 mx-2'>
                            <h5 className='text-2xl font-semibold'>Finance fundamentals course</h5>
                            <p className='text-sm mt-2 grey font-thin'>By Kelly Anderson</p>
                        </div>
                        <hr className='mt-9 mx-2' />
                        <div className='flex justify-center mt-3'>
                            <div className='flex'>
                                <img src={clock} />
                                <span className='text-xs w-20 mx-2 my-2 grey'>22hr 30min</span>
                            </div>
                            <div className='flex'>
                                <img src={video} />
                                <span className='text-xs w-20 mx-2 my-2 grey'>34 courses</span>
                            </div>
                            <div className='flex'>
                                <img src={download} />
                                <span className='text-xs w-20 mx-2 my-2 grey'>250 sales</span>
                            </div>
                        </div>
                        <div className='mx2 my-3'>
                            <button className='font-semibold text-gray-50 text-center rounded-xl h-12 w-100' style={{ background: "#fd4a36" }}>Apply Now</button>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg mx-10 rounded-lg overflow-hidden' style={{ width: "21rem" }}>
                    <div className=''>
                        <img className='min-w-full' src={card1} />
                    </div>
                    <div className='m-2'>
                        <div className='my-3 mx-2'>
                            <h5 className='text-2xl font-semibold'>Finance fundamentals course</h5>
                            <p className='text-sm mt-2 grey font-thin'>By Kelly Anderson</p>
                        </div>
                        <hr className='mt-9 mx-2' />
                        <div className='flex justify-center mt-3'>
                            <div className='flex'>
                                <img src={clock} />
                                <span className='text-xs w-20 mx-2 my-2 grey'>22hr 30min</span>
                            </div>
                            <div className='flex'>
                                <img src={video} />
                                <span className='text-xs w-20 mx-2 my-2 grey'>34 courses</span>
                            </div>
                            <div className='flex'>
                                <img src={download} />
                                <span className='text-xs w-20 mx-2 my-2 grey'>250 sales</span>
                            </div>
                        </div>
                        <div className='mx2 my-3'>
                            <button className='font-semibold text-gray-50 text-center rounded-xl h-12 w-100' style={{ background: "#fd4a36" }}>Apply Now</button>
                        </div>
                    </div>
                </div>
                <div className='circle2'>
                    <div className='shadow-lg mx-10 rounded-lg overflow-hidden ' style={{ width: "21rem" }}>
                        <div className=''>
                            <img className='min-w-full' src={card2} />
                        </div>
                        <div className='m-2'>
                            <div className='my-3 mx-2'>
                                <h5 className='text-2xl font-semibold'>Finance fundamentals course</h5>
                                <p className='text-sm mt-2 grey font-thin'>By Kelly Anderson</p>
                            </div>
                            <hr className='mt-9 mx-2' />
                            <div className='flex justify-center mt-3'>
                                <div className='flex'>
                                    <img src={clock} />
                                    <span className='text-xs w-20 mx-2 my-2 grey'>22hr 30min</span>
                                </div>
                                <div className='flex'>
                                    <img src={video} />
                                    <span className='text-xs w-20 mx-2 my-2 grey'>34 courses</span>
                                </div>
                                <div className='flex'>
                                    <img src={download} />
                                    <span className='text-xs w-20 mx-2 my-2 grey'>250 sales</span>
                                </div>
                            </div>
                            <div className='mx2 my-3'>
                                <button className='font-semibold text-gray-50 text-center rounded-xl h-12 w-100' style={{ background: "#fd4a36" }}>Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='align-middle m-auto flex bg-dark rounded-xl text-gray-50 flex justify-center h-10 w-32 '>
                <button className='text-center' type='button'>View All</button>
            </div>
        </div>
    )
}
