import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import './App.css'; // Ensure you create and import this CSS file for styling
import MyComponent from './components/Kezdolap';
import Po from './components/Termekek';
import Sidebar from './components/Oldalsav';
import CartIcon from './components/Kosaricon';
import Rendeles from './components/Rendelesek';
import Elerhetoseg from './components/Kapcsolatok';
import { CartProvider } from './components/Kosartartalma';
import './javascript/ajax'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>PDM Pizzéria</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
        <style>{`
          body, h1, h2, h3, h4, h5 {font-family: "Poppins", sans-serif}
          body {font-size:16px;}
          .w3-half img {margin-bottom:-6px; margin-top:16px; opacity:0.8; cursor:pointer}
          .w3-half img:hover {opacity:1}
          .main-content {
            margin-left: 300px;
            padding: 20px;
          }
          @media (max-width: 991px) {
            .main-content {
              margin-left: 0;
            }
          }
        `}</style>
      </Helmet>

      <CartProvider>
        <Router>
          <Sidebar />
          <CartIcon />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<MyComponent />} />
              <Route path="/termekek" element={<Po />} />
              <Route path="/rendeles" element={<Rendeles />} />
              <Route path="/kapcsolat" element={<Elerhetoseg />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;