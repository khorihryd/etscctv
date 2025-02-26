// src/pages/ContactPage.jsx

import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact'; // Gunakan komponen Contact yang sudah ada

const ContactPage = () => {
	return (
		<div>
			<Header />
			<div style={ { paddingTop: '80px' }}>
				{/* Tambahkan padding untuk menghindari konten tertutup header */}
				<Contact />
			</div>
			<Footer />
		</div>
	);
};

export default ContactPage;