import React from 'react';
import Head from './components/head';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Experience from './components/sections/experience';
import Projects from './components/sections/projects';
// import Photo from './components/sections/photo';
// import Video from './components/sections/video';
// import Design from './components/sections/design';
import Footer from './components/sections/footer';

function App() {
  return (
    <React.Fragment>
      <Head />
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Photo /> */}
      {/* <Video /> */}
      {/* <Design /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
