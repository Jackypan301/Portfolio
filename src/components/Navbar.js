import React, {useState, useEffect} from 'react'
import {Link } from 'react-router-dom';
import Button from './Button.js'
import '../styles/Navbar.css'
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] =useState(true);

  const handleClick = () => setClick(!click);
  const closeMobilemenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(()=>{
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobilemenu}>
            JPAN <i className='fab fa-typo3'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            < i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobilemenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/about-me' className='nav-links' onClick={closeMobilemenu}>
                  About Me
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/projects' className='nav-links' onClick={closeMobilemenu}>
                  Projects
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact-info' className='nav-links' onClick={closeMobilemenu}>
                  Contact Info
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobilemenu}>
                  Message Me
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'> Message Me</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar;