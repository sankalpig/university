import React from 'react'
import card1 from '../Images/card-1.png'
import card2 from '../Images/card-2.png'
import card3 from '../Images/card-3.png'
import clock from '../Images/time-svgrepo-com 1.svg'
import video from '../Images/video-svgrepo-com 1.svg'
import download from '../Images/download-svgrepo-com 1.svg'
import rightend from '../Images/rigth-end.png'
// import "~slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Path() {
    const data = [
        {
            ImgUrl: card1,
            head: "Finance fundamentals",
            author: "kelvin clan"
        },
        {
            ImgUrl: card1,
            head: "Finance fundamentals",
            author: "kelvin clan"
        },
        {
            ImgUrl: card1,
            head: "Finance fundamentals",
            author: "kelvin clan"
        },
        {
            ImgUrl: card1,
            head: "Finance fundamentals",
            author: "kelvin clan"
        },
    ]
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


    return (


        <div className=' flex justify-center flex-col align-middle w-full circle rcircle'>
            <div className=''>
                <h2 className='text-4xl text-center'>Choose  Your Career Path</h2>
                <p className='mt-6 text-sm md:mx-80 lg:px-44 text-center'>Nous nous engageons à fournir une éducation technologique à la prochaine génération de leaders au Bénin, en promouvant l'égalité et l'autonomisation</p>
            </div>
            <Slider {...settings}>
                {data.map(d =>
                    <div className='mt-24'>
                        <div className='shadow-lg bg-white rounded-lg' style={{ width: "21rem" }}>
                            <div className=''>
                                <img className='min-w-full' src={d.ImgUrl} />
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
                                <div className='mt-3'>
                                    <button className='font-semibold text-gray-50 text-center rounded-xl h-12 w-100' style={{ background: "#fd4a36" }}>Apply Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
            <div className='mt-20'>
                <div className='align-middle m-auto flex bg-dark rounded-xl text-gray-50 flex justify-center h-10 w-32 '>
                    <button className='text-center' type='button'>View All</button>
                </div>
            </div>
        </div>

    )
}
