import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import FirstDocument from './FirstDocument';
import SecondDocument from './SecondDocument';
import ThirdDocument from './ThirdDocument';

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="FirstDocument" element={<FirstDocument />} />
      <Route path="SecondDocument" element={<SecondDocument />} />
      <Route path="ThirdDocument" element={<ThirdDocument />} />
    </Routes>
  )
}

export default Allroutes
