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
    } = this.props.experience;
    return (
      <div className='role'>
        <h1>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='link-blue'>
            {company}
          </a>{' '}
          <span className='accent-gray'>
            &#8212; <span className='title'>{title}</span>
          </span>
        </h1>
        <h2 className='monospace'>
          {start} &#8212; {end} // {city}, {state}
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
