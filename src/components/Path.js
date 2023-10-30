import React from 'react'
import card1 from '../Images/card-1.png'
import card2 from '../Images/card-2.png'
import card3 from '../Images/card-3.png'
import clock from '../Images/time-svgrepo-com 1.svg'
import video from '../Images/video-svgrepo-com 1.svg'
import download from '../Images/download-svgrepo-com 1.svg'
import rightend from '../Images/rigth-end.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper.min.css'
import '../../node_modules/swiper/swiper-bundle.css'
import '../../node_modules/swiper/swiper.css'
import SlideNavigateButtons from './SlideNavigateButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-regular-svg-icons';

export default function Path() {
    const data = [
        {
            ImgUrl: card3,
            head: "Finance fundamentals",
            author: "kelvin clan"
        },
        {
            ImgUrl: card1,
            head: "Finance fundamentals",
            author: "kelvin clan"
        },
        {
            ImgUrl: card2,
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

    return (

        <>
            <div className='flex justify-center bg-transparent mt-24 flex-col align-middle w-full circle rcircle'>
                <h2 className='text-4xl text-center'>Choose  Your Career Path</h2>
                <p className='mt-6 text-sm md:mx-80 lg:px-44 text-center'>Nous nous engageons à fournir une éducation technologique à la prochaine génération de leaders au Bénin, en promouvant l'égalité et l'autonomisation</p>
            </div>
            <div className=' mx-auto'>
                <div className='w-11/12 mx-auto'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        slidesPerView={3}
                        spaceBetween={-40}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: -40,
                            },
                        }}
                    >
                        <SlideNavigateButtons />
                        {data.map(d =>
                            <div>
                                <SwiperSlide>
                                    <div className=' bg-white rounded-lg' style={{ width: "20rem" }}>
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
                                            <div className='mt-3 pb-2'>
                                                <button className='font-semibold text-gray-50 text-center rounded-xl h-12 w-100' style={{ background: "#fd4a36" }}>Apply Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        )}
                    </Swiper>
                </div>
            </div>
            <div className='mt-20'>
                <div className='align-middle m-auto flex bg-dark rounded-xl text-gray-50 flex justify-center h-10 w-32 '>
                    <button className='text-center' type='button'>View All</button>
                </div>
            </div>
        </>
    )
}
