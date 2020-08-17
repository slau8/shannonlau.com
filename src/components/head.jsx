import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import icon from './../assets/shannon-lau.svg';

class Head extends Component {
  render() {
    return (
      <Helmet>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#282c34' />
        <meta
          name='description'
          content="I'm Shannon Lau, a design-driven software engineer and creator focused on building human-centered experiences. NYC-bred."
        />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <title>Shannon Lau</title>
        <link rel='icon' href={icon} />
        <link rel='apple-touch-icon' href={icon} />
      </Helmet>
    );
  }
}

export default Head;
