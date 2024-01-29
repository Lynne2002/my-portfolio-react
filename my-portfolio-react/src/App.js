import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Ext_jokes_API from './components/Ext_jokes_API';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Sec_spacing from './components/Sec_spacing';
import Skills from './components/Skills';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route Component={Sec_spacing}/>
      <Route path='/skills' Component={Skills}/>
      <Route Component={Sec_spacing}/>
      <Route path='/portfolio' Component={Projects}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/ext_API' Component={Ext_jokes_API}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
