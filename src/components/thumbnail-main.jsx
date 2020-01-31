import React from 'react';

import {
  PhotoMain,
  ActivePhoto
} from '../CSS/thumbnail-galleryCSS.js'

const ThumbnailMain = ({ activeThumbnail }) => {
  return (
    <PhotoMain>
      <ActivePhoto src={activeThumbnail.img_url}>

      {/* <img src={activeThumbnail.img_url}
      // style={{
        //   width: '100%',
        //   height: '100%'
        // }}
        /> */}
        </ActivePhoto>
    </PhotoMain>
  )
}

export default ThumbnailMain