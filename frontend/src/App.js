import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Kids from './pages/Kids';
import Men from './pages/Men';
import Women from './pages/Women';
import Footer from './components/Footer';





function App() {
  return (
    <>
      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='kids' element={<Kids/>}/>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
        </Routes>
      </BrowserRouter>

      <Footer/>



    </>
  );
}

export default App;
