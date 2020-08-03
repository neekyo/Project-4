import React, { Component } from 'react';
import api from '../../api';

export default class Profile extends Component {
	removeFavorite = (beer) => {
		console.log(beer, this);
		api
			.removeFavoriteBeer(beer)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.error(err));
	};

	showFavs = () => {
		if (this.props.user.beers) {
			return this.props.user.beers.map((eachBeer) => {
				return (
					<ul className="profFav">
						<li className="orange">{eachBeer.name}</li>
						<li>{eachBeer.tagline}</li>
						<li>{eachBeer.abv}% ABV</li>
						<button className="favorite button" onClick={(e) => this.removeFavorite(eachBeer)}>
							Remove
						</button>
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
				<h4>
					Welcome to your profile page <span className="orange">{this.props.user.username}</span>
				</h4>
				<h6>
					<a href="/signup" className="profSign">
						Sign up
					</a>{' '}
					or{' '}
					<a href="/login" className="profSign">
						Log in
					</a>{' '}
					to view all the beers you have favorited here!
				</h6>
				<div className="favBrew">{this.showFavs()}</div>
			</div>
		);
	}
}
