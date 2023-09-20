import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { useCMSContext } from '../../../CMSContext'

const Banner = ({titleOne, TitleTwo, btnTitle, btnLink, image}) => {
    const {data, isLoading, isFetching, error} = useCMSContext()
    console.log()
    return (
        <div className="call-to-banner" style={{backgroundImage:`url(${image})`}}>
            <div className="container">
                <div className="align-items-center row justify-content-md-end justify-content-center">
                    <div className="col-md-9 col-12">
                        <div className="call-to-caption">
                            <h4 dangerouslySetInnerHTML={{__html:data?.CMS.upper_footer_content.cms_desc.replace( /(<([^>]+)>)/ig, '')}}></h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className="call-to-caption">
                            <Link to={btnLink} className="btn shape_btn btn_secondary ms-md-auto mt-md-0 mt-4">{btnTitle}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner