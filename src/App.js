import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';

import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
        {/* Add other routes here if needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
