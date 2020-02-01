import React, { Component } from 'react';
import ThumbnailGrid from './thumbnail-grid.jsx';
import ThumbnailMain from './thumbnail-main.jsx';
import RGalleryGrid from './rightGalleryGrid.jsx';
// import RightThumbnail from './rightGallery-thumbnail.jsx';


import {
  PhotoGallery,
  LeftContainer,
  RightContainer
} from '../CSS/thumbnail-galleryCSS.js'


export default class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      activeIndex: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let url = window.location.pathname.split('/');
    let id = url[1];
    fetch(`http://127.0.0.1:3001/api/carousel/${id}`)
    .then((data) => {
      data = data.json();
      console.log(data);
      return data;
    })
    .then((data) => {
      console.log(data)
      this.setState( {images: data} )
    })
  }

  renderThumbnails() {
    const { images, activeIndex } = this.state
    if (images.length) {
      return (
        <ThumbnailMain activeThumbnail= {images[activeIndex]} />
      )
    }
  }

  handleClick(e) {
    const newActiveIndex = e.target.getAttribute('data-index')
    this.setState({activeIndex:newActiveIndex})
  }

  render() {
    const { images } = this.state
    return(
      <PhotoGallery>

        {/* Left Side */}
        <LeftContainer>
          {this.renderThumbnails()}

          <ThumbnailGrid images={images} handleClick={this.handleClick} />
        </LeftContainer>

        {/* Right Side */}
        <RightContainer>
          <RGalleryGrid />
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