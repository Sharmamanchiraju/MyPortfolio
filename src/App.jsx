import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Metrics from './components/Metrics';
import Education from './components/Education';
import Contact from './components/Contact';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import FloatingSection from './components/FloatingSection';
import './App.css';

function App() {
  return (
    <SmoothScrollProvider>
      <div className="app-container">
        {/* Background Grid Pattern */}
        <div className="bg-grid-overlay" />

        {/* Ambient Radial Glow Blobs */}
        <div className="ambient-glow-1" />
        <div className="ambient-glow-2" />
        <div className="ambient-glow-3" />

        {/* Sticky Header with Theme Toggle & Active Highlight */}
        <Navbar />

        {/* Floating 3D Window Cards Experience */}
        <main>
          <FloatingSection id="hero" ariaLabel="Hero Introduction">
            <Hero />
          </FloatingSection>

          <FloatingSection id="about" ariaLabel="About Me">
            <About />
          </FloatingSection>

          <FloatingSection id="experience" ariaLabel="Work Experience">
            <Experience />
          </FloatingSection>

          <FloatingSection id="projects" ariaLabel="Projects">
            <Projects />
          </FloatingSection>

          <FloatingSection id="skills" ariaLabel="Technical Skills">
            <Skills />
          </FloatingSection>

          <FloatingSection id="metrics" ariaLabel="Impact Statistics">
            <Metrics />
          </FloatingSection>

          <FloatingSection id="education" ariaLabel="Academic Education">
            <Education />
          </FloatingSection>
        </main>

        {/* Contact Section & Footer */}
        <FloatingSection id="contact" ariaLabel="Contact and Footer">
          <Contact />
        </FloatingSection>
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
