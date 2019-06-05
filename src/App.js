import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import WrapCards from './components/WrapCards';
import Footer from './components/Footer';
function App() {
	return (
		<div className="App">
			<Navbar className="navbar" />
			<Jumbotron className="jumbotron" />
			<WrapCards />
			<Footer />
		</div>
	);
}

export default App;
