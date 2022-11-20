import React, { Component } from 'react';
import Section from './../section';
import Role from './../role';

class Experience extends Component {
  state = {
    active: 0,
    experiences: [
      {
        company: 'Meta',
        url: 'https://tech.fb.com/codec-avatars-facebook-reality-labs/',
        title: 'Software Engineer Intern',
        start: 'August 2021',
        end: 'November 2021',
        city: 'Pittsburgh',
        state: 'PA',
        details: [
          'Optimized 3D capture to build VR telepresence for Reality Lab\'s Codec Avatars.',
          'Implemented C++ lossy image algorithms and scripted Python benchmarks to select the most optimal algorithm in speed, space, and image quality, saving 95% space per image.'
        ],
        color: 'yellow',
      },
      {
        company: 'Microsoft',
        url: 'https://www.microsoft.com/en-us/',
        title: 'Software Engineer Intern',
        start: 'May 2021',
        end: 'August 2021',
        city: 'Seattle',
        state: 'WA',
        details: [
          'Built and tested critical user-editing features for Microsoft\'s new productivity app, ensuring functionality and customizability with React, Typescript, and Sass.',
          'Visualized app performance and resilience metrics extensively using the company\'s internal data tooling, enabling leadership to gauge the app\'s usage for the first time.',
          'Identified and resolved telemetry bugs, while coordinating with feature owners and product managers, optimizing our median reliability rate to 99.9%.',
        ],
        color: 'red',
      },
      {
        company: 'Comau',
        url: 'https://www.comau.com/en',
        title: 'Software Engineer Researcher',
        start: 'January 2020',
        end: 'December 2020',
        city: 'Ann Arbor',
        state: 'MI',
        details: [
          'Collaborated with a team in the Multidisciplinary Design 2020 Cohort to spearhead a robotic software system that optically recognizes objects and fills bins to a high capacity.',
          'Architected and implemented a bin-packing heuristic in C++ that identifies items\' optimal placement locations, maximizing capacity to 75% and speeding up company automation.',
          'Created a command-line interface for the robotic system that enables users to visualize item placements and future potential placements step-by-step, powered by Processing.',
        ],
        color: 'blue',
      },
      {
        company: 'Capital One',
        url: 'https://www.capitalone.com/',
        title: 'Software Engineer Intern',
        start: 'June 2020',
        end: 'August 2020',
        city: 'Chicago',
        state: 'IL',
        details: [
          'Developed an AWS Lambda with Python that transforms 3,000+ customer calls each day into visualizable data for Sage, Capital One\'s call assessment platform.',
          'Built and integrated experience-elevating features into Sage\'s audio player platform with AngularJS and D3.js, including: dual-speaker waveform visualization to distinguish the current speaker and to enhance audio-scrubbing, call captioning to improve audio retention, and issue-tagging to flag any timestamp for future reference.',
          'Interfaced with designers, product managers, and other developers in Agile sprints to ensure functional and thoughtful user experiences across our voice-based applications.',
        ],
        color: 'green',
      },
      {
        company: 'University of Michigan, EECS',
        url: 'https://eecs.engin.umich.edu/',
        title: 'Teaching Assistant for EECS 281',
        start: 'August 2020',
        end: 'May 2021',
        city: 'Ann Arbor',
        state: 'MI',
        details: [
          'Helped professors teach 900+ students by instructing lab class, answering online questions, writing and evaluating exams, and holding office hours to guide students one-on-one.',
          'Deepened students\' understanding of best coding practices, debugging tools, and core concepts, including stacks, queues, trees, dynamic programming, and hash tables.',
        ],
        color: 'yellow',
      },
    ],
  };
  render() {
    const { experiences, active } = this.state;
    return (
      <Section title='experience'>
        <p className='monospace experience-nav'>
          {experiences.map((experience, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  active === index
                    ? `link-${experience.color} experience.company `
                    : `link-text experience.company`
                }
                onClick={() => this.setState({ active: index })}>
                {experience.company}
              </span>
              {index < experiences.length - 1 && <span>&nbsp;/&nbsp;</span>}
            </React.Fragment>
          ))}
        </p>
        {experiences.map(
          (experience, index) =>
            active === index && <Role experience={experience} key={index} />
        )}
      </Section>
    );
  }
}

export default Experience;
