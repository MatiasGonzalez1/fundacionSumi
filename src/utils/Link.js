import React from 'react'

const Link = ({name, link}) => {
  return (
    <li>
      <a href={link}>{name}</a>
      </li>
  )
}

export default Link