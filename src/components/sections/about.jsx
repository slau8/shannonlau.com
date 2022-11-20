import React, { Component } from 'react';
import Section from './../section';

class About extends Component {
  state = {};
  render() {
    return (
      <Section title='about'>
        <p>
          I'm Shannon, a creator building at the intersection of
          engineering and design. Much of my knowledge comes from the{' '}
          <a
            href='https://www.mlive.com/news/ann-arbor/2022/11/more-chonky-squirrels-are-showing-up-everywhere-at-the-university-of-michigan.html'
            className='link-blue'
            target='_blank'
            rel='noopener noreferrer'>
            University of Michigan
          </a>,{' '}
          <a
            href='https://youtu.be/FWm79x7ZI0k?t=56'
            className='link-green'
            target='_blank'
            rel='noopener noreferrer'>
            Stuyvesant High School
          </a>
          , learning from incredible minds around me, and tons of googling. I've
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
          </a>'s new productivity app. At Michigan, I taught data structures &
          algorithms and mentored student design teams. Most recently, I interned with{' '}
          <a href="https://tech.fb.com/codec-avatars-facebook-reality-labs/"
            className='link-blue'
            target='_blank'
            rel='noopener noreferrer'>
            Reality Labs at Meta
          </a>, developing the Codec Avatars Project.
        </p>{' '}
        <p>
          I'm hyped about {' '}
          <a href="https://www.youtube.com/watch?v=b1w9_cob_zw"
            className='link-green'
            target='_blank'
            rel='noopener noreferrer'>
            ubiquitous technologies
          </a> with functional design.
          Cameras, headphones, smart devices, electric skateboards — if it turns on,
          it's fair game. My vision is to reimagine and expand these
          tangible experiences.
        </p>{' '}
        <p>
          On the analog side of life, I'm jamming on the cajon, urban hiking, and exploring new third places.
          I love playing in the water as a volunteer at the Downtown Boathouse —{' '}
          <a
            href='https://www.downtownboathouse.org/'
            className='link-yellow'
            target='_blank'
            rel='noopener noreferrer'>
            free kayaking for all!
          </a>
        </p>
      </Section>
    );
  }
}

export default About;
