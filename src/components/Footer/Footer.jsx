// src/components/Footer/Footer.jsx

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<p>
					&copy; {new Date().getFullYear()} EAGLE TEKNOLOGY SYSTEM. Developed by <a href="https://www.instagram.com/khoriharyadi?igsh=MWdpY3ZrZzdramx3dQ==">Khori Haryadi</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;