import React from 'react';
import { truncate } from 'lodash';
import { Link } from 'react-router-dom';
import { Pagination, ContactWidget } from '../../components';
import {useProjectContext} from './projectContext.js'
import NoDataFound from '../../components/noDataFound';
import PageTitle from '../../components/pageTitle';
import NotFound from '../../components/notFound';

const TabContent = () => {
  const { pageError, projects, isLoading, setActiveTab, setPage, perPage, page, activeTab, isFetching, error } = useProjectContext();

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    setPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  if(isLoading) {
    return(
      <>
        <div className='sec_pad_bottom'>
          <div className='row'>
            <div className='col-md-8'>
              {
                Array.from({ length: perPage }, (_, index) => index).map((item ,index) => (
                  <span className='skeleton-box mb-3' style={{height: '273px'}} key={index}></span>
                ))
              }
            </div>
            <div className='col-md-4'>
              <span className='skeleton-box mb-3' style={{height: '580px'}}></span>
            </div>
          </div>
        </div>
      </>
    )
  }

  if(pageError) {
    return (
      <>
        <div>
          <PageTitle title={"Project Details"}/>
          <NotFound data={'Somthing Went wrong!!'} button={true}/>
        </div>
      </>
    )
  }

  if(projects.status === 0) {
    return (
      <>
        <div>
          <PageTitle title={"Project Details"}/>
          <NotFound data={'404 Page Not Found!!'} button={true}/>
        </div>
      </>
    )
  }
  
  return (
    <>
      <ul className="nav nav-tabs justify-content-center mb-4 pb-md-3">
          <>
            <li className="nav-item">
                <button
                type="button"
                onClick={() => handleTabClick(1)}
                className={activeTab === 1 ? 'nav-link active' : 'nav-link'}
                > 
                    Ongoing Projects
                </button>
            </li>
            <li className="nav-item">
                <button
                type="button"
                onClick={() => handleTabClick(2)}
                className={activeTab === 2 ? 'nav-link active' : 'nav-link'}
                > 
                    Past Projects
                </button>
            </li>
          </>
      </ul>    
      <div className='sec_pad_bottom'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              {
                projects.data.length !== 0 ? projects.data.map((item, index) => {
                  return(
                    <div className='col-md-12' key={index}>
                      <div className={item.project_type === 1 ? "project_item ongoing" : "project_item past"} key={index}>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                              <img src={item.project_image} height={100} width={100} alt="..." className="img-fluid d-block mx-auto" />
                          </div>
                          <div className="col-md-7">
                              <div className="past-text">
                                  <h4><Link to={`/project/${item.project_slug}`}>{truncate(item.project_name, {length: 100})}</Link></h4>
                                  <p>{truncate(item.project_short_desc, {length: 200})}</p>
                                  <div className="past-btn-box">
                                      <Link to={`/project/${item.project_slug}`} className="link text-danger">Learn More</Link>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }) : <NoDataFound className={'col-12 bg-light p-5 h-100'}/>
              }
            </div>
            
            {
              isLoading ? '' : projects.totalPage > 1 ?  (<Pagination currentPage={page} totalPages={projects?.totalPage} onPageChange={handlePageChange}/>) : ''
            }
          </div>
          <div className='col-md-4'>
            <ContactWidget inputColumn="false"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabContent;
