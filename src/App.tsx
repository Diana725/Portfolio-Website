import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import SmallProjects from './components/SmallProjects';
import Contact from './components/Contact';



function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Introduction />
      <Projects />
      <SmallProjects />
      <Contact />
    </div>
  );
}

export default App;