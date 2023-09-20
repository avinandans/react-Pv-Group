import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import TestimItem from '../utils/Testim_Item';
import { Link } from 'react-router-dom';

const Testimonials = ({loading, testimonials}) => {
  const splideOptions = {
    perPage: 3,
    perMove: 1,
    type: 'loop',
    gap: '2rem',
    pagination: false,
    autoHeight: true,
    breakpoints: {
      1200: { perPage: 3},
      991 : { perPage: 2},
      768 : { perPage: 2},
      500 : { perPage: 1},
      425 : { perPage: 1},
    }
  }
  return (
    <>
      {
        loading ?
        <>
          <div className='row'>
            <div className='col-md-4'>
                <div className='card_skeleton'>
                  <div className='skeleton-box img'></div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card_skeleton'>
                  <div className='skeleton-box img'></div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card_skeleton'>
                  <div className='skeleton-box img'></div>
                </div>
            </div>
          </div>
        </> 
        : 
        <>
          <div className='testmonials_slider'>
            <Splide options={splideOptions}>
            {
              testimonials.happy_customer_list?.slice(0, 10).map((elem, i)=>{
                const {cms_name, cms_image, cms_desc,cms_designation, cms_id} = elem;
                return(              
                  <SplideSlide key={i}>
                    <TestimItem name={cms_name} image={cms_image} text={cms_desc} designation={cms_designation} />
                  </SplideSlide>
                )
              })
            }
            </Splide>
          </div>
          <div className='text-center mt-5'>
            <Link className="btn shape_btn btn_secondary" to="/happy-customers">Explore More</Link>
          </div>
        </>
      }
    </>
  )
}

export default Testimonials