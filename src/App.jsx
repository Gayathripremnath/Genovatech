import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Products from './Components/Products';

// Basic Placeholder Page Components for routing purposes
const Projects = () => <div style={{padding: '150px 20px', textAlign: 'center'}}><h1>Projects Page</h1></div>;
const Services = () => <div style={{padding: '150px 20px', textAlign: 'center'}}><h1>Services Page</h1></div>;
const Clients  = () => <div style={{padding: '150px 20px', textAlign: 'center'}}><h1>Clients Page</h1></div>;
const AboutUs  = () => <div style={{padding: '150px 20px', textAlign: 'center'}}><h1>About Us Page</h1></div>;
const Contact  = () => <div style={{padding: '150px 20px', textAlign: 'center'}}><h1>Contact Page</h1></div>;

function App() {
  return (
    <Router>
      <div className="app-container">
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
