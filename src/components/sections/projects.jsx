import React, { Component } from 'react';
import Section from './../section';
import Card from './../card';

class Projects extends Component {
  state = {
    projects: [
      {
        title: 'Touch Connect Four',
        detail:
          'Acrylic, multi-touch pad device that optically translates finger contours and movements into gestures for digital connect four with Python OpenCV. ',
        tags: ['Python', 'OpenCV', 'Soldering', 'Laser-Cutting'],
        img: 'touch-connect-four.png',
        color: 'blue',
        video:
          'https://drive.google.com/file/d/1Kqm7AtSdRUlBKvHngXRKjAbsgC3Nt1FF/view',
      },
      {
        title: 'UFO',
        detail:
          'Custom-built printed circuit board payload launched 26,822 meters into the stratosphere to gather pressure, temperature, humidity, UV index, andGPS data for weather analysis. ',
        tags: ['C/C++', 'Arduino', 'Soldering', 'I2C', 'UART'],
        img: 'ufo.png',
        color: 'green',
        link:
          'https://docs.google.com/gview?url=https://github.com/slau8/ufo/raw/master/ufo.pdf&embedded=true',
      },
      {
        title: 'Park Finder',
        detail:
          'Online National Parks Service kiosk and search tool to discover national parks with in-depth information on visitor centers, campgrounds, news, and educational materials.',
        tags: ['Python', 'Flask', 'Jinja2', 'Bootstrap'],
        img: 'park-finder.png',
        color: 'yellow',
        github: 'https://github.com/slau8/park-finder',
        link: 'http://shanlau.pythonanywhere.com',
      },
      {
        title: 'Jimmy Jams',
        detail:
          'Web application to streamline Spotify song requests into various music rooms.',
        tags: ['Python', 'Flask', 'Jinja2', 'Spotify API', 'SQL'],
        img: 'jimmy-jams.png',
        color: 'red',
        github: 'https://github.com/slau8/xx4',
        video: 'https://www.youtube.com/watch?9=&v=YgQWEBAO9NE',
      },
    ],
  };
  render() {
    return (
      <Section title='projects'>
        <div className='row'>
          {this.state.projects.map((project, index) => (
            <Card project={project} key={index} />
          ))}
        </div>
        <p id='see-more'>
          <a href='https://github.com/slau8' target='_blank' rel="noopener noreferrer" className='link-blue'>
            Explore more on GitHub
          </a>
        </p>
      </Section>
    );
  }
}

export default Projects;
