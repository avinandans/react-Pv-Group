import React from 'react';
import './index.css';

const SecHeading = ({title, titleTwo, paragraph}) => {
  return (
    <div className='pro-text'>
        <h4><span>{title}</span></h4>
        <div dangerouslySetInnerHTML ={{__html:paragraph}}></div>
    </div>
  )
}

export default SecHeading