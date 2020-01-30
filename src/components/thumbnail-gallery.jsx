import React, { Component } from 'react';
import ThumbnailGrid from './thumbnail-grid.jsx'
import ThumbnailMain from './thumbnail-main.jsx'

import {
  PhotoGallery,
  LeftContainer,
  RightContainer
} from '../CSS/thumbnail-galleryCSS.js'


export default class Thumbnail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <PhotoGallery>

        {/* Left Side */}
        <LeftContainer>
          <ThumbnailMain />
          <ThumbnailGrid />
        </LeftContainer>

        {/* Right Side */}
        <RightContainer>
          right
        </RightContainer>
      </PhotoGallery>
    )
  }
}

const thumbnailGalleryStyles = {
  background: '#ddd',
  height: '521px',
  width: '750px',
  margin: '40px auto',
  display: 'flex'
}