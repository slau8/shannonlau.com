import React, { Component } from 'react';
import Section from './../section';

class About extends Component {
  state = {};
  render() {
    return (
      <Section title='about'>
        <p>
          Hello! I’m Shannon, a creator who loves building things that intersect
          engineering and design. Most of my knowledge comes from the{' '}
          <a
            href='https://umich.edu/'
            className='link-blue'
            target='_blank'
            rel='noopener noreferrer'>
            University of Michigan
          </a>{' '}
          where I'm exploring computer science and multidiscplinary design,{' '}
          <a
            href='https://en.wikipedia.org/wiki/Stuyvesant_High_School'
            className='link-green'
            target='_blank'
            rel='noopener noreferrer'>
            Stuyvesant High School
          </a>
          , learning from many incredible minds around me, and tons of googling. Recently, I
          built experience-elevating features for{' '}
          <a
            href='https://www.capitalone.com/'
            className='link-yellow'
            target='_blank'
            rel='noopener noreferrer'>
            Capital One
          </a>
          's voice applications and{' '}
          <a href="https://www.microsoft.com"
            className='link-red'
            target='_blank'
            rel='noopener noreferrer'>
            Microsoft
          </a>'s new productivity app as a software engineering intern. Currently,
          I'm interning with{' '}
          <a href="https://tech.fb.com/codec-avatars-facebook-reality-labs/"
            className='link-blue'
            target='_blank'
            rel='noopener noreferrer'>
            Facebook Reality Labs
          </a> working on the Codec Avatars Project.
        </p>{' '}
        <p>
          I’m hyped about technology and hardware with functional design.
          Cameras, speakers + headphones, electric skateboards — if it has a
          power button, it's fair game. I enjoy building software that
          interfaces and complements some of these tangible products.
        </p>{' '}
        <p>
          When I’m not coding, I teach data structures and algorithms and
          mentor student design teams. I take photos, make{' '}
          <a
            href='https://www.instagram.com/p/B_sb7D8lx5R/'
            className='link-green'
            target='_blank'
            rel='noopener noreferrer'>
            videos
          </a>
          , and follow new apparel and footwear. As a player on Michigan
          Flywheel, I design jersey kits and gear.
        </p>
      </Section>
    );
  }
}

export default About;
