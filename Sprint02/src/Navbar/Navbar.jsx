import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Nav'>
        <span className='Appname'>Everlasting</span>
        <ul>
            <li>Home</li>
            <li>Log in</li>
        </ul>
    </div>
  )
}

export default Navbar