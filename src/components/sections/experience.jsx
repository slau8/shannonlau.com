import React, { Component } from 'react';
import Section from './../section';
import Role from './../role';

class Experience extends Component {
  state = {
    active: 0,
    experiences: [
      {
        company: 'Comau',
        url: 'https://www.comau.com/en',
        title: 'Software Engineering Intern',
        start: 'January 2020',
        end: 'Present',
        city: 'Ann Arbor',
        state: 'MI',
        details: [
          'Architect and implement a live bin-packing heuristic in C++ that identifies items’ optimal placement locations, maximizing capacity to 85% and speeding up company automation.',
          'Create a command-line interface for the robotic system that enables users to visualize item placements and possible future placements step-by-step, powered by Processing.',
        ],
        color: 'blue',
      },
      {
        company: 'Capital One',
        url: 'https://www.capitalone.com/',
        title: 'Software Engineering Intern',
        start: 'June 2020',
        end: 'August 2020',
        city: 'Chicago',
        state: 'IL',
        details: [
          'Developed an AWS Lambda with Python that transforms 3,000+ customer calls each day into visualizable data for Sage, Capital One’s call assessment platform.',
          'Built and integrated experience-elevating features into Sage’s audio player platform with AngularJS and D3.js, including: dual-speaker waveform visualization to distinguish the current speaker and to enhance audio-scrubbing, call captioning to improve audio retention, and issue-tagging to flag any timestamp for future reference.',
          'Interfaced with designers, product managers, and other developers in Agile sprints to ensure functional and thoughtful user experiences across our voice-based applications.',
        ],
        color: 'green',
      },
      {
        company: 'University of Michigan, EECS',
        url: 'https://eecs.engin.umich.edu/',
        title: 'Teaching Assistant for EECS 281',
        start: 'August 2020',
        end: 'Present',
        city: 'Ann Arbor',
        state: 'MI',
        details: [
          'Help professors teach 900+ students by instructing lab class, answering online questions, writing and evaluating exams, and holding office hours to guide students one-on-one.',
          'Deepen students’ understanding of best coding practices, debugging tools, and core concepts, including stacks, queues, trees, dynamic programming, and hash tables.',
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
              <a
                className={
                  active === index
                    ? `link-${experience.color} experience.company `
                    : `link-text experience.company`
                }
                onClick={() => this.setState({ active: index })}>
                {experience.company}
              </a>
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
