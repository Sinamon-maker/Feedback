import React from 'react';
import styled from 'styled-components';
import FormContent from './formcontent';
import IconFone from './iconfone';
import PictureContent from './picturecontent';

const MainWrapper = styled.div`
flex-grow: 1;
position: relative;
width: 100%;
@media(min-width:768px){
  flex-grow: 1;
position: relative;
width: 100%;
display:flex;
justify-content: space-between;
}
`
const MainContent = () =>{
  return <MainWrapper>
   <FormContent/>
   <PictureContent/>
  <IconFone name="src-6" x="0" y="20" size='200'/>
  <IconFone name="src-6" x="25" y="65" size='200'/>
  <IconFone name="src-6" x="60" y="20" size='200'/>
  </MainWrapper>
}

export default MainContent