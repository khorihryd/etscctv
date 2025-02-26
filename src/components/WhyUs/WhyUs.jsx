// src/components/WhyUs/WhyUs.jsx

import React from 'react';
import styles from './WhyUs.module.css';
import { FaCheckCircle, FaUsers, FaMoneyBillAlt, FaClock } from 'react-icons/fa';

const WhyUs = () => {
  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: 'Kualitas Terdepan',
      description: 'Kami memiliki kualitas terdepan dalam pemasangan CCTV.'
    },
    {
      icon: <FaUsers />,
      title: 'Tim Profesional',
      description: 'Tim kami siap membantu Anda dengan pemasangan CCTV sesuai permintaan.'
    },
    {
      icon: <FaMoneyBillAlt />,
      title: 'Harga Ekonomis',
      description: 'Paket lengkap dengan harga yang lebih ekonomis.'
    },
    {
      icon: <FaClock />,
      title: 'Pelayanan Cepat',
      description: 'Cepat dan tanggap dalam melayani pelanggan baik secara langsung maupun tidak langsung.'
    }
  ];

  return (
    <section className={styles.whyUs}>
      <div className={styles.container}>
        <h2>Mengapa Memilih Kami?</h2>
        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div className={styles.reason} key={index}>
              <div className={styles.icon}>{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
