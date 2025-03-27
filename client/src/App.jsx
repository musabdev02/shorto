import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from './pages/Home'
import Shortener from './pages/Shortener';
import Login from './pages/Login';
import Register from './pages/Register';
import Redirector from './pages/Redirector';
import Dashboard from './pages/Dashboard';
// dashboard pages
import Links from './pages/Dasboardpages/Links';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortener" element={<Shortener />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:shortId" element={<Redirector />} />
        {/* Dashboard with nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Links />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App