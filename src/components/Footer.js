import React from 'react';
import '../styles/Footer.css';
import Button  from './Button.js';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Please Reach Out to Me for more Information
        </p>
        <p className='footer-subscription-text'>
          You can email me at any time and I will be sure to get back to you.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Email Me Here</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/about-me'>Get to Know me Here</Link>

          </div>
          <div class='footer-link-items'>
            <h2>Contact </h2>
            <Link to='/sign-in'>Contact Me Here</Link>

          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Projects</h2>
            <Link to='/projects'>Coins.io</Link>
            <Link to='/projects'>Loading Scales</Link>
            <Link to='/projects'>HomesSweetHome</Link>
            <Link to='/projects'>Recon.io</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Links</h2>
            <Link to='/contact-info'>Email</Link>
            <Link to='/contact-info'>Linkedin</Link>
            <Link to='/contact-info'>Github</Link>

          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Jacky Pan
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Jacky © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;