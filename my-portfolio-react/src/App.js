import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Sec_spacing from './components/Sec_spacing';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Sec_spacing/>
    <Skills/>
    <Sec_spacing/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
