import React from 'react'
import Link from '../../utils/Link';
import '../../styles/comp.navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>Logo</div>
      <ul className='nav'>
     <Link 
     name='Nosotros'
     link=''/>
      <Link 
     name='Historia'
     link=''/>
      <Link 
     name='Contacto'
     link=''/>
      </ul>
    </div>
  )
}

export default Navbar