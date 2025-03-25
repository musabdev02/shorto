import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from './pages/Home'
import Shortener from './pages/Shortener';
import Login from './pages/Login';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortener" element={<Shortener />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App