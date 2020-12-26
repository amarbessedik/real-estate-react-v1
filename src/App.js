import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
