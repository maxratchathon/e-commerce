import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'




function App() {
  return (
    <>
      <div className='navbar-container'>
        <div>
          <h2>EverShop</h2>
        </div>
        <div>
          <a>Men</a>
          <a>Women</a>
        </div>
        <div>
          <a>[icon]</a>
          <a>[icon]</a>
          <a>[icon]</a>
        </div>
      </div>

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
