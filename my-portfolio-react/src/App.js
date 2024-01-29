import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Sec_spacing from './components/Sec_spacing';
import Skills from './components/Skills';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
      <Route path='home' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route Component={Sec_spacing}/>
      <Route path='/skills' Component={Skills}/>
      <Route Component={Sec_spacing}/>
      <Route path='/portfolio' Component={Projects}/>
      <Route path='/contact' Component={Contact}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
