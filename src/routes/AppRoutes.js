import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import PrinciplesPage from '../pages/Institutional/Principles/PrinciplesPage';
import Information from '../pages/Information/Information';
import GalleryPage from '../pages/Gallery/GalleryPage';
import InstitutionalHistory from '../pages/Institutional/History/InstitutionalHistory';
import Sustainability from '../pages/Institutional/Sustainability/Sustainability';
import ProductsPage from '../pages/Products/ProductsPage';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/institucional" element={<PrinciplesPage />} />
            <Route path="/historia" element={<InstitutionalHistory />} />
            <Route path="/sustentabilidade" element={<Sustainability />} />
            <Route path="/principios" element={<PrinciplesPage />} />
            <Route path="/informacoes" element={<Information />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
        </Routes>
    );
};

export default AppRoutes