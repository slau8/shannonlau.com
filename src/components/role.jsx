import React, { Component } from 'react';

class Role extends Component {
  render() {
    const {
      company,
      url,
      title,
      start,
      end,
      city,
      state,
      details,
      color
    } = this.props.experience;
    const separator = "//";
    return (
      <div className='role'>
        <h1>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className={`link-${color}`}>
            {company}
          </a>{' '}
          <span className='accent-gray'>
            &#8212; <span className='title'>{title}</span>
          </span>
        </h1>
        <h2 className='monospace'>
          {start} &#8212; {end} {separator} {city}, {state}
        </h2>
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Role;
