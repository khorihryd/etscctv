// src/components/Hero/Hero.jsx

import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import image from '../../assets/images/Hero.jpg';

const Hero = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const contentElement = contentRef.current;
    const imageElement = imageRef.current;
    if (contentElement) {
      contentElement.classList.add(styles.contentAnimated);
    }
    if (imageElement) {
      imageElement.classList.add(styles.imageAnimated);
    }
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content} ref={contentRef}>
          <h1>Lindungi Bisnis Anda dengan CCTV Berkualitas</h1>
          <p>
            Pantau dan amankan bisnis Anda dengan sistem CCTV berkualitas dari ETS. Kami menyediakan berbagai pilihan paket CCTV yang sesuai dengan kebutuhan Anda.
          </p>
          <a href="https://wa.me/+6285894194036" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">Hubungi Kami Sekarang</a>
        </div>
        <div className={styles.image} ref={imageRef}>
          <img src={image} alt="CCTV" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
