import React from 'react'

const Image = ({src, height, width, alt, className}) => {
  return (
    <img src={src} height={height} width={width} alt={alt} className={className} />
  )
}

export default Image