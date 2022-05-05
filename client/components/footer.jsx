import React from 'react';
import styled from 'styled-components';
import ListOfLinks from './listoflinks';
import IconFone from './iconfone';

const FooterWrapper = styled.div`
display:block;
background: #FAFAFA;
height: 200px;
width: 100%;
position: relative;
border-top: 1px solid #D8D8D8;

@media(min-width:1140px){
display:grid;
grid-template-columns:1fr 1fr;
}

`
const Footer = () =>{
  return <FooterWrapper>
   <ListOfLinks/>
     <IconFone name="src-5" x="-5" y="5" size='250'/>
      <IconFone name="src-3" x="80" y="-8" size='100'/>
       <IconFone name="src-2" x="95" y="5" size='100'/>
  </FooterWrapper>
}

export default Footer