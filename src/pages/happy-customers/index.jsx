import React from 'react'
import PageTitle from '../../components/pageTitle'
import bg from "../../asstes/image/image2.jpg"
import axios from '../../services'
import { useState } from 'react'
import { useQuery } from 'react-query'
import Image from '../../components/utils/Image/Image'
import quote from '../../asstes/image/quotation.png'
import style from './index.module.css'
import { Pagination } from '../../components'
import NotFound from '../../components/notFound'

const HappyCustomers = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [pageError, setPageError] = useState(false)

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const fetchData = () => {
     return axios.get(`/happy-customer?page_no=${page}&page_limit=${perPage}`).then((res)=>{
      return res.data.data
    }).catch((err)=>{
      setPageError(true)
      return(err)
    })
  };
  const { data, isLoading } = useQuery(['testimonials', page], fetchData);


  if(isLoading) {
    return(
      <>
        <PageTitle title={"Happy Customers"} background={bg}/>
        <section className='sec_pad_top sec_pad_bottom'>
          <div className='container'>
            <div className={style.grid_wrapper}>
              {
                Array.from({ length: perPage }, (_, index) => index + 1).map((index) => (
                  <span className='skeleton-box mb-3' style={{height: '300px'}} key={index}></span>
                ))
              }
            </div>
          </div>
        </section>
      </>
    )
  }

  if(pageError) {
    return (
      <>
        <div>
          <PageTitle title={"Happy Customers"} background={bg}/>
          <NotFound data={'Somthing Went wrong!!'} button={true}/>
        </div>
      </>
    )
  }

  return (
    <>
      <PageTitle title={"Happy Customers"} background={bg}/>
      <section className='sec_pad_top sec_pad_bottom'>
        <div className='container'>
          <div className={style.grid_wrapper}>
          {
            data.happy_customer_list.map((elem, index) =>{
              return(
                <div className={style.grid_item} key={index}>
                  {/* <TestimItem name={elem.cms_name} image={elem.cms_image} text={elem.cms_desc} designation={elem.cms_designation} /> */}
                  <div className={""}>
                    <div className={style.quote_icon}>
                        <Image src={quote} height={34} width={40} alt={"..."} className={quote.icon}/>
                    </div>
                    <p className={style.text}>
                        {elem.cms_desc}
                    </p>
                    <div className={style.user}>
                        <Image className={style.user_image} src={elem.cms_image} height={50} width={50} alt={'...'} />
                        <div className={style.user_info}>
                          <h5 className={style.user_name}>{elem.cms_name}</h5>
                          <p className={style.designation}>{elem.cms_designation}</p>
                        </div>
                    </div>
                  </div>
                </div>
              )
            })            
          }
          </div>

          <div className='mt-5'>
            <Pagination currentPage={page} totalPages={data?.page_links.last_page} onPageChange={handlePageChange} className="mb-0"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default HappyCustomers