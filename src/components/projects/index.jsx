import React, { useState } from 'react'
import Image from '../utils/Image/Image';
import './index.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { truncate } from 'lodash';

const Projects = ({loading, projects}) => {
  const splideOptions = {
    perPage: 3,
    perMove: 1,
    gap: '1.5rem',
    pagination: false,
    autoplay: true,
    breakpoints: {
      1200: { perPage: 3},
      991 : { perPage: 2.3},
      768 : { perPage: 2},
      500 : { perPage: 1.3},
      425 : { perPage: 1},
    }
  }

  return (
    <div className='projects'>
    {    
      loading ? <><div className='container'>
        <div className='row'>
          <div className='col-md-3'>
              <div className='card_skeleton'>
                <div className='skeleton-box img'></div>
              </div>
          </div>
          <div className='col-md-3'>
              <div className='card_skeleton'>
                <div className='skeleton-box img'></div>
              </div>
          </div>
          <div className='col-md-3'>
              <div className='card_skeleton'>
                <div className='skeleton-box img'></div>
              </div>
          </div>
          <div className='col-md-3'>
              <div className='card_skeleton'>
                <div className='skeleton-box img'></div>
              </div>
          </div>
        </div>
      </div></> : 
      <>
        <div className='project-slider'>
          <Splide options={splideOptions}>
          {
            projects?.slice(0, 10).map((elem, i)=>{
              return(              
                <SplideSlide key={i}>
                  <div className='item'>
                    <Image src={elem.project_image} height="366" width="366" alt={`project/${i}`} className=""/>
                    <div className="overlay">
                        <Link to={`/project/${elem.project_slug}`}>
                          <h5>{elem.project_name}</h5>
                        </Link>
                        <span>{elem.project_type === 1 ? 'Ongoing Project':'Past Project'}</span>
                        <p>{elem.project_short_desc}</p>
                    </div>
                  </div>
                </SplideSlide>
              )
            })
          }
          </Splide>
        </div>
        <div className='text-center mt-5'>
          <Link to="/projects" className='btn shape_btn btn_secondary'>Explore More</Link>
        </div>
      </>
    }
    </div>
  )
}

export default Projects