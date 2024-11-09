import React from 'react';
import './App.css';


import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './pages/HomePage/HomePage.module.css';
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <div className={styles.homePage}>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
