import React, { useState } from 'react'
import PageTitle from '../../components/pageTitle'
import bg from "../../asstes/image/image2.jpg"
import SecHeading from '../../components/utils/secHeading'
import Accordion from '../../components/accordion'
import { useQuery } from 'react-query'
import axios from '../../services'
import NotFound from '../../components/notFound'


const FAQ = () => {
  const [pageError, setPageError] = useState(false)

  const fetchData = () => {
    return Promise.all([
        axios.get('/faq-list'),
        axios.get('/cms-list')
    ]).then((res) => {
        const dynamicObject = {};
        res[1].data.data.filter(item => {
          if(item.cms_template_name === 'faq') {
            return dynamicObject[item.cms_template_name] = {...item}
          }
          return ""
        });    
  
        return {
          faqList : res[0].data.data,
          CMS: dynamicObject
        }
    }).catch((err)=>{
      setPageError(true)
    })   
  };

  const { data, isLoading } = useQuery(['FAQ'], fetchData);

  if(pageError) {
    return (
      <>
        <div>
          <PageTitle title={"FAQ"} background={bg}/>
          <NotFound data={'Somthing Went wrong!!'} button={true}/>
        </div>
      </>
    )
  }

  return (
    <>
      <PageTitle title={"FAQ"} background={bg}/>
      <section className='sec_pad_top sec_pad_bottom'>
        <div className='container'>
          <SecHeading title={data?.CMS.faq.cms_title} paragraph={data?.CMS.faq.cms_desc}/>
          <div className='row justify-content-center'>
            <div className='col-md-10'>
            {
              isLoading ? 
              <>
                <span className="skeleton-box d-block mb-3" style={{height: '60px'}}></span>
                <span className="skeleton-box d-block mb-3" style={{height: '60px'}}></span>
                <span className="skeleton-box d-block mb-3" style={{height: '60px'}}></span>
                <span className="skeleton-box d-block mb-3" style={{height: '60px'}}></span>
                <span className="skeleton-box d-block mb-3" style={{height: '60px'}}></span>
              </>
              :
              <>
                {
                  (data?.faqList.map((elem, index)=>{              
                    return(<Accordion title={elem.faq_question} content={elem.faq_answer} key={index}/>)
                  }))
                }
              </>
            }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ