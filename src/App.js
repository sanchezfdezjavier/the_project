import React, { Component } from 'react';
import './App.css';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<MainContent />
				<Footer />
			</div>
		);
	}
}
function App() {
	return (
		<div className="App">
			<Navbar/>
			<MainContent />
			<Footer/>
		</div>
	);
}

export default App;
