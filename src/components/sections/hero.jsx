import React, { Component } from 'react';
import Icons from '../icons/icons';

class Hero extends Component {
  state = {};
  render() {
    return (
      <div class='hero'>
        <h1 className='hero-text'>
          I'm <span className='name'>Shannon Lau</span>, a design-driven
          software engineer and creator focused on building human-centered
          experiences. <span className='accent'>NYC-bred.</span>
        </h1>
        <h2 className='hero-text'>
          Check out my{' '}
          <a
            className='underline-link'
            href='/shannon-lau-resume.pdf'
            target='blank'>
            resume
          </a>{' '}
          and let's talk:{' '}
          <a
            className='underline-link'
            href='https://mail.google.com/mail/?view=cm&fs=1&to=shanlau@umich.edu'
            target='blank'>
            shanlau@umich.edu
          </a>
        </h2>
        <Icons />
      </div>
    );
  }
}

export default Hero;
