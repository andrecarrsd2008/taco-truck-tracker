import { useState, useEffect } from 'react'
import './App.css';
import Map from './components/Map';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/phone';
import Header from './components/Header'

function App() {
  const [idData, setIDData] = useState([])
  const [loading, setLoading] = useState(false)
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [currInfo, setCurrInfo ] = useState({})
  const [modalIsOpen,setIsOpen] = useState(false);
  let subtitle;

  const openModal = () => {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }


  useEffect(() => {
    const fetchID = async () => {
      setLoading(true)
      const res = await fetch('https://my.api.mockaroo.com/locations.json?key=a45f1200')
      const result = await res.json()
      console.log("result", result)
      setIDData(result)
      setLoading(false)
    }

    fetchID()
  }, [])

  const getCoordinates = (newLat, newLng) => {
    setLat(newLat)
    setLng(newLng)
  }

  const getLocationInfoBox = (truck) => {
    console.log({truck})
    setCurrInfo(truck)
    openModal()
  }
  return (
    <div className="App">
      <Header />
      <h1 className="rio">rio seo</h1>
     <div className="dashboard-container">
     
      <div className="card-container">
        {
          idData.map(truck => {

            return(
              
              <Card key={truck.id} style={{ width: '22rem' }}>
              <Card.Body>
            <Card.Title>{truck.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{truck.address} <br />{truck.city} {truck.postal_code}</Card.Subtitle>
                <Card.Text style={{ color: 'orange' }}>
                <Icon icon={locationIcon} className="phone" />
                 123-555-1234
                </Card.Text>
                <Card.Text style={{ color: '#3ad647' }}>
                  Closed By {truck.friday_close}
                </Card.Text>
                <Button className="btn-card" variant="secondary" href="#" 
                onClick={() => getCoordinates(truck.latitude, truck.longitude)}>
                  DIRECTIONS</Button>
                <Button className="btn-card" variant="secondary" href="#"  
                onClick={() => getLocationInfoBox(truck)}>MORE INFO</Button>
              </Card.Body>
            </Card>          
                
            )
          }) 
        }
      </div>
      <div className="map-container">
        <Map modalIsOpen={modalIsOpen} closeModal={closeModal} 
        idData={idData} lat={lat} lng={lng} currInfo={currInfo}/>
      </div>
      </div>
     
    </div>
  );
}



export default App;
