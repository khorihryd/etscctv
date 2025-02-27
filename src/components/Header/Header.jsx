// src/components/Header/Header.jsx

import React, {
	useState
} from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logoets.jpg';
import {
	Link
} from 'react-router-dom'; // Import Link

const Header = () => {
	const [isMenuOpen,
		setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
				<img src={logo} alt="ETS Logo" />
				<h1><span>EAGLE</span><br/>TEKNOLOGY SYSTEM</h1>
			</div>
			<button className={styles.menuButton} onClick={toggleMenu}>
				☰
			</button>
			<nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen: ''}`}>
				<Link to="/" className={styles.navLink}>Beranda</Link> {/* Gunakan Link */}
				<Link to="/services" className={styles.navLink}>Layanan</Link> {/* Gunakan Link */}
				<Link to="/packages" className={styles.navLink}>Paket</Link> {/* Gunakan Link */}
				<Link to="/contact" className={styles.navLink}>Kontak</Link> {/* Gunakan Link */}
				<a href="https://wa.me/085894194036" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">WhatsApp</a>
			</nav>
		</div>
	</header>
);
};

export default Header;