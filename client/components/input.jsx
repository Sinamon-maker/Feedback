import React from 'react';
import styled from 'styled-components';


const InputWrapper = styled.input`
border: 1px solid #DCDCDC;
border-radius: 10px;
min-width: 0px;
max-width:557px;

padding-bottom: 30px;
padding-top: 31px;
padding-left: 46px;
padding-right: 8px;
margin-bottom: 8px;
`
const Input = ({placeholder, name, value, onChange}) =>{
  return <InputWrapper placeholder={placeholder} name={name} value={value} onChange={onChange}/>


}

export default Input