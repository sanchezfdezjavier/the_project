import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WrapCards from './components/WrapCards';
import Footer from './components/Footer';
import BackVideo from './components/BackVideo';

function App() {
	return (
		<div className="App">
			<Navbar className="navbar" />
			<BackVideo />
			<WrapCards />
			<Footer />
		</div>
	);
}

export default App;
