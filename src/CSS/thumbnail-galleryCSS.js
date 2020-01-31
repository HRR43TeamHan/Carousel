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
  background: 'yellow',
  display: 'flex',
  flexWrap: 'wrap'
});

export const PhotoMain = styled.div({
  height: '70%',
  width: "100%",
  background: 'black',
  position: 'relative'
})

export const PhotoThumbnail = styled.div({
  height: '50%',
  width: '10%',
  background: 'red'
})

export const ActivePhoto = styled.img({
  width: '100%',
  height: '100%'
})

export const PhotoSmallBox = styled.img({
  width: '100%',
  height: '100%'
})