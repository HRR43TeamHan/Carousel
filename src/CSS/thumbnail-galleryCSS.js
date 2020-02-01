import styled from '@emotion/styled'

export const PhotoGallery = styled.div({
  background: '#ddd',
  height: '471px',
  width: '811px',
  margin: '40px auto',
  display: 'flex'
});

export const LeftContainer = styled.div({
  flex: 3
});

export const RightContainer = styled.div({
  flex: 1
});

export const PhotoGrid = styled.div({
  height: '30%',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  'justify-content': 'space-around'
});

export const PhotoMain = styled.div({
  height: '69.7%',
  width: "99.7%",
  padding: '.15%',
  position: 'relative'
})

export const PhotoThumbnail = styled.div({
  height: '49.2%',
  width: '9.7%'
})

export const ActivePhoto = styled.img({
  width: '100%',
  height: '100%'
})

export const PhotoSmallBox = styled.img({
  width: '100%',
  height: '100%',
})

export const RPhotoGrid = styled.div({
  width: '100%',
  height: '100%',
  background: 'yellow',
  display: 'flex',
  flexWrap: 'wrap',
  'justify-content': 'space-between'

})

export const RPhoto = styled.div({
  height: '33.10%',
  width: '99.7%',
  background: 'red'

})