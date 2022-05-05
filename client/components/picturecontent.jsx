import React from 'react'
import styled from 'styled-components'
import picture from '../images/Captura.png'
import IconFone from './iconfone'

const PictureWrapper = styled.div`
display:none;


@media(min-width:768px){
  display:block;
object-fit: fill;
  position: relative;
  wight: 50%;
  overflow: hidden;
}

`

const Img = styled.img`
  height: 100%;
  position: relative;
  clip-path: circle(70% at 100% 30%);
`

const PictureContent = () => {
  return (
    <PictureWrapper>
      <Img src={picture} />
      <IconFone name="src-5" x="-5" y="55" size="250" />
      <IconFone name="src-4" x="20" y="50" size="100" />
    </PictureWrapper>
  )
}

export default PictureContent
