import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import Home from './Home';
import SignIn from './SignIn';
import CSS from '../styles/app.scss';

class App extends Component {
	render() {
		return(
			
			
			<Router history={browserHistory}>
				<div>
					<NavBar />
					<Route exact path="/" component={Home}/>
					<Route path="/signin" component={SignIn}/>
				</div>
			</Router>
			
		);
	}
}

export default App;