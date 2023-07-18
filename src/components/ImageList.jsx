import React from 'react'
import ImageItem from './ImageItem.jsx'

const ImageList = ({imagesPlaceholder}) => {
  return (
    <div className='imageList'>
        {imagesPlaceholder.map((image, index) => {
            return <ImageItem key = {index} pic = {image}/>
        })}
    </div>
  )
}

export default ImageList