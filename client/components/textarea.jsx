import React from 'react'
import styled from 'styled-components'

const TextareaWrapper = styled.textarea`
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 23px;
  min-width: 0px;
  max-width: 557px;
  padding-top: 31px;
  padding-left: 46px;
  padding-right: 8px;
  padding-bottom: 8px;
`
const Textarea = ({ placeholder, name, value, onChange }) => {
  return (
    <TextareaWrapper
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      rows="8"
    />
  )
}

export default Textarea
