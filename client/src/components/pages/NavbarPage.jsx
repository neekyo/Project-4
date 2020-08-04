import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';

export default class NavbarPage extends Component {
	render() {
		return (
			<React.Fragment>
				<nav className="mb-1 navbar navbar-expand-lg navbar-dark default-color">
					<a className="nav-item logo" href="/">
						<img className="logo" src="./beer1.png" alt="" />
						<span className="orange">[</span>Brew<span className="orange">tastic!</span>
						<span>]</span>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent-333"
						aria-controls="navbarSupportedContent-333"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent-333">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a href="/">
									Home
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a href="/beers">Brews</a>
							</li>
							<li className="nav-item">
								<a href="/breweries">Breweries</a>
							</li>
							<li className="nav-item">
								<a href="/spin">Spin</a>
							</li>
						</ul>
						<i className="fas fa-user user" aria-hidden="true" />
						<NavDropdown title="Account" id="basic-nav-dropdown">
							<NavDropdown.Item href="/signup">Sign up</NavDropdown.Item>
							<NavDropdown.Item href="/login">Log in</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
						</NavDropdown>
					</div>
				</nav>
			</React.Fragment>
		);
	}
}
