import React, { Component } from 'react';

export default class Profile extends Component {
	showFavs = () => {
		if (this.props.user.beers) {
			return this.props.user.beers.map((eachBeer) => {
				return (
					<ul>
						<li>{eachBeer.name}</li>
						<li>{eachBeer.tagline}</li>
						<li>{eachBeer.abv}% ABV</li>
					</ul>
				);
			});
		}
	};

	render() {
		console.log(this);

		return (
			<div className="profile">
				<h2>Profile</h2>
				<h4>Welcome to your profile page {this.props.user.username}!</h4>
				<h6>Here you can view all the beers you have favorited:</h6>
				<div className="favBrew">{this.showFavs()}</div>
			</div>
		);
	}
}
