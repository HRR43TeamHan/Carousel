import React from 'react';
import {
  PhotoThumbnail,
  PhotoSmallBox
} from '../CSS/thumbnail-galleryCSS.js'

const Thumbnail = ({imgUrl, handleClick, index}) => {
  return (
    <PhotoThumbnail>
      <PhotoSmallBox src={imgUrl} onClick={handleClick} data-index={index}>

      </PhotoSmallBox>
    </PhotoThumbnail>
  )

}

export default Thumbnail