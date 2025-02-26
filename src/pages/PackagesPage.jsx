// src/pages/PackagesPage.jsx

import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Packages from '../components/Packages/Packages'; // Gunakan komponen Packages yang sudah ada

const PackagesPage = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '80px' }}> {/* Tambahkan padding untuk menghindari konten tertutup header */}
        <Packages />
      </div>
      <Footer />
    </div>
  );
};

export default PackagesPage;
