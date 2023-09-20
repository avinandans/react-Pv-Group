import axios from '../../../services';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const Details = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([])

  var formdata = new FormData();
  formdata.append("slug", id);
  
  useEffect(() => {
      axios.post('/project-details', {"slug": id}).then((res)=>{
        setProjects(res.data.data)
        console.log(res.data.data)
      }).catch((err)=>{
          console.log(err.message)
      })    
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default Details