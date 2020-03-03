import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 25.769139799999998,
			lng: -80.19865399999999
		},
		zoom: 8
	};

	render() {
		return (
			<div style={{ border: '1px solid orange', height: '20rem', width: '41.87rem' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyDcEUiPfu_CD5IOljY5lJt0XhSgz9mI8nM' }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				>
					<Marker lat={25.769139799999998} lng={-80.19865399999999} text="Marker" />
				</GoogleMapReact>
			</div>
		);
	}
}

export default SimpleMap;
