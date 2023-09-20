import React from 'react'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import Image from '../utils/Image/Image';
import './index.css'

const Hero = ({items}) => { 
    const splideOptions = {
        autoplay: true,
        type: 'loop',
        pauseOnHover: true,
        breakpoints: {
            1200: { perPage: 1},
            991 : { perPage: 1},
            768 : { perPage: 1, autoplay: true, arrows: false},
            500 : { perPage: 1, arrows: false},
            425 : { perPage: 1, arrows: false},
        }
    }

    return (
        <div className={`hero`}>
            {
                <Splide options={splideOptions}>
                    {
                        items?.map((elem, key) => {
                            return(
                                <SplideSlide key={key}>
                                    <div className={`slide`}>
                                        <Image src={elem.slider_image} height={1000} width={500} className="w-100" alt={elem.slider_title} />
                                        <div className={`slider_caption`}>
                                            <div className={`container`}>
                                                <h2>{elem.slider_title}</h2>
                                                <p>{elem.slider_desc}</p>
                                                <Link to={elem.slider_button_url} className='btn shape_btn btn_secondary mt-4'>Explore More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            }
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204 32" width="204" height="32" className='banner_shape'>
                <title>PV_SHAPE</title>
                <path fill='#ee2e31' d="m102 0.5v0.2l101.2 22.5-101.2 8.5-101.3-8.7z"/>
            </svg>
        </div>
    )
}

export default Hero