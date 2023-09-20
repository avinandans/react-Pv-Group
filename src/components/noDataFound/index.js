import React from 'react'
import style from './index.module.css'
const NoDataFound = ({className}) => {
  return (
    <div className={className}>
        <div className={style.noData}>
            No Data Found
        </div>
    </div>
  )
}

export default NoDataFound