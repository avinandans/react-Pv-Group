import React from 'react'
import './index.css'
import Image from '../utils/Image/Image'
import { Link } from 'react-router-dom'

const About = ({loading, cms, link}) => {
  return (
    <>
      {
        loading ? 
        <div className="row gx-5">
          <div className="col-lg-6">
            <span className="skeleton-box left_img"></span>
          </div>
          <div className="col-lg-6">
            <span className="skeleton-box right_title"></span>
            <span className="skeleton-box right_paragraph"></span>
            <span className="skeleton-box right_paragraph"></span>
            <span className="skeleton-box right_paragraph"></span>
            <span className="skeleton-box right_paragraph"></span>
            <span className="skeleton-box right_paragraph"></span>
            <span className="skeleton-box right_paragraph"></span>
            <span className="skeleton-box right_paragraph"></span>
            <span className="skeleton-box right_paragraph"></span>
            <span className="skeleton-box right_paragraph"></span>
            <span className="skeleton-box right_paragraph"></span>
            <span className="skeleton-box right_paragraph"></span>
            <span className="skeleton-box right_paragraph" style={{width: '85%'}}></span>
            <span className="skeleton-box right_paragraph" style={{width: '65%'}}></span>
            <span className="skeleton-box right_paragraph" style={{width: '50%'}}></span>
            <span className="skeleton-box right_button"></span>
          </div>
        </div>
        
        :
        
        <div className="row align-items-center gx-5">
          <div className="col-lg-6">
            <div className="about-image">
              {cms.cms_image[0] ? <Image src={cms?.cms_image[0].image_path} height="" width="" alt='' className="img-fluid about-image1"/> : ''}
              {cms.cms_image[1] ? <Image src={cms?.cms_image[1].image_path} height="" width="" alt='' className="img-fluid about-image2"/> : ''}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-text">
              <h4>{cms?.cms_title}</h4>
              <div dangerouslySetInnerHTML={{__html:cms?.cms_desc}}></div>
              {link ? <Link className="btn shape_btn btn_secondary" to="/about-us">Learn More</Link> : ''}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default About