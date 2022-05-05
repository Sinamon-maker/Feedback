import React, { useState } from 'react'
import {  useDispatch } from "react-redux";
import { sendMessage } from "../redux/reducers/message";
import styled from 'styled-components'
import Input from './input'
import Textarea from './textarea'
import Button from './button'

const FormComponentWrapper = styled.form`
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`
const HeadingWrapper = styled.h1`
  margin-bottom: 30px;
`

const FormComponent = () => {

 const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onChange = (e) => {
        const newValue = e.target.value
    if (e.target.name === 'name') setName(newValue)
    if (e.target.name === 'email') setEmail(newValue)
    if (e.target.name === 'message') setMessage(newValue)
  }

  const onSubmit = (e) => {
     e.preventDefault()
      const messageObj = {name, email, message}
     dispatch(sendMessage(messageObj))
     setName("")
   setEmail("")
    setMessage("")
  }

  return (
    <FormComponentWrapper onSubmit={onSubmit}>
      <HeadingWrapper>Reach out to us!</HeadingWrapper>
      <Input
        placeholder="Your name*"
        name="name"
        value={name}
        onChange={onChange}
      />
      <Input
        placeholder="Your e-mail*"
        name="email"
        value={email}
        onChange={onChange}
      />
      <Textarea
        placeholder="Your message*"
        name="message"
        value={message}
        onChange={onChange}
      />
      <Button>Press me</Button>
    </FormComponentWrapper>
  )
}

export default FormComponent
