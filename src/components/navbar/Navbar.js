import React from 'react'
import Link from '../../utils/Link';
import '../../styles/comp.navbar.css';
import { FaBeer } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link 
        ico={<FaBeer/>}
        name='Sueños Misioneros'
        link='/' />
      </div>
      <ul className='nav'>
     <Link 
     name='Nosotros'
     link='/nosotros'/>
      <Link 
     name='Historia'
     link='/historia'/>
      <Link 
     name='Contacto'
     link='/contacto'/>
      </ul>
    </div>
  )
}

export default Navbar