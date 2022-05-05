import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  padding-bottom: 28px;
  padding-top: 27px;
  padding-left: 52px;
  padding-right: 52px;
  align-self: start;
  background: #fad34f;
  border-radius: 50px;
  color: white;
  font-family: 'Apercu';
  font-size: 18px;
  font-weight: 500;
  &:hover {
    &:not([disabled]) {
      background: #fae34f;
    }
  }
  &:disabled {
    opacity: 0.5;
  }
`
const Button = ({ disabled }) => {
  console.log('disabled', disabled)
  return (
    <ButtonWrapper type="submit" disabled={!disabled}>
      Send message
    </ButtonWrapper>
  )
}

export default Button
