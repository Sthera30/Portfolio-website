import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { FaStar, FaStarHalf } from 'react-icons/fa'
import Img1 from '../assets/IMG-20241119-WA0004.jpg'
import Img2 from '../assets/IMG-20241118-WA0056.jpg'
import '../components/CSS/testimonials.css'

function Testimonial() {

    return (
        <>

            <div className='review-heading'>

                <h3>TESTIMONIALS</h3>

            </div>

            <div className="review-container">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 9000, disableOnInteraction: false }}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="swiper-wrapper"
                >
                    <SwiperSlide className="swiper-slide">
                        <div className="player-box">
                            <div className="rating-star">
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                            </div>
                            <p>
                                Sirtembekile is easy to work with, has a unique mind and this is reflected in his creative designs. Working with Sirtembekile was effortless because he engages with you in every step of the way. Not only does he ensure you're updated, but he also delivers exactly what you want, tailored to your expectations. I would definitely love to work with Sirtembekile again in the future as i am satisfied with his services and the quality of his work. 
                                
                            </p>
                            <div className="info-container">
                                <img src={Img1} alt="" />
                                <div className="user-info">
                                    <p>Vuyolwethu Mkwakwi</p>
                                    <p>Tennis Player</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <div className="player-box">
                            <div className="rating-star">
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStarHalf style={{ color: "yellow" }} />
                            </div>
                            <p>
                               
                               Sirtembekile is easy to work with and was available to answer all our enquiries in time. His work is professional, eye catching and clean. Our website was up and running within the time frame he promised. There were no delays and he kept us in the loop with constant updates throughout the process. I am really impressed with his efforts and work

                            </p>
                            <div className="info-container">
                                <img src={Img2} alt="" />
                                <div className="user-info">
                                    <p>Simamkele Ngcingolo</p>
                                    <p>Tennis Player</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                   
                </Swiper>
            </div>

        </>
    )
}

export default Testimonial
