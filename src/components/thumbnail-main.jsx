import React from 'react';

import {
  PhotoMain,
  ActivePhoto,
  LeftChevron,
  RightChevron,
  Fullsize
} from '../CSS/thumbnail-galleryCSS.js'

const ThumbnailMain = ({ activeThumbnail, handleLeftChevron, handleRightChevron, toggleModal}) => {
  return (
    <PhotoMain>
      <ActivePhoto onClick={toggleModal} css={{
          'background-image': `url("${activeThumbnail.img_url}")`,
          'background-size': 'cover',
          'background-position': '50% 50%',
      }}>
        <Fullsize>
          <i className="fas fa-expand-alt">Fullsize</i>

          </Fullsize>

        </ActivePhoto>
      <RightChevron onClick={handleRightChevron}><i className="fas fa-chevron-right"></i></RightChevron>
      <LeftChevron onClick={handleLeftChevron}><i className="fas fa-chevron-left"></i></LeftChevron>
    </PhotoMain>
  )
}

export default ThumbnailMain