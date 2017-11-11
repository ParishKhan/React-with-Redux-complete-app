import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import CSS from '../styles/app.scss';

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