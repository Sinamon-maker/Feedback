import React from 'react'
import styled from 'styled-components'
import IconLink from './icon'

const LinkListWrapper = styled.span`
  display: block;
  margin: 0 auto;
  width: 200px;
  position: relative;

  @media (min-width: 1140px) {
    align-self: center;
  }
`
const ListOfLinks = () => {
  return (
    <LinkListWrapper>
      <IconLink name="linkedin" />
      <IconLink name="twitter" />
      <IconLink name="facebook" />
      <IconLink name="pinterest" />
    </LinkListWrapper>
  )
}

export default ListOfLinks
