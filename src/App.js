import React, { useState } from 'react';
import './App.css';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from './components/Header/Header';
import Institucional from './components/Institucional/Institucional';
import Banner from './components/Banner/Banner';
import Objective from './components/Objective/Objective';
import ImportanceSection from './components/ImportanceSection/ImportanceSection';
import ContactForm from './components/ContactForm/ContactForm';
import MapComponent from './components/Map/MapComponent';
import Footer from './components/Footer/Footer';
import styles from './pages/HomePage/HomePage.module.css';
import HomePage from './pages/HomePage/HomePage';
import PrinciplesPage from './pages/Institutional/Principles/PrinciplesPage';
import Information from './pages/Information/Information';
import GalleryPage from './pages/Gallery/GalleryPage';

function App() {
  return (
    <Router>
    <div className={styles.homePage}>
      <Header />
      <main>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/principios" element={<PrinciplesPage />} />
          <Route path="/informacoes" element={<Information />} />
          <Route path="/galeria" element={<GalleryPage />} />
      </Routes>

      </main>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
