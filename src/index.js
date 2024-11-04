import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage/HomePage';
import PrinciplesPage from './pages/Institutional/Principles/PrinciplesPage';
import InstitutionalHistory from './pages/Institutional/History/InstitutionalHistory';
import Sustainability from './pages/Institutional/Sustainability/Sustainability';
import GalleryPage from './pages/Gallery/GalleryPage';
import Information from './pages/Information/Information';
import Information2 from './pages/Information/Information2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
//<Information2 />
//<Information />
//<GalleryPage />
//<Sustainability />
//<InstitutionalHistory />
//<PrinciplesPage />
//<HomePage />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
