import React, { Component } from 'react';
import api from '../../api';

export default class Logout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			name: '',
			password: '',
			message: null
		};
	}

	handleClick = (e) => {
		console.log(this.state);
		e.preventDefault();
		api
			.login(this.state.username, this.state.password)
			.then((result) => {
				console.log('Success!', result);
				this.props.setUser(result);
				this.props.history.push('/logout'); // Redirect to log out page
			})
			.catch((err) => this.setState({ message: err.toString() }));
	};

	handleInputChange = (event) => {
		this.setState(
			{
				[event.target.name]: event.target.value
			},
			() => console.log('State Updated', this.state)
		);
	};

	render() {
		return (
			<div className="cheers">
				<div>
					<h2>You have been logged out!</h2>
					<br />
					<h5>Sorry to see you go.. come back & play soon!</h5>
				</div>
			</div>
		);
	}
}
