import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import logo from '../../asstes/image/logo.png';
import Image from '../utils/Image/Image';
import facebook from '../../asstes/image/facebook.png'
import instagram from '../../asstes/image/instagram.png'
import linkedin from '../../asstes/image/linkedin.png'
import youtube from '../../asstes/image/youtube.png'
import { useCMSContext } from '../../CMSContext';

const Footer = () => {
    const {data, isLoading, isFetching, error} = useCMSContext()
    
    if(window.innerWidth > 768) {
        return (
            <footer>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-6 col-12">
                            <Link to="/" className="f_logo mb-2">
                                <Image src={logo} height={107} width={90} alt={"PV GROUP"} />
                            </Link>
                            <div dangerouslySetInnerHTML={{__html:data?.CMS.lower_footer_content.cms_desc}}></div>
                            <div className='socials mt-4'>
                                <Link to={`${data?.settings.facebook}`} target="_blank"><Image src={facebook} height={50} width={50} alt={"PV_GROUP/Facebook"} /></Link>
                                <Link to={`${data?.settings.instagram}`} target="_blank"><Image src={instagram} height={50} width={50} alt={"PV_GROUP/Instagram"} /></Link>
                                <Link to={`${data?.settings.linkdin}`} target="_blank"><Image src={linkedin} height={50} width={50} alt={"PV_GROUP/Linkedin"} /></Link>
                                <Link to={`${data?.settings.youtube}`} target="_blank"><Image src={youtube} height={50} width={50} alt={"PV_GROUP/Youtube"} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_bottom'>
                    <div className='container'>
                        <div className='d-flex flex-md-row flex-column justify-content-between align-items-center'>
                            <p className='mb-0 order-md-1 order-2'>
                                &copy; all right reserved. Crafted by <Link to='https://notebrains.com' target="_blank"  className='text-danger fw-semibold ps-2'>Notebrains</Link>
                            </p>
                            <ul className="nav justify-content-center order-md-2 order-1">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about-us" className="nav-link">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/projects" className="nav-link">Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/faq" className="nav-link">FAQ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/happy-customers" className="nav-link">Happy Customers</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    } else {
        return (
            <footer>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            <Link to="/" className="f_logo mb-2">
                                <Image src={logo} height={100} width={90} alt={"PV GROUP"} />
                            </Link>
                            <div dangerouslySetInnerHTML={{__html:data?.CMS.lower_footer_content.cms_desc}}></div>
                            <div className='socials mt-4'>
                                <Link to={`${data?.settings.facebook}`} target="_blank"><Image src={facebook} height={50} width={50} alt={"PV_GROUP/Facebook"} /></Link>
                                <Link to={`${data?.settings.instagram}`} target="_blank"><Image src={instagram} height={50} width={50} alt={"PV_GROUP/Instagram"} /></Link>
                                <Link to={`${data?.settings.linkdin}`} target="_blank"><Image src={linkedin} height={50} width={50} alt={"PV_GROUP/Linkedin"} /></Link>
                                <Link to={`${data?.settings.youtube}`} target="_blank"><Image src={youtube} height={50} width={50} alt={"PV_GROUP/Youtube"} /></Link>
                            </div>
                            <ul className="nav justify-content-center order-md-2 order-1">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about-us" className="nav-link">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/projects" className="nav-link">Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/faq" className="nav-link">FAQ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/happy-customers" className="nav-link">Happy Customers</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer_bottom'>
                    <div className='container'>
                        <div className='d-flex'>
                            <p className='mb-0 text-center'>
                                &copy; all right reserved. Crafted by <Link to='https://notebrains.com' target="_blank" className='text-danger fw-semibold ps-2'>Notebrains</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )    
    }
    
}

export default Footer