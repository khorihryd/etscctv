// src/pages/ServicesPage.jsx

import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services'; // Gunakan komponen Services yang sudah ada

const ServicesPage = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '80px' }}> {/* Tambahkan padding untuk menghindari konten tertutup header */}
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
