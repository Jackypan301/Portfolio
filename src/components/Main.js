import React from 'react'
import '../styles/Main.css'
import Button from './Button.js'
import '../App.css'

function Main() {
  return(
  <div className='main-container'>
   <video src='/videos/video1.mp4' autoPlay loop muted />
   <img src='/images/img-3.jpg' alt='me' className='main-profile-pic' />
    <h1> Hi I'm Jacky Pan </h1>
    <p>I am a Full Stack Web Developer with a huge interest in Front-End Development. Check out my website to see my latest coding projects. Feel free to contact me by pressing the button below. Thanks for visiting.</p>
    <div>
      <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> Contact Me </Button>
    </div>
  </div>
  )
}

export default Main;

