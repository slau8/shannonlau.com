import React, { Component } from 'react';
import Icons from '../icons/icons';
import LogoIcon from '../icons/logo';
import Fade from 'react-reveal/Fade';

class Hero extends Component {
  state = {};
  render() {
    const duration = 1000;
    const delay = 100;

    return (
      <div className='hero'>
        <div className='hero-content'>
          <Fade duration={duration}>
            <LogoIcon />
          </Fade>
          <Fade duration={duration} delay={delay}>
            <h1 className='hero-text'>
              I'm <span className='name'>Shannon Lau</span>, a design-driven
              software engineer and creative focused on building human-centered
              experiences. <span className='accent-green'>NYC-bred.</span>
            </h1>
          </Fade>
          <Fade duration={duration} delay={delay * 2}>
            <h2 className='hero-text'>
              Check out my{' '}
              <a
                className='link-yellow'
                href='/shannon-lau-resume.pdf'
                target='blank'>
                resume
              </a>{' '}
              and let's talk:{' '}
              <a
                className='link-red'
                href='https://mail.google.com/mail/?view=cm&fs=1&to=shanlau@umich.edu'
                target='blank'>
                shanlau@umich.edu
              </a>
            </h2>
          </Fade>
          <Fade duration={duration} delay={delay * 3}>
            <Icons />
          </Fade>
        </div>
      </div>
    );
  }
}

export default Hero;
