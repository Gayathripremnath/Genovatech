import React from 'react';
import './App.css';
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

function App() {
  return (
    <div className="app-container">
      <Topbar />
      <Navbar />
      <Hero />
    </div>
  )
}

export default App;
