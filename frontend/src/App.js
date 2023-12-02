import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar';





function App() {
  return (
    <>
      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Shop' element={<h1>Shop</h1>}/>
        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
