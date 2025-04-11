
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {

  return ( 
    <div className="App">
    <BrowserRouter basename="/portfolio/">
     <Navbar />

       {/* Routing logic */}
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       {/* Add a catch-all 404 page */}
       <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;

