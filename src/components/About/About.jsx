// src/components/About/About.jsx

import React from 'react';
import styles from './About.module.css';
import image1 from '../../assets/images/images1.jpg';
import image2 from '../../assets/images/images2.jpg';
import { FaRocket, FaAward } from 'react-icons/fa'; // Import ikon dari react-icons

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.images}>
            <img src={image1} alt="About 1" className={styles.image1} />
            <img src={image2} alt="About 2" className={styles.image2} />
          </div>
          <div className={styles.text}>
            <h2>Tentang Kami</h2>
            <h3>Penyedia Solusi Keamanan Modern & Terpercaya</h3>
            <p>
              Kami adalah penyedia solusi keamanan yang mengutamakan kualitas dan inovasi. Dengan tim profesional dan berpengalaman, kami siap memberikan layanan terbaik untuk melindungi rumah dan bisnis Anda.
            </p>
            <div className={styles.mission}>
              <FaRocket className={styles.icon} /> {/* Gunakan ikon FaRocket */}
              <div>
                <h4>Misi Kami</h4>
                <p>Memberikan solusi keamanan terdepan dengan teknologi terkini.</p>
              </div>
            </div>
            <div className={styles.award}>
              <FaAward className={styles.icon} /> {/* Gunakan ikon FaAward */}
              <div>
                <h4>Penghargaan</h4>
                <p>Diakui sebagai penyedia layanan terbaik dalam industri keamanan.</p>
              </div>
            </div>
            <a href="https://wa.me/+6285894194036" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">Hubungi Kami</a>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statValue}>2.2k+</div>
            <div className={styles.statLabel}>Proyek Selesai</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>3.1k+</div>
            <div className={styles.statLabel}>Tim Profesional</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>1.9k+</div>
            <div className={styles.statLabel}>Pelanggan Puas</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>1.1k+</div>
            <div className={styles.statLabel}>Penghargaan</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
