// src/components/Packages/Packages.jsx

import React from 'react';
import styles from './Packages.module.css';

const Packages = () => {
	const packages = [{
		title: 'Harga Ekonomis',
		price: 'Rp 2.499.000',
		channels: '2 Channel',
		features: [
			'Kamera (Outdoor/Indoor) 2MP',
			'DVR HD',
			'Kabel CCTV',
			'Set Konektor',
			'Jasa Instalasi & Setting'
		]
	},
		{
			title: 'High Resolution',
			price: 'Rp 3.300.000',
			channels: '2 Channel',
			features: [
				'Kamera (Outdoor/Indoor) 5MP',
				'DVR HD',
				'Kabel CCTV',
				'Set Konektor',
				'Jasa Instalasi & Setting'
			]
		},
		{
			title: 'Full Color',
			price: 'Rp 3.700.000',
			channels: '2 Channel',
			features: [
				'Kamera (Outdoor/Indoor) 2MP Full Color',
				'DVR HD',
				'Kabel CCTV',
				'Set Konektor',
				'Jasa Instalasi & Setting'
			]
		}];

	return (
		<section className={styles.packages}>
			<div className={styles.container}>
				<h2>Paket CCTV Kami</h2>
				<div className={styles.grid}>
					{packages.map((pkg, index) => (
						<div className={styles.package} key={index}>
							<h3>{pkg.title}</h3>
							<p className={styles.price}>
								Mulai dari {pkg.price}
							</p>
							<p>
								{pkg.channels}
							</p>
							<ul className={styles.features}>
								{pkg.features.map((feature, i) => (
									<li key={i}>{feature}</li>
								))}
							</ul>
							<a href="https://wa.me/085894194036" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">Pesan Sekarang</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Packages;