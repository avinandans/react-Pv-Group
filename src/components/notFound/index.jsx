import React from 'react'
import './notFound.css'
import { Link } from 'react-router-dom'
const NotFound = ({data, className, button}) => {
  return (
    <>
        <div className={className === undefined ? `no_data` : `${className} no_data`}>
          <h1 className='mb-4 fs-2'>{data}</h1>
          {button === true ? <Link to={'/'} className="btn shape_btn btn_secondary">Back to Home</Link> : ''}
        </div>
    </>
  )
}

export default NotFound