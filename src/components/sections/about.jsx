import React, { Component } from 'react';
import Section from './../section';

class About extends Component {
  state = {};
  render() {
    return (
      <Section title='about'>
        <p>
          Hello! I'm Shannon, a creator who's stoked to build things that intersect
          engineering and design. Most of my knowledge comes from the{' '}
          <a
            href='https://umich.edu/'
            className='link-blue'
            target='_blank'
            rel='noopener noreferrer'>
            University of Michigan
          </a>,{' '}
          <a
            href='https://en.wikipedia.org/wiki/Stuyvesant_High_School'
            className='link-green'
            target='_blank'
            rel='noopener noreferrer'>
            Stuyvesant High School
          </a>
          , learning from many incredible minds around me, and tons of googling. I've
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
          </a>'s new productivity app as a software engineering intern. Recently,
          I interned with{' '}
          <a href="https://tech.fb.com/codec-avatars-facebook-reality-labs/"
            className='link-blue'
            target='_blank'
            rel='noopener noreferrer'>
            Facebook Reality Labs
          </a> building the Codec Avatars Project.
        </p>{' '}
        <p>
          I'm hyped about ubiquitous technology with functional design.
          Cameras, headphones, smart devices, electric skateboards — if it turns on,
          it's fair game. I enjoy building software that builds and reimagines these
          tangible experiences.
        </p>{' '}
        <p>
          On the analog side of life, I've taught data structures & algorithms and
          mentored student design teams. I love playing in the water as a volunteer
          at the Downtown Boathouse (
          <a
            href='https://www.downtownboathouse.org/'
            className='link-green'
            target='_blank'
            rel='noopener noreferrer'>
            free kayaking for all!
          </a>
          ).
        </p>
      </Section>
    );
  }
}

export default About;
