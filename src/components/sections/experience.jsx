import React, { Component } from 'react';
import Section from './../section';
import Role from './../role';

class Experience extends Component {
  state = {
    active: 0,
    experiences: [
      {
        company: 'Cavnue',
        url: 'https://www.michiganbusiness.org/reports-data/success-stories/cavnue-cav-corridor/',
        title: 'Software Engineer',
        start: 'March 2023',
        end: 'July 2025',
        city: 'Detroit',
        state: 'MI',
        details: [
          'Architected a digital twin of real roads by re-designing the C++ simulation engine and Python multi-processing pipelines for videos, geospatial data, road user kinematics, and other ecosystem artifacts — optimizing runtime performance up to 12x faster.',
          'Collaborated closely with software architects to design and build unified Protobuf and Pub/Sub schemas, connecting ETLs with the BigQuery data warehouse.',
          'Validated end-to-end system and data integrity by conducting road testing, tracking data lineage, root-causing bugs, and engaging with data contributors.',
        ],
        color: 'green',
      },
      {
        company: 'Meta',
        url: 'https://tech.fb.com/codec-avatars-facebook-reality-labs/',
        title: 'Software Engineer Intern',
        start: 'August 2021',
        end: 'November 2021',
        city: 'Pittsburgh',
        state: 'PA',
        details: [
          "Implemented lossy compression algorithms in C++ to optimize 3D face and gaze capture, supporting VR telepresence for Reality Lab's Codec Avatars.",
          'Developed Python-based benchmarks to quantitatively analyze algorithm differences in speed, space, and image quality, and integrated the most optimal into the pipeline.',
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
          "Pioneered the development and testing of Microsoft Lists' inaugural front-end features for content editing and grouping, with React, Typescript, and Sass.",
          'Identified and resolved telemetry bugs, while coordinating with feature owners and product managers, optimizing our median reliability rate to 99.9%.',
          "Visualized in-depth app performance and resilience metrics using the company's internal data tooling to provide leadership with first-ever app insights.",
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
          'Collaborated with a small team in the Multidisciplinary Design 2020 Cohort to develop a robotic software system that maximizes container storage through object and space optical recognition.',
          'Architected and implemented a 3D bin-packing heuristic in C++ that identifies items’ optimal placement locations, achieving 75% fill capacity and speeding up company automation.',
          'Crafted a command-line interface and intuitive graphical interface for users to visualize step-by-step item placements and explore future potential arrangements, powered by Processing.',
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
          "Developed an AWS Lambda with Python that transforms 3,000+ daily customer calls into visualizable data for Sage, Capital One's call assessment platform.",
          "Built and integrated experience-elevating features into Sage's audio player platform with AngularJS and D3.js, including: dual-speaker waveform visualization to distinguish the current speaker and to enhance audio-scrubbing, call captioning to improve audio retention, and issue-tagging to flag any timestamp for future reference.",
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
          'Assisted in teaching 900+ students by instructing labs, facilitating class forums, designing exams, and holding office hours to guide students one-on-one. In C++. ',
          "Deepened students' understanding of best coding practices, debugging tools, and core concepts, including stacks, queues, graphs, dynamic programming, and hash tables.",
        ],
        color: 'yellow',
      },
    ],
  };
  render() {
    const { experiences, active } = this.state;
    return (
      <Section title='experience'>
        {/* <p className='monospace experience-nav'>
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
        </p> */}
        {experiences.map((experience, index) => (
          <Role experience={experience} key={index} />
        ))}
        <p id='see-more'>
          <a
            href='/shannon-lau-resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='link-blue'>
            See full résumé
          </a>
        </p>
      </Section>
    );
  }
}

export default Experience;
