import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'



const Map = ({ lat, lng, currInfo, modalIsOpen, closeModal }) => {
    return (
        <div className="map">
           <GoogleMapReact
              bootstrapURLKeys={{ key: 
                'AIzaSyC55APuWiPIxJXXYJYgN-2Jf72WAtAx3DU' }}
              defaultCenter={[lat, lng]}
              defaultZoom={ 15 }
              center={[lat, lng]}
           >
           <LocationMarker lat={lat} lng={lng} />
        {
            modalIsOpen && <LocationInfoBox modalIsOpen={modalIsOpen} 
            closeModal={closeModal} truck={currInfo} />           
        }
           </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    // center: {
    //     lat: 38.9164,
    //     lng: -76.9948
    // },
    zoom: 14
}

export default Map