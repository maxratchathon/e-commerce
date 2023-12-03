import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Kids from './pages/Kids';
import Catalogue from './components/Catalogue';





function App() {
  return (
    <>
      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='kids' element={<Kids/>}/>
          <Route path='men' element={<h1>men shop</h1>}/>
          <Route path='women' element={<h1>women shop</h1>}/>
        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
