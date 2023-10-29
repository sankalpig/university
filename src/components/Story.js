import React from 'react'
import img1 from '../Images/pic1.png'
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Story() {
    const data = [
        { imgUrl: img1 },
        { imgUrl: img1 },
        { imgUrl: img1 },
        { imgUrl: img1 },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
    };
    return (
        <div className='eclipse-fill'>
            <div className='mt-20'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold'>What Our Student’s Say</h1>
                    <p className='mt-3 m-auto w-5/12 dark-gray font-semibold'>L'ITTIQ ne forme pas seulement des experts en technologie, mais également les futurs leaders de l'industrie technologique</p>
                </div>
                <div className='mx-9 flex'>
                    <Slider {...settings}>
                        {data.map(d => (
                            <div className=''>
                                <div className=' my-14 '>
                                    <div className='pl-4 py-3 bg-white' style={{ width: "28rem" }}>
                                        <div className='mt-2'>
                                            <p className=''>“Complete account of the system and expound the actual
                                                Contrary to popular belief, Lorem Ipsum is not simply
                                                random text. It has roots”</p>
                                        </div>
                                        <div className='mt-5 flex'>
                                            <div className='rounded-full w-16 flex overflow-hidden h-16'>
                                                <img className='profile-img' src={d.imgUrl} />
                                            </div>
                                            <div className='mx-3 align-middle mt-1'>
                                                <h2 className='text-lg font-semibold'>Dannette P. Cervantes</h2>
                                                <h2 className='grey'>Web Design</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
