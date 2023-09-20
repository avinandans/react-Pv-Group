import React, { useEffect, useState } from 'react'
import bg from "../../asstes/image/image2.jpg"
import PageTitle from '../../components/pageTitle'
import './index.css'
import axios from '../../services'
import {TabComponent} from '../../components'
import Listing from './listing'


const Projects = () => {
  const [responseData, setResponseData] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [past, setPast] = useState([]);

  const tabs = [
    {
      title: 'Ongoing',
      content: (<Listing itemsPerPage={1} items={ongoing}/>),
    },
    {
      title: 'Past',
      content: (<Listing itemsPerPage={1} items={past}/>),
    },
  ];

  useEffect(()=>{
    axios.get("/project-list").then((res)=>{
      setResponseData(res.data.data.project_list)
    })
    axios.get("/project-list?page_no=1&page_limit=1").then((res)=>{
      // setResponseData(res.data.data.project_list)
      console.log(res.data.data)
    })
  }, [])

  useEffect(() => {
    // Create array1 and array2 based on responseData
    const newArray1 = [];
    const newArray2 = [];

    responseData.forEach(item => {
      // Modify the object properties as needed
      const newItem = {
        ...item
      };

      if (item.project_type === 1 ) {
        newArray1.push(newItem);
      } else {
        newArray2.push(newItem);
      }

    });

    setOngoing(newArray1);
    setPast(newArray2);
  }, [responseData]);

  return (
    <>
      <PageTitle title={"Projects"} background={bg}/>
      <main className='sec_pad_top'>
        <div className='container'>
          <TabComponent tabs={tabs} />
        </div>
      </main>      
    </>
  )
}

export default Projects