import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import PrinciplesPage from '../pages/Institutional/Principles/PrinciplesPage';
import Information from '../pages/Information/Information';
import GalleryPage from '../pages/Gallery/GalleryPage';
import InstitutionalHistory from '../pages/Institutional/History/InstitutionalHistory';
import Sustainability from '../pages/Institutional/Sustainability/Sustainability';
import ProductsPage from '../pages/Products/ProductsPage';
import ContactPage from '../pages/ContactPage/ContactPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/scms" element={<HomePage />} />
            <Route path="/scms/institucional" element={<PrinciplesPage />} />
            <Route path="/scms/historia" element={<InstitutionalHistory />} />
            <Route path="/scms/sustentabilidade" element={<Sustainability />} />
            <Route path="/scms/principios" element={<PrinciplesPage />} />
            <Route path="/scms/informacoes" element={<Information />} />
            <Route path="/scms/produtos" element={<ProductsPage />} />
            <Route path="/scms/galeria" element={<GalleryPage />} />
            <Route path="/scms/contato" element={<ContactPage />} />
        </Routes>
    );
};

export default AppRoutes