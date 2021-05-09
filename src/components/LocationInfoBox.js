import { useState } from 'react';
import Card from 'react-bootstrap/Card';
// import Map from './components/Map';


const LocationInfoBox = ({ lat, lng, onClick }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const [idData, setIDData] = useState([])
    const [loading, setLoading] = useState(false)
    // const [lat, setLat] = useState(0)
    // const [lng, setLng] = useState(0)
  
    return(
        <Card key={truck.id} style={{ width: '22rem' }}>
        <Card.Body>
      <Card.Title>{truck.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{truck.address} <br />{truck.city} 
      {truck.postal_code}
      </Card.Subtitle>
          <Card.Text style={{ color: 'orange' }}>
          <Icon icon={locationIcon} className="phone" />
           123-555-1234 
          </Card.Text>
          <Card.Text style={{ color: 'orange' }}>
           Get Directions
          </Card.Text>
          <Card.Text style={{ color: '#3ad647' }}>
            Monday {truck.monday_open - truck.monday_close}
            Tuesday {truck.tuesday_open - truck.tuesday_close}
            Wednesday {truck.wednesday_open - truck.wednesday_close}
            Thursday {truck.thursday_open - truck.thursday_close}
            Friday {truck.friday_open - truck.friday_close}
            Saturday {truck.saturday_open - truck.saturday_close}
            Sunday {truck.sunday_open - truck.sunday_close}
          </Card.Text>
          <Button className="btn-card" variant="secondary" href="#" 
          onClick={() => getCoordinates(truck.latitude, truck.longitude)}>
              VIEW FULL DETAILS
          </Button>
          
        </Card.Body>
      </Card>        
    )
}

export default LocationInfoBox