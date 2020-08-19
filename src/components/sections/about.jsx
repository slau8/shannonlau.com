import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class About extends Component {
  state = {};
  render() {
    return (
      <Fade>
        <div className='about section'>
          <div className='section-title'>About</div>
          <div className='section-content'>
            <p>
              Hello! I’m Shannon, a creator who loves building technical
              products with intentionally designed visuals and experiences. Most
              of my knowledge comes from the{' '}
              <a href='https://umich.edu/' className='link-blue' target='blank'>
                University of Michigan
              </a>{' '}
              where I'm exploring computer science and multidiscplinary design,{' '}
              <a
                href='https://en.wikipedia.org/wiki/Stuyvesant_High_School'
                className='link-green'
                target='blank'>
                Stuyvesant High School
              </a>
              , learning from those around me, and tons of googling. Recently, I
              built experience-elevating features for{' '}
              <a
                href='https://www.capitalone.com/'
                className='link-yellow'
                target='blank'>
                Capital One
              </a>
              's voice applications as a software engineering intern.
            </p>{' '}
            <p>
              I’m hyped about technology and hardware with functional design.
              Cameras, speakers + headphones, electric skateboards — if it has a
              power button, it's fair game. I enjoy building software that
              interfaces and complements some of these tangible products.
            </p>{' '}
            <p>
              When I’m not coding, I take photos, make{' '}
              <a
                href='https://www.instagram.com/p/B_sb7D8lx5R/'
                className='link-red'
                target='blank'>
                videos
              </a>
              , and follow new apparel and footwear. As a player on Michigan
              Flywheel, I design jersey kits and gear.
            </p>
          </div>
        </div>
      </Fade>
    );
  }
}

export default About;
