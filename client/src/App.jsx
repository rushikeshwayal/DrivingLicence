import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Ensure this is correctly imported
import ContactUs from './components/ContactUs'; // Ensure this is correctly imported

// Rename the function to avoid conflict with imported App
function MainApp() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MainApp;
