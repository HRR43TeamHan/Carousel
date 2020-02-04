import React, { Component } from 'react'
import ThumbnailGallery from './thumbnail-gallery.jsx'

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return(
      <div>
        <ThumbnailGallery />
      </div>
    )
  }
}