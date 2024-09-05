import React from 'react';
import Header from './Header/Header.jsx';
import Hero from './Hero/Hero.jsx';
import About from './About/About.jsx';
import Projects from './Projects/Projects.jsx';
import Contact from './Contact/Contact.jsx';

import './App.css';
function App() {
  return (
    <>
      <Header className='sticky' />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <div className="text-center text-dark-grey font-extralight">© 2024 Sagar. All Rights Reserved.</div>
    </>
  )
}

export default App;