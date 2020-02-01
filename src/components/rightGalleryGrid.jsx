import React from 'react';
import RGalleryThumbnail from './rightGallery-thumbnail.jsx';
import {
  RPhotoGrid
} from '../CSS/thumbnail-galleryCSS.js'
const RGalleryGrid = () => {
  return (
    <RPhotoGrid>
      <RGalleryThumbnail />
      <RGalleryThumbnail />
      <RGalleryThumbnail />
    </RPhotoGrid>
  )
}



export default RGalleryGrid;