import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import api from '../../api';

export default class Login extends Component {
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
				this.props.history.push('/profile'); // Redirect to the profile
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
			<div className="sign">
				<MDBContainer>
					<MDBRow>
						<MDBCol md="6">
							<MDBCard
								className="card-image signup"
								style={{
									backgroundImage:
										'url(https://www.azutura.com/media/catalog/product/cache/47/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-45993_WP.jpg)',
									width: '28rem'
								}}
							>
								<div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
									<div className="text-center">
										<h3 className="log mb-5 mt-4 font-weight-bold">
											<strong>LOGIN</strong>
										</h3>
									</div>
									<MDBInput
										label="Username"
										group
										name="username"
										type="text"
										validate
										onChange={this.handleInputChange}
										labelClass="white-text"
									/>
									<MDBInput
										label="Password"
										group
										name="password"
										type="password"
										validate
										onChange={this.handleInputChange}
										labelClass="white-text"
									/>
									<MDBRow className="d-flex align-items-center mb-4">
										<div className="text-center mb-3 col-md-12">
											<MDBBtn
												rounded
												type="button"
												className="log white btn-block z-depth-1"
												onClick={(e) => this.handleClick(e)}
											>
												Log in
											</MDBBtn>
										</div>
									</MDBRow>
								</div>
							</MDBCard>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</div>
		);
	}
}
