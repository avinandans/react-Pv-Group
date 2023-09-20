import React, { useState } from 'react';
import { useQuery } from 'react-query';
import './about.module.css';
import PageTitle from '../../components/pageTitle';
import bg from "../../asstes/image/image2.jpg"
import {About, Projects, Testimonials } from '../../components';
import SecHeading from '../../components/utils/secHeading';
import axios from '../../services';
import NotFound from '../../components/notFound';

const AboutUs = () => {
  const [pageError, setPageError] = useState(false)
  const fetchData = () => {
    return Promise.all([
      axios.get('/cms-list'),
      axios.get('/project-list'),
      axios.get('/happy-customer'),
    ]).then((res) => {
      const dynamicObject = {};
      res[0].data.data.map(item => {
        const key = item.cms_template_name.replace(/-/g, '_');
        dynamicObject[key] = item
        return item;
      });   

      return {
        CMS: dynamicObject,
        projects: res[1].data.data.project_list,
        testimonials: res[2].data.data,
      }
    }).catch((err)=>{
      setPageError(true)
      return(err)
    })     
  };

  const { data, isLoading } = useQuery('about', fetchData);


  if(pageError) {
    return (
      <>
        <div>
          <PageTitle title={"About Us"} background={bg}/>
          <NotFound data={'Somthing Went wrong!!'} button={true}/>
        </div>
      </>
    )
  }

  return (
    <>
      <PageTitle title={"About Us"} background={bg}/>
      <section className='sec_pad_top sec_pad_bottom'>
        <div className='container'>
          <About loading={isLoading} cms={data?.CMS.about_company}/>
        </div>
      </section>
      <section className='sec_pad_bottom'>
        <div className='container'>
          {
            isLoading ? 
            <>
              <div className='title_skeleton pro-text'>
                <span className="skeleton-box title_heading"></span>
                <span className="skeleton-box paragraph"></span>
              </div>
            </> : 
            <SecHeading title={data?.CMS.our_projects.cms_title} paragraph={data?.CMS.our_projects.cms_desc}/>
          }
        </div>
        <div className='container'>
          <Projects loading={isLoading} projects={data?.projects}/>
        </div>
      </section>
      <section className='sec_pad_bottom'>        
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
    </>
  )  
}

export default AboutUs