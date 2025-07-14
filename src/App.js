import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ Add this
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up'; // ✅ Capital S

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<SignUp />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;
