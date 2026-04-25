import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import About from './Components/About';
import Products from './Components/Products';
import Services from './Components/Services';
import Contact from './Components/Contact';
import ScrollProgress from './Components/ScrollProgress';
import ScrollToTop from './Components/ScrollToTop';

// Basic Placeholder Page Components for routing purposes
const Projects = () => <div style={{ padding: '150px 20px', textAlign: 'center' }}><h1>Projects Page</h1></div>;
const Clients = () => <div style={{ padding: '150px 20px', textAlign: 'center' }}><h1>Clients Page</h1></div>;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <div className="app-container">
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
