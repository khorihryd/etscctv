// src/App.jsx

import React from 'react';
import {
	HashRouter as Router,
	Route,
	Routes
} from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/packages" element={<PackagesPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</Router>
	);
};

export default App;