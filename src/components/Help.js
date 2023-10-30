import React from 'react'
import clock from '../Images/time-svgrepo-com 1.svg'
import video from '../Images/video-svgrepo-com 1.svg'
import download from '../Images/download-svgrepo-com 1.svg'
import img from '../Images/image.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper.min.css'
import '../../node_modules/swiper/swiper-bundle.css'
import '../../node_modules/swiper/swiper.css'
import SlideNavigateButtons from './SlideNavigateButtons'
// import { Pagination } from 'swiper/modules';

export default function Help() {
    const data = [
        { ImgUrl: img },
        { ImgUrl: img },
        { ImgUrl: img },
        { ImgUrl: img },
        { ImgUrl: img },
    ]
    return (
        <div className='mt-20 back-white py-24'>
            <div className='container'>
                <div className='row lg:mx-40 md:flex flex-col md:flex-col lg:flex-row'>
                    <div className='col-6'>
                        <p className='text-2xl font-semibold leading-loose  text-black'><span className='red' >ITTIQ helps you design,<br /></span ><span className='text-4xl'> Deliver, Manage, and Sustain Talent Development Solutions </span><br /><span>for today and the future</span></p>
                    </div>
                    <div className='col-6 mt-3 text-sm leading-7'>
                        <p>Our team of experts brings a wealth of experience and knowledge to every client engagement, ensuring that we understand your unique needs and challenges. We work with you to develop customized talent solutions that align with your business strategy, culture, and goals...Read More</p>
                    </div>
                </div>
                <div className=' '>
                    <div className=''>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            slidesPerView={3}
                            spaceBetween={-70}

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
                                    spaceBetween: -70,
                                },
                            }}
                        >
                            <div className=' w-6/12'>
                                <SlideNavigateButtons />
                            </div>
                            {data.map(d => (
                                <div className='pl-10 pr-10'>
                                    <SwiperSlide>
                                        <div className='shadow-md rounded-md mx-10 hover:mx-10 overflow-hidden mr-0' style={{ width: "20rem" }}>
                                            <div className=''>
                                                <img className='min-w-full' src={d.ImgUrl} />
                                            </div>
                                            <div className='m-2'>
                                                <div className='my-3 mx-2'>
                                                    <h5 className=' grey font-semibold'>UI/UX Design</h5>
                                                    <p className=' text-xl font-semibold mt-2 text-black'>UI/UX Design for Beginners</p>
                                                </div>
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
                                                    <button className='font-semibold text-gray-50 text-center rounded-xl h-12 w-100' style={{ background: "#fd4a36" }}>Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
