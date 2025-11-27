import React, { Component } from 'react';
import Section from './../section';

class About extends Component {
  state = {};
  render() {
    return (
      <Section title='about'>
        <p>
          I'm Shannon, a creator building at the intersection of engineering and
          design. Much of my knowledge comes from the{' '}
          <a
            href='https://www.mlive.com/news/ann-arbor/2022/11/more-chonky-squirrels-are-showing-up-everywhere-at-the-university-of-michigan.html'
            className='link-blue'
            target='_blank'
            rel='noopener noreferrer'>
            University of Michigan
          </a>
          ,{' '}
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
          <a
            href='https://www.microsoft.com/en-us/microsoft-365/microsoft-lists'
            className='link-red'
            target='_blank'
            rel='noopener noreferrer'>
            Microsoft
          </a>
          's new productivity app, and the Codec Avatars Project at{' '}
          <a
            href='https://tech.fb.com/codec-avatars-facebook-reality-labs/'
            className='link-blue'
            target='_blank'
            rel='noopener noreferrer'>
            Meta Reality Labs
          </a>
          . At Michigan, I taught data structures & algorithms and mentored
          student design teams
        </p>
        <p>
          I recently worked on smart roads with{' '}
          <a
            href='https://www.michiganbusiness.org/reports-data/success-stories/cavnue-cav-corridor/'
            className='link-green'
            target='_blank'
            rel='noopener noreferrer'>
            Cavnue
          </a>
          , but lately, my focus has shifted closer to home, advocating for
          safer streets and equitable housing. My tools may evolve, but the goal
          is the same: to make daily life more livable, more just, more whole.
        </p>
        {/* <p>
          I'm hyped about {' '}
          <a href="https://www.youtube.com/watch?v=b1w9_cob_zw"
            className='link-yellow'
            target='_blank'
            rel='noopener noreferrer'>
            ubiquitous technologies
          </a> with functional design.
          Speech-to-text tools, cameras, headphones, fitness trackers, electric skateboards, and more —
          I’m envisioning a future where these tools feel so intuitive in our daily flow,
          that they almost fade into the background. Our focus remains grounded in the present,
          on the beauty of our everyday, and in the spaces where we feel truly connected.
        </p>{' '} */}
        <p>
          On the analog side of life, I'm jamming on the cajon, urban hiking,
          and exploring new third places. I enjoy workin' on bikes over at{' '}
          <a
            href='http://commoncycle.org/'
            className='link-yellow'
            target='_blank'
            rel='noopener noreferrer'>
            Common Cycle
          </a>
          .
        </p>
      </Section>
    );
  }
}

export default About;
