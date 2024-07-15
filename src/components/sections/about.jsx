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
            href='https://www.capitalone.com/software/blog/'
            className='link-yellow'
            target='_blank'
            rel='noopener noreferrer'>
            Capital One
          </a>
          's voice applications,{' '}
          <a href="https://www.microsoft.com/en-us/microsoft-365/microsoft-lists"
            className='link-red'
            target='_blank'
            rel='noopener noreferrer'>
            Microsoft
          </a>'s new productivity app, and the Codec Avatars Project at {' '}
          <a href="https://tech.fb.com/codec-avatars-facebook-reality-labs/"
            className='link-blue'
            target='_blank'
            rel='noopener noreferrer'>
            Meta Reality Labs
          </a>. At Michigan, I taught data structures &
          algorithms and mentored student design teams. Currently, I'm engineering safer, smarter, and connected streets with{' '}
          <a href="https://www.michiganbusiness.org/reports-data/success-stories/cavnue-cav-corridor/"
            className='link-green'
            target='_blank'
            rel='noopener noreferrer'>
            Cavnue
          </a>.
        </p>{' '}
        <p>
          I'm hyped about {' '}
          <a href="https://www.youtube.com/watch?v=b1w9_cob_zw"
            className='link-yellow'
            target='_blank'
            rel='noopener noreferrer'>
            ubiquitous technologies
          </a> with functional design.
          I'm hyped about ubiquitous technologies with functional design.
          Speech-to-text tools, cameras, headphones, smart devices, electric skateboards, and more —
          I envision a future where our interactions with computers are subtle;
          while they're the backbone of some of our daily systems,
          our focus remains on our lived experience and the grounded reality of interacting with one another.
        </p>{' '}
        <p>
          On the analog side of life, I'm jamming on the cajon, urban hiking, and exploring new third places.
          I love playing in the water as a volunteer at the Downtown Boathouse —{' '}
          <a
            href='https://www.downtownboathouse.org/'
            className='link-red'
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
