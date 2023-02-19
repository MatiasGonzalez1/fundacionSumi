import React from 'react';
import '../styles/utils.link.css';

const Link = ({name, link}) => {
  return (
    <li>
      <a href={link}>{name}</a>
      </li>
  )
}

export default Link