import React from 'react';

import {
  PhotoMain,
  ActivePhoto,
  LeftChevron,
  RightChevron
} from '../CSS/thumbnail-galleryCSS.js'

const ThumbnailMain = ({ activeThumbnail, handleLeftChevron, handleRightChevron }) => {
  return (
    <PhotoMain>
      <ActivePhoto css={{
          'background-image': `url("${activeThumbnail.img_url}")`,
          'background-size': 'cover',
          'background-position': '50% 50%',
      }}>

        </ActivePhoto>
      <RightChevron onClick={handleRightChevron}><i className="fas fa-chevron-right"></i></RightChevron>
      <LeftChevron onClick={handleLeftChevron}><i className="fas fa-chevron-left"></i></LeftChevron>
    </PhotoMain>
  )
}

export default ThumbnailMain