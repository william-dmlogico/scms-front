import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Função auxiliar separada para uso geral
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Componente de scroll
function ScrollToTop () {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;