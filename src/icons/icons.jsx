import React, { Component } from 'react';
import {
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
  IconYouTube,
} from './../icons';

const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://www.github.com/slau8',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shanlau',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/slau.ghtered',
  },
  // {
  //   name: 'YouTube',
  //   url: 'https://www.youtube.com/channel/UCAwe4_4fOMw1C4KGIWET8zg/',
  // },
];

class Icons extends Component {
  render() {
    return (
      <div>
        {socialMedia.map(({ url, name }, i) => (
          <a
            key={i}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='icon-hero'>
            {this.getIcon(name)}
          </a>
        ))}
      </div>
    );
  }

  getIcon(name) {
    switch (name) {
      case 'GitHub':
        return <IconGitHub />;
      case 'Instagram':
        return <IconInstagram />;
      case 'LinkedIn':
        return <IconLinkedIn />;
      case 'YouTube':
        return <IconYouTube />;
      default:
    }
  }
}

export default Icons;
