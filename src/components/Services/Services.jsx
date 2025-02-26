// src/components/Services/Services.jsx

import React from 'react';
import styles from './Services.module.css';
import { FaVideo, FaShieldAlt, FaBell, FaUserShield, FaMapMarkerAlt, FaTools } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaVideo />,
      title: 'Pemasangan CCTV',
      description: 'Pemasangan sistem CCTV berkualitas tinggi untuk keamanan rumah dan bisnis Anda.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Sistem Keamanan',
      description: 'Solusi sistem keamanan terintegrasi untuk perlindungan maksimal.'
    },
    {
      icon: <FaBell />,
      title: 'Alarm Keamanan',
      description: 'Pemasangan alarm keamanan untuk deteksi dini potensi ancaman.'
    },
    {
      icon: <FaUserShield />,
      title: 'Akses Kontrol',
      description: 'Sistem akses kontrol untuk mengatur dan membatasi akses ke area tertentu.'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'GPS Tracker',
      description: 'Pemasangan GPS tracker untuk pelacakan kendaraan dan aset berharga.'
    },
    {
      icon: <FaTools />,
      title: 'Maintenance CCTV',
      description: 'Layanan pemeliharaan dan perbaikan sistem CCTV secara berkala.'
    }
  ];

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2>Layanan & Solusi Kami</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div className={styles.service} key={index}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
