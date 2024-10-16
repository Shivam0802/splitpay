import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import Registerpage from './Pages/Registerpage';
import Contact from './Components/Contact';
import Profilepage from './Pages/Profilepage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Registerpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profilepage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
