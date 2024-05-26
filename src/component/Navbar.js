import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='anim'>
          <img
            className='logo'
            src='https://www.emuqtech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Femuq-logo-bg.9e8dd182.png&w=640&q=75'
            alt='LOGO'
          />
          
          
        
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar