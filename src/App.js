import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <header style={{ backgroundColor: '#282c34', padding: '1rem', color: 'white' }}>
        <h1>João Mendes Moreira</h1>
        <nav>
          <a href="#about" style={{ margin: '0 1rem', color: 'white' }}>About Me</a>
          <a href="#projects" style={{ margin: '0 1rem', color: 'white' }}>Projects</a>
          <a href="#contact" style={{ margin: '0 1rem', color: 'white' }}>Contact</a>
        </nav>
      </header>

      <main>
        <section id="about"><AboutMe /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
