import React from 'react'
import PageTitle from '../../components/pageTitle'
import bg from "../../asstes/image/image2.jpg"
import { Link } from 'react-router-dom'
import style from "./index.module.css"
import ContactWidget from '../../components/contactWidget'
import { useCMSContext } from '../../CMSContext'

const ContactUs = () => {
  const { data, isLoading, isFetching, error } = useCMSContext();

  return (
    <>
      <PageTitle title={"Contact Us"} background={bg}/>
      <section className='sec_pad_top sec_pad_bottom'>
        <div className='container'>
          <div className='row gy-md-0 gy-4'>
            <div className='col-md-4'>
              <div className={style.contact_info} style={{backgroundImage: "url(" + bg + ")"}}>
                <h5 className={`${style.title} fs-4`}>Contact Details</h5>
                <div className={`${style.contact_item}`}>
                  <div className={style.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span>{data?.settings.phone}</span>                    
                </div>
                <div className={`${style.contact_item}`}>
                  <div className={style.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <span>{data?.settings.email}</span>                    
                </div>
                <div className={`${style.contact_item}`}>
                  <div className={style.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <span>{data?.settings.ofiice_open_close_time}</span>                    
                </div>
                <div className={`${style.contact_item} pb-0`}>
                  <div className={style.icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <span>{data?.settings.address}</span>                    
                </div>
              </div>
            </div>
            <div className='col-md-8'>
              <ContactWidget/>
            </div>
            <div className='col-12'>
              <div className='bg-light mt-md-5 ebeded'>
                <iframe src={data?.settings.map_url} className="w-100" height={500} width={800} allowFullScreen="" loading="lazy" title='location'></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs