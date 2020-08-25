import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection () {
  return (
    <div className='hero-container'>
      {/*<video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>Making New Connections</h1>
      <p>What are you doing for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get Started
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Watch Trailer <i className='fa fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
