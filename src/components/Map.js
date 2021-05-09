import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'



const Map = ({ idData, center, zoom, lat, lng }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const test = () => {
        console.log("truck") 
    }
   const markers = idData.map(truck => {
   
        return <LocationMarker lat={truck.latitude} lng={truck.longitude} onClick={() => 
            setLocationInfo({ id: truck.id, title: truck.title })} />
      
       return null
   }) 

    return (
        <div className="map">
           <GoogleMapReact
              bootstrapURLKeys={{ key: 
                'AIzaSyC55APuWiPIxJXXYJYgN-2Jf72WAtAx3DU' }}
              defaultCenter={[lat, lng]}
              defaultZoom={ 15 }
              center={[lat, lng]}
           >

           <LocationMarker lat={lat} lng={lng} onClick={test} />           
           </GoogleMapReact>
           {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 38.9164,
        lng: -76.9948
    },
    zoom: 14
}

export default Map