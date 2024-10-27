import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DataPage from './pages/DataPage';
import Contact from './pages/Contact'; // Import the Contact component

function App() {
  return (
    <Router>
      <div>
        <h1>My React App</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
