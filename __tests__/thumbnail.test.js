const thumbnailGallery require('../src/components/thumbnail-gallery.jsx')

describe('thumbnail-gallery', () => {
  test('should have a state', () => {
    const newThumbnailGalleryState = new Thumbnail();
    const currentThumbnailGalleryState = {
      images: [],
      activeIndex: 0,
    };
    expect(newThumbnailGalleryState.state).toEqual(currentThumbnailGalleryState)
  })
})
