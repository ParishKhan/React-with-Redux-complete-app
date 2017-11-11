import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import CSS from './styles/app.scss';

class App extends Component {
	render() {
		return(						
			<div>
				<NavBar />
				<Route exact path="/" component={Home}/>
				<Route path="/about" component={About}/>
			</div>		
		);
	}
}

export default App;