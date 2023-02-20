import React from 'react';
import '../styles/utils.link.css';

const Link = ({name, link, ico}) => {
  return (
    <li>
      <a href={link}>{ico}{name}</a>
      </li>
  )
}

export default Link