import React, { Component } from 'react';
import Icons from '../icons/icons';
import LogoIcon from '../icons/logo';

class Hero extends Component {
  state = {};
  render() {
    return (
      <div className='hero'>
        <div className='hero-content'>
          <LogoIcon />
          <h1 className='hero-text'>
            I'm <span className='name'>Shannon Lau</span>, a design-driven
            software engineer and creator focused on building human-centered
            experiences. <span className='accent'>NYC-bred.</span>
          </h1>
          <h2 className='hero-text'>
            Check out my{' '}
            <a
              className='link-red'
              href='/shannon-lau-resume.pdf'
              target='blank'>
              resume
            </a>{' '}
            and let's talk:{' '}
            <a
              className='link-green'
              href='https://mail.google.com/mail/?view=cm&fs=1&to=shanlau@umich.edu'
              target='blank'>
              shanlau@umich.edu
            </a>
          </h2>
          <Icons />
        </div>
      </div>
    );
  }
}

export default Hero;
