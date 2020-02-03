import React from 'react';
import {
  PhotoThumbnail,
  PhotoSmallBox
} from '../CSS/thumbnail-galleryCSS.js'

const Thumbnail = ({imgUrl, handleClick, index, activeIndex}) => {
  return (
    <PhotoThumbnail>
      <PhotoSmallBox
      // src ={imgUrl}
      onClick={handleClick}
      data-index={index}
      css={{
          'background-image': `url("${imgUrl}")`,
          'background-size': 'cover',
          'background-position': '50% 50%',
           filter:`${activeIndex === index ? 'brightness(100%)' : 'brightness(50%)'}`}} >

      </PhotoSmallBox>
    </PhotoThumbnail>
  )

}

export default Thumbnail