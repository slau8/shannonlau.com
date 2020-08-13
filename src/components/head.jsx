import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

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
        <link rel='apple-touch-icon' href='%PUBLIC_URL%/shaka-512.png' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <title>Shannon Lau</title>
        <link rel='icon' href='./assets/shannon-lau.svg' />
      </Helmet>
    );
  }
}

export default Head;
