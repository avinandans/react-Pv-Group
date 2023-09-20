import React, { useState } from 'react';
import axios from '../../../services';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import ScrollspyNav from "react-scrollspy-nav";
import PageTitle from '../../../components/pageTitle';
import bg from "../../../asstes/image/image2.jpg";
import "./index.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ContactWidget from '../../../components/contactWidget';
import download from '../../../asstes/image/download-brochure.png'
import NotFound from '../../../components/notFound';

const Details = () => {
  const [pageError, setPageError] = useState(false)
  const { id } = useParams();

  const fetchData = () => {
    return axios.post('/project-details', {"slug": id}).then(res => {
      return res.data
    }).catch((err) => {
      setPageError(true)
    })
  };
  
  const { data, isLoading, isError, error, isFetching } = useQuery([id], fetchData);

  if(pageError) {
    return(
      <>
        <div>
          <PageTitle title={"Project Details"} background={bg}/>
          <NotFound data="Somthing went wrong!!" button={true}/>
        </div>
      </>
    )
  }

  if(isLoading) {
    return(
      <div>
        <PageTitle title={"Project Details"} background={bg}/>
        <div className='container sec_pad_top sec_pad_bottom'>
          <div className='row gx-4'>
            <div className='col-md-3'>
              <div className='project_nav'>
                <>
                  <span className='skeleton-box mb-2' style={{height: '45px'}}></span>
                  <span className='skeleton-box mb-2' style={{height: '45px'}}></span>
                  <span className='skeleton-box mb-2' style={{height: '45px'}}></span>
                  <span className='skeleton-box mb-2' style={{height: '45px'}}></span>
                  <span className='skeleton-box mb-2' style={{height: '45px'}}></span>
                  <span className='skeleton-box mb-2' style={{height: '45px'}}></span>
                  <span className='skeleton-box mb-2' style={{height: '45px'}}></span>
                  <span className='skeleton-box mb-2' style={{height: '45px'}}></span>
                </>
                <div className='desktop download'>
                  <Link
                    to={''}
                    download="Download Brochure PDF"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={download} alt="Download Brochure"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-9'>
              {
                <>
                <span className='skeleton-box mb-2' style={{height: '40px'}}></span>
                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-4' style={{height: '10px'}}></span>

                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-4' style={{height: '10px'}}></span>

                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-4' style={{height: '10px'}}></span>

                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-1' style={{height: '10px'}}></span>
                <span className='skeleton-box mb-5' style={{height: '10px'}}></span>

                <span className='skeleton-box mb-4 mx-auto' style={{height: '40px',width: '40%'}}></span>
                <span className='skeleton-box mb-5' style={{height: '450px'}}></span>
                
                <span className='skeleton-box mb-4 mx-auto' style={{height: '40px',width: '40%'}}></span>
                <span className='skeleton-box mb-5' style={{height: '450px'}}></span>
                </> 
              }            
            </div>
          </div>
        </div>
      </div>
    )
  }

  if(data.status === 0) {
    return (
      <>
        <div>
          <PageTitle title={"Project Details"} background={bg}/>
          <NotFound data={'404 Page Not Found!!'} button={true}/>
        </div>
      </>
    )
  }

  return (
    <div>
      <PageTitle title={"Project Details"} background={bg}/>
      <div className='container sec_pad_top sec_pad_bottom'>
        <div className='row gx-4'>
          <div className='col-md-3'>
            <div className='project_nav'>
              {
                <ScrollspyNav
                  scrollTargetIds={["summary", "media-gallery", "highlights", "site-plan", "unit-plan","video", "location", "reach-us"]}
                  offset={250}
                  activeNavClass="active"
                  scrollDuration={'300'}
                  headerBackground="true"
                > 
                  <div className='list-group'>
                    <a className='list-group-item list-group-item-action' href="#summary">Summary</a>
                    <a className='list-group-item list-group-item-action' href="#media-gallery">Media Gallery</a>
                    <a className='list-group-item list-group-item-action' href="#highlights">Highlights</a>
                    <a className='list-group-item list-group-item-action' href="#site-plan">Site Plan</a>
                    <a className='list-group-item list-group-item-action' href="#unit-plan">Unit Plan</a>
                    <a className='list-group-item list-group-item-action' href="#video">Video</a>
                    <a className='list-group-item list-group-item-action' href="#location">Location</a>
                    <a className='list-group-item list-group-item-action' href="#reach-us">Reach Us</a>
                  </div>
                </ScrollspyNav>
              }    
              {
                data.data.brochure !== "" ?                    
                  <div className='desktop download'>
                    <Link
                      to={data.data.brochure}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={download} alt="Download Brochure"/>
                    </Link>
                  </div>
                :
                ''
              } 
              
            </div>
          </div>
          <div className='col-md-9'>
            {
              <>
                <div>
                  <div id="summary" className='pb-5'>
                    <h2 className='mb-3 fw-medium'>{data.data.project_name}</h2>
                    <div dangerouslySetInnerHTML={{__html:data.data.project_desc}}></div>
                    {
                      data.data.over_view !== "" ? 
                      <div className='features mt-4'>
                        <div className='row'>
                        {
                          data.data.over_view !== "" ? data.data.over_view.map((elem, index) => {
                            return (
                              <div className='col-md-3' key={index}>
                                <div className='shadow p-4 text-center rounded-3'>
                                  <div className='fw-bold fs-4 text-primary'>{elem.overview_value}</div>
                                  <p className='mb-0'>{elem.overview_name}</p>
                                </div>
                              </div>
                            )
                          }) : ''
                        }
                        </div>
                      </div> 
                      : ""
                    }
                    
                    {
                      data.data.brochure !== "" ?                    
                        <div className='mobile download'>
                          <Link
                            to={data.data.brochure}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={download} alt="Download Brochure"/>
                          </Link>
                        </div>
                      :
                      ''
                    }
                  </div>
                  <section id="media-gallery" className='pb-5'>
                    <h4 className='title text-center mb-3'>Image Gallery</h4>
                    <Splide options={{perPage: 1,perMove: 1}}>
                      {data.data.project_media_gallery?.map((elem, index)=>{
                        return(
                          <SplideSlide key={index}>
                            <figure>
                              <img src={elem.image_path} height={800} width={500} alt='...'  key={index} className='img-fluid w-100 gallery_img'/>
                            </figure>
                          </SplideSlide>
                        )
                      })}
                    </Splide>
                  </section>
                  <section id="highlights" className='pb-5'>
                    <h4 className='title text-center mb-3'>Highlights</h4>
                    <div className='row gy-3'>
                      {
                        data.data.project_features?.map((elem, i ) => {
                          return(
                            <div className='col-md-4 col-6' key={i}>
                              <div className='shadow-sm p-3 rounded-3 text-center border'>
                                <img src={elem.image} height={60} width={60} alt='...'/>
                                <h5 className='mb-0 fs-6 mt-2 text-muted text-capitalize'>{elem.title.toLowerCase()}</h5>
                              </div>
                            </div>
                          )
                        })
                      }                    
                    </div>
                  </section>
                  <section id="site-plan" className='pb-5'>
                    <h4 className='title text-center mb-3'>Site Plan</h4>
                    <figure>
                      <img src={data.data.project_site_plan} width={''} height={''} alt='...' className='w-100 plan_img'/>
                    </figure>
                  </section>
                  <section id="unit-plan" className='pb-5'>
                    <h4 className='title text-center mb-3'>Unit Plan</h4>
                    <figure>
                      <img src={data.data.project_unit_plan} width={''} height={''} alt='...' className='w-100 plan_img'/>
                    </figure>
                  </section>
                  <section id="video" className='pb-5'>
                    <h4 className='title text-center mb-3'>Video</h4>
                    <div className='youtube_video' dangerouslySetInnerHTML={{__html:data.data.video_url}}></div>
                  </section>
                  <section id="location" className='pb-5'>
                    <h4 className='title text-center mb-3'>Location</h4>
                    <div className='ebeded' dangerouslySetInnerHTML={{__html:data.data.project_located_in}}></div>
                  </section>
                  <section id="reach-us" className='pb-0'>
                    <ContactWidget inputColumn="true"/>
                  </section>
                </div>
              </>
            }            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details