import React, { Component } from 'react';

class About extends Component {
  state = {};
  render() {
    return (
      <div className='about section'>
        <div className='section-title'>About</div>
        <div className='section-content'>
          <p>
            Hello! I’m Shannon, a software engineer and creative who loves
            building technical products with intentionally designed visuals and
            experiences. Most of my knowledge comes from studying computer
            science and multidisciplinary design at the{' '}
            <a href='https://umich.edu/' className='link-cyan' target='blank'>
              University of Michigan
            </a>
            ,{' '}
            <a
              href='https://en.wikipedia.org/wiki/Stuyvesant_High_School'
              className='link-blue'
              target='blank'>
              Stuyvesant High School
            </a>
            , learning from those around me, and lots of googling. Recently, I
            built experience-elevating features for voice-based applications at{' '}
            <a
              href='https://www.capitalone.com/'
              className='link-yellow'
              target='blank'>
              Capital One
            </a>{' '}
            as a software engineering intern.
          </p>{' '}
          <p>
            I’m hyped about technology and hardware that involves functional
            design. Cameras, speakers + headphones, electric skateboards —
            anything with a power button is fair game. I enjoy building software
            that interfaces and complements some of these tangible products.
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
    );
  }
}

export default About;
