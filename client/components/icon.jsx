import React from 'react'

const IconLink = ({ name }) => {
  const source = `../Icons/sprite.svg#${name}`
  const goTo = `https://www.${name}.com`
  return (
    <a href={goTo} target="_blank">
      <svg width="10" style={{ marginRight: '10px' }}>
        <use xlinkHref={source}></use>
      </svg>
    </a>
  )
}

export default IconLink
