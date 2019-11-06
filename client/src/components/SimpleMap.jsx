import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;
// let places = [];
// for (let i = 0; i < 27000; i++) {
// 	places.push({
// 		lat: Math.floor(Math.random() * 90),
// 		lng: Math.floor(Math.random() * 180)
// 	});
// }

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 25.769139799999998,
			lng: -80.19865399999999
		},
		zoom: 8
	};
	// displayMarkers = () => {
	// 	return this.props.filteredBreweries.map((marker, i) => {
	// 		return <Marker text={marker.name} lat={places[i].lat} lng={places[i].lng} />;
	// 	});
	// };

	render() {
		return (
			<div style={{ border: '1px solid orange', height: '20rem', width: '41.87rem' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyDcEUiPfu_CD5IOljY5lJt0XhSgz9mI8nM' }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				>
					<Marker lat={25.769139799999998} lng={-80.19865399999999} text="Marker" />
					{/* {this.displayMarkers()} */}
				</GoogleMapReact>
			</div>
		);
	}
}

export default SimpleMap;
