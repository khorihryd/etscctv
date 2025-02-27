// src/components/Contact/Contact.jsx

import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
	return (
		<section className={styles.contact}>
			<div className={styles.container}>
				<h2>Hubungi Kami</h2>
				<p>
					Silakan hubungi kami untuk informasi lebih lanjut atau konsultasi gratis.
				</p>
				<div className={styles.info}>
					<p>
						Telepon: 0858 9455 5220
					</p>
					<p>
						Email: ets_cctv@gmail.com
					</p>
					<p>
						Alamat: Jl. Raya Cileles Km.07 Kp. Cipandak Desa Muncang Kec. Kec. Cikulur
					</p>
				</div>
				<a href="https://wa.me/+6285894194036" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">WhatsApp</a>
			</div>
		</section>
	);
};

export default Contact;