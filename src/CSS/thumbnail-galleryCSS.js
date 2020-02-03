import styled from '@emotion/styled'

export const PhotoGallery = styled.div({
  height: '471px',
  width: '811px',
  margin: '40px auto',
  display: 'flex'
});

export const LeftContainer = styled.div({
  flex: 3,
  position: 'relative'
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

export const ActivePhoto = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex'
})

export const PhotoSmallBox = styled.img({
  width: '100%',
  height: '100%',
  cursor: 'pointer'
})

export const RPhotoGrid = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  'justify-content': 'space-between'

})

export const RPhoto = styled.img({
  height: '33.10%',
  width: '99.7%',


})

export const RightChevron = styled.div({
    display: 'flex',
    'font-size': '2rem',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '0.15%',
    top: '50%',
    width: '50px',
    height: '50px',
    transform: 'translate(0, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
    transition:'0.3s',
    '& i': {
      color: 'white'
    },
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.50)'
    }
})

export const LeftChevron = styled.div({
  display: 'flex',
  'font-size': '2rem',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  left: '0.15%',
  top: '50%',
  width: '50px',
  height: '50px',
  transform: 'translate(0, -50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  cursor: 'pointer',
  '& i': {
    color: 'white'
  },
  transition: '0.3s',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.50)'
  }
})