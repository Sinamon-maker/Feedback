import React from 'react';
import styled from 'styled-components';


const ButtonWrapper = styled.button`
padding-bottom: 28px;
padding-top: 27px;
padding-left: 52px;
padding-right: 52px;
align-self: start;
background: #FAD34F;
border-radius: 50px;
color: white;
font-family:'Apercu';
  font-size: 18px;
  font-weight: 500;

`
const Textarea = () =>{
  return <ButtonWrapper type="submit">
Send message
  </ButtonWrapper>
}

export default Textarea