import React, { Component } from 'react';
import Icons from '../../icons/icons';
import LogoIcon from '../../icons/logo';
import IconScroll from '../../icons/scroll';
import Fade from 'react-reveal/Fade';

class Hero extends Component {
  state = {};
  render() {
    const duration = 1000;
    const delay = 100;

    return (
      <React.Fragment>
        <div className='hero'>
          <div className='hero-content'>
            <Fade duration={duration}>
              <LogoIcon />
            </Fade>
            <Fade duration={duration} delay={delay}>
              <h1 className='hero-text'>
                I'm <span className='name'>Shannon Lau</span>, a
                software engineer and creative technologist. Let's build
                human-centered experiences, together.{' '}
                <span className='accent-green'>NYC-bred.</span>
              </h1>
            </Fade>
            <Fade duration={duration} delay={delay * 2}>
              <h2 className='hero-text'>
                Check out my{' '}
                <a
                  className='link-yellow'
                  href='/shannon-lau-resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'>
                  resume
                </a>{' '}
                and let's talk:{' '}
                <a
                  className='link-red'
                  href='https://mail.google.com/mail/?view=cm&fs=1&to=shanlau@umich.edu'
                  target='_blank'
                  rel='noopener noreferrer'>
                  shanlau@umich.edu
                </a>
              </h2>
            </Fade>
            <Fade duration={duration} delay={delay * 3}>
              <Icons />
            </Fade>
          </div>
        </div>
        <Fade duration={duration} delay={delay * 4}>
          <IconScroll />
        </Fade>
      </React.Fragment>
    );
  }
}

export default Hero;
