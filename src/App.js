import React, { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './GlobalStyles';

function App() {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {setIsOpen(!isOpen);}
const reset = () => {setIsOpen(false);}

  return (
    <div className="app">
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} reset={reset}/>
      <Hero slides={SliderData} isOpen={isOpen} />
    </div>
  );
}

export default App;
