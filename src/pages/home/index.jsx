import React, { useState } from 'react';
import './home.css';
import {Hero, About, Projects, Testimonials} from '../../components';
import SecHeading from '../../components/utils/secHeading';
import Banner from '../../components/utils/banner/Banner';
import banner from '../../asstes/image/image2.jpg';
import { useQuery } from 'react-query';
import { fetchData } from './api';
import Image from '../../components/utils/Image/Image';
import building from '../../asstes/image/building.png';
import skyBg from '../../asstes/image/green-hill_53876-33577.png'
import counterBg from '../../asstes/image/64561.png'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.css';
import playButton from '../../asstes/image/play.png'
import CountUp from 'react-countup';
import happyC from '../../asstes/image/happy-48.png'
import flateSoldIcon from '../../asstes/image/icons8-building-50.png'
import livesImpect from '../../asstes/image/icons8-availability-45.png'
import NotFound from '../../components/notFound';
import axios from '../../services';

const Homepage = () => {
  const [pageError, setPageError] = useState(false)
  const [status, setStatus] = useState()
  const [isOpen, setOpen] = useState(false)

  const fetchData = () => {
    return Promise.all([
      axios.get('/slider-list'),
      axios.get('/cms-list'),
      axios.get('/project-list'),
      axios.get('/happy-customer'),
    ]).then((res) => {
      const dynamicObject = {};
      res[1].data.data.map(item => {
        const key = item.cms_template_name.replace(/-/g, '_');
        dynamicObject[key] = item
        return item;
      });
      setStatus(res[3].data.status)
      return {
        hero : res[0].data.data,
        CMS: dynamicObject,
        projects: res[2].data.data.project_list,
        testimonials: res[3].data.data,
      }
    }).catch((error)=>{
      setPageError(true)
      return error
    }) 
  };

  const { data, isLoading} = useQuery('homepage', fetchData);  
  

  // cutting the src from a iframe. 
  const getYouTubeVideoIdFromIframe = (iframeCode) => {
    const regex = /(?:src="https:\/\/www\.youtube\.com\/embed\/|src="https:\/\/youtu\.be\/|src="https:\/\/www\.youtube-nocookie\.com\/embed\/)([^\s"]+)/;
    const match = iframeCode.match(regex);
    return match && match[1];
  }

  let videoLink;
  if(status === 1) {
    videoLink = getYouTubeVideoIdFromIframe(data.CMS.youtube_video.video_url)
  }

  if(pageError) {
    return(
      <>
        <div>
          <NotFound data="Somthing went wrong!!" className={'h_100vh'} button={false}/>
        </div>
      </>
    )
  }
  
  if(isLoading) {
    return(
        <>
          <span className="skeleton-box hero_skel gradient">
            <span className='skeletons text-center'>
              <span className='skeleton-box mb-4' style={{height: '28px', width: '50%'}}></span>
              <span className='skeleton-box paragraph mb-2' style={{height: '10px', width: '70%'}}></span>
              <span className='skeleton-box paragraph mb-2' style={{height: '10px', width: '60%'}}></span>
              <span className='skeleton-box paragraph' style={{height: '10px', width: '40%'}}></span>
              <span className='skeleton-box mt-4' style={{height: '40px', width: '140px'}}></span>
            </span>
          </span>

          <div className='container'>
            <div className='title_skeleton pro-text mt-5'>
              <span className="skeleton-box title_heading"></span>
              <span className="skeleton-box paragraph"></span>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <span className="skeleton-box" style={{height: '350px'}}></span>
              </div>
              <div className='col-md-6'>
                <span className="skeleton-box" style={{height: '350px'}}></span>
              </div>
            </div>
          </div>

          <span className="skeleton-box my-5" style={{height: '250px'}}></span>

          <div className='container mb-5'>
            <div className='title_skeleton pro-text mt-5'>
              <span className="skeleton-box title_heading"></span>
              <span className="skeleton-box paragraph"></span>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <span className="skeleton-box" style={{height: '300px'}}></span>
              </div>
              <div className='col-md-4'>
                <span className="skeleton-box" style={{height: '300px'}}></span>
              </div>
              <div className='col-md-4'>
                <span className="skeleton-box" style={{height: '300px'}}></span>
              </div>
            </div>
          </div>
        </>   
    )
  }
  
  if(status === 0) {
    return (
      <>
        <div>
          <NotFound data={'404 Page Not Found!!'}/>
        </div>
      </>
    )
  }

  return (    
    <>  
      <Hero items={data?.hero}/>
      <section className='sec_pad_top sec_pad_bottom'>
        <div className='container'>
          <About loading={isLoading} cms={data?.CMS.home_page_about_content} link="/about-us"/>
        </div>
      </section>

      <section className='counter_sec' style={{backgroundImage: `url(${counterBg})`}}>
        <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-4 col-6'>
                <div className='counter_item'>
                  <div className='icon mb-1'>
                    <Image src={happyC} height={45} width={45}/>
                  </div>
                  <div className='count'>{<CountUp duration={5} end={data?.CMS.total_happy_customers.data_counter} />}+</div>
                  <div className='counter_title'>Happy Customers</div>
                </div>
              </div>
              <div className='col-md-4 col-6'>
                <div className='counter_item'>
                  <div className='icon mb-1'>
                    <Image src={livesImpect} height={45} width={45}/>
                  </div>
                  <div className='count'>{<CountUp duration={5} end={data?.CMS.total_lives_impacted.data_counter} />}+</div>
                  <div className='counter_title'>Lives Impacted</div>
                </div>
              </div>
              <div className='col-md-4 col-6'>
                <div className='counter_item'>
                  <div className='icon mb-1'>
                    <Image src={flateSoldIcon} height={45} width={45}/>
                  </div>
                  <div className='count'>{<CountUp duration={5} end={data?.CMS.total_flat_sold.data_counter-1} />}+</div>
                  <div className='counter_title'>Flats Sold</div>
                </div>
              </div>
            </div>  
        </div>
      </section>
      

      <section className='sec_pad_bottom'>
        <div className='container'>
          {
            <SecHeading title={data?.CMS.our_projects.cms_title}  paragraph={data?.CMS.our_projects.cms_desc}/>
          }
        </div>
        <div className='container'>
          <Projects loading={isLoading} projects={data?.projects}/>
        </div>
      </section>
    
      <section className='youtubeVideo' style={{backgroundImage: `url(${skyBg})`}}>
        {
          <>
            <div className='container'>
              <div className='inner'>
                <Image src={building} height={10} width={10} className={`building`}/>
                <div className='content'>
                  <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoLink} onClose={() => setOpen(false)} />
                  <h4 className='fs-3 text-dark mb-4'>VIDEO WALKTHROUGH</h4>
                  <button onClick={()=> setOpen(true)} className={'playBtn'}>
                    <Image src={playButton} height={50} width={''} alt={'...'}/>
                  </button>                
                </div>
              </div>
            </div>
          </>
        }
      </section>

      <section className='sec_pad_bottom sec_pad_top'>    
        {
          isLoading ? 
          <>
            <div className='title_skeleton pro-text'>
              <span className="skeleton-box title_heading"></span>
              <span className="skeleton-box paragraph"></span>
            </div>
          </> : 
          <>
            <div className='testimonials_top'>
              <div className='container'>
                <SecHeading title={data?.CMS.happy_customers.cms_title} paragraph={data?.CMS.happy_customers.cms_desc}/>
              </div>
            </div>
          </>
        }
        <div className='container'>
          <Testimonials loading={isLoading} testimonials={data?.testimonials}/>
        </div>
      </section>   

      <section>
        {
          isLoading ?
          <>
            <span className="skeleton-box" style={{height: '184px'}}></span>
          </>
          : 
          <Banner
            loading={isLoading}
            titleOne={'Explain Why Someone Should'}
            TitleTwo={'Contact Your Business.'}
            btnTitle={'Contact Now'}
            btnLink={'/contact-us'}
            image={banner}
          />
        }
      </section>
    </>
  )
}

export default Homepage