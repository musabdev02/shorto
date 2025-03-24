import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from './pages/Home'
import Shortener from './pages/Shortener';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortener" element={<Shortener />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App