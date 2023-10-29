import React from 'react'
import back from '../Images/back.png'
import lego from '../Images/lego.png'


export default function Carousel() {
    return (
            <div className='' id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button className='mx-2' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button className='mx-2' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button className='mx-2' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button className='mx-2' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button className='mx-2' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                    <div class="carousel-inner mt-[3rem] md:mt-[-6rem]">
                        <div class="carousel-item active align-middle">
                            <img src={lego} class=" absolute w-full z-10 px-44 py-44" alt='..' />
                            <img src={back} class="relative w-full z-0" alt="..." />
                            <div class="carousel-caption">
                                <h2 className='md:mx-40 font-bold text-6xl ' style={{ lineHeight: "5.25rem" }}>Améliorez <span className='red'>vos compétences</span> pour faire progresser votre <span className='red'>carrière</span></h2>
                                <p className='md:mx-56 mt-5 leading-8' > Nous nous engageons à fournir une éducation technologique à la prochaine génération
                                </p>
                                <p>
                                    de leaders au Bénin, en promouvant l'égalité et l'autonomisation.
                                </p>
                                <button className='mx-3 my-5 border-2 font-semibold text-center rounded-xl h-12 w-32'>Apply Now</button>
                                <button className='mx-3 my-5 font-semibold text-center rounded-xl h-12 w-44' style={{ background: "#fd4a36" }}>Browse Course</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    )
}
