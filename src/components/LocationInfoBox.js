import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationInfoBox = ({ truck, closeModal }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const [idData, setIDData] = useState([])
    const [loading, setLoading] = useState(false)
  
    return(
      <div className="location-info-box">
        <Card key={truck.id} style={{ width: '22rem', marginBottom: '4rem' }}>
          <button onClick={closeModal} type="button" class="close-button" data-dismiss="modal" aria-hidden="true">×</button>
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
            <Card.Text>
              Monday {`${truck.monday_open} - ${truck.monday_close}`}
            </Card.Text>
            <Card.Text>
              Tuesday {`${truck.tuesday_open} - ${truck.tuesday_close}`}
            </Card.Text>
            <Card.Text>
              Wednesday {`${truck.wednesday_open} - ${truck.wednesday_close}`}
            </Card.Text>
            <Card.Text>
              Thursday {`${truck.thursday_open} - ${truck.thursday_close}`}
            </Card.Text>
            <Card.Text>
              Friday {`${truck.friday_open} - ${truck.friday_close}`}
            </Card.Text>
            <Card.Text>
              Saturday {`${truck.saturday_open} - ${truck.saturday_close}`}
            </Card.Text>
            <Card.Text>
              Sunday {`${truck.sunday_open} - ${truck.sunday_close}`}
            </Card.Text>
            <Button className="btn-card" variant="secondary" href="#" 
            onClick={() => console.log('this is working')}>
                VIEW FULL DETAILS
            </Button>
          </Card.Body>
        </Card>        
      </div>
    )
}

export default LocationInfoBox