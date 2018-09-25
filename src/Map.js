import React, {
	Component
  } from 'react';
  import './App.css';
  import GoogleMapReact from 'google-map-react';
  const AnyReactComponent = ({ text }) => (<div><p>{text}</p></div>);
  class Map extends Component {
	static defaultProps = {
		center: {
		  lat: 48.87,
		  lng: 2.30
		},
		zoom: 11,
		key: 11
	  };
	  render(){
		const GoogleMapsMarkers =  (
			<AnyReactComponent
			lat={48.870936}
			lng={2.309818}
			text={'Your Connected Shop '}
		  />
		  );
		  return(
			<div  style={{ height: '85%', width: '100%' }}>
			<GoogleMapReact
			  bootstrapURLKeys={{ key:'AIzaSyDlQGqKdKm2zl2mttCY6ejBEirIEpNw6ek',v:'3;31'}}
			  defaultCenter={this.props.center}
			  defaultZoom={this.props.zoom}
			  onChildMouseEnter={this.onChildMouseEnter}
			  onChildMouseLeave={this.onChildMouseLeave}
			  heatmapLibrary={true}
			>
		 
			 {GoogleMapsMarkers}
			</GoogleMapReact>
		  </div>
		  )
	  }
  }
  export default Map