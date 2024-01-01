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
                <span className='accent-green'>NYC-bred.</span> ↓
              </h1>
            </Fade>
            <Fade duration={duration} delay={delay * 3}>
              <Icons />
            </Fade>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hero;
