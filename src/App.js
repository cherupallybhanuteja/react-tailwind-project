import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FormPage from './pages/FormPage';
import DataDisplay from './pages/DataDisplay';
import Navbar from './components/Navbar';

function App() {
  const [formEntries, setFormEntries] = useState([]);

  const addFormData = (newEntry) => {
    setFormEntries([...formEntries, newEntry]);
  };

  return (
    <Router>
      <div 
        className="relative bg-cover bg-center min-h-screen"
        style={{ backgroundImage: 'url("/pic.png")' }} // Set the correct path for the image
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<FormPage addFormData={addFormData} />} />
            <Route path="/data" element={<DataDisplay formEntries={formEntries} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
