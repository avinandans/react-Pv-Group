import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'


const PageTitle = ({title, background}) => {
  return (
    <section className="inner-banner" style={{backgroundImage: `url(${background})`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="inner-banner-caption">
                        <h2>{title}</h2>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">{title}</li>
                        </ol>
                     </div>
                </div>
            </div>
        </div>
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204 32" width="204" height="32" className='banner_shape'>
            <title>PV_SHAPE</title>
            <path fill='#ee2e31' d="m102 0.5v0.2l101.2 22.5-101.2 8.5-101.3-8.7z"/>
        </svg>
    </section>
  )
}

export default PageTitle