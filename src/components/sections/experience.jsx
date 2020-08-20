import React, { Component } from 'react';
import Section from './../section';
import Role from './../role';

class Experience extends Component {
  state = {
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
          'Architect and implement a live bin-packing heuristic in C++ that identifies items’ optimal placement locations, maximizing bin capacity and speeding up company automation.',
          'Create a command-line interface for the robotic system that enables users to visualize item placements and possible future placements step-by-step, powered by Processing.',
        ],
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
          'Developed an AWS Lambda with Python that processes 3,000+ customer calls each day into visualizable data for Sage, Capital One’s call assessment platform.',
          'Built and integrated experience-elevating features into the audio player platform with AngularJS and D3.js, including: dual-speaker waveform visualizer to distinguish the current speaker and enhance audio-scrubbing, call captioning to complement the audio, and issue-tagging to flag any timestamp for future reference.',
          'Interfaced with designers, product managers, and other developers in Agile sprints to ensure functional and thoughtful user experiences across our voice-based applications.',
        ],
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
      },
    ],
  };
  render() {
    return (
      <Section title='experience'>
        {this.state.experiences.map((experience, index) => (
          <Role experience={experience} key={index} />
        ))}
      </Section>
    );
  }
}

export default Experience;
