import React, { useEffect, useState } from 'react'
import bg from "../../asstes/image/image2.jpg"
import PageTitle from '../../components/pageTitle'
import './index.css'
import ListingPage from './listing'
import { ProjectProvider } from './projectContext'


const Projects = () => {
  return (
    <>
      <PageTitle title={"Projects"} background={bg}/>
      <main className='sec_pad_top'>
        <div className='container'>
          <ProjectProvider>
            <ListingPage/>
          </ProjectProvider>
        </div>
      </main>      
    </>
  )
}

export default Projects