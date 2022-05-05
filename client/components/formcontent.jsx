import React from 'react';
import styled from 'styled-components';
import FormComponent from './form';
import IconFone from './iconfone';

const FormWrapper = styled.div`
width: 50%;
margin-left: 150px;
display: flex;
justify-content: center;
align-items: center;

`
const FormContent = () =>{
  return <FormWrapper>

   <FormComponent/>
    <IconFone name="src-1" x="50" y="5" size='100'/>
    <IconFone name="src-2" x="0" y="5" size='100'/>
  </FormWrapper>
}

export default FormContent