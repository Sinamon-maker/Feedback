import React from 'react'

const IconFone = ({name, x, y, size}) => {
  const source = `../Icons/InlineSprite.svg#${name}`

  return (


    <svg width={size} style={{position:'absolute', zIndex: 1, top: `${y}%`, left: `${x}%`}}>
      <use xlinkHref={source}></use>
    </svg>

  )
}

export default IconFone
