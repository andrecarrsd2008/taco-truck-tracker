import { useState, useEffect } from 'react';
import React from 'react';

export const Footer = () => {

// const Footer = ({ truck, closeModal }) => {
//     const [locationInfo, setLocationInfo] = useState(null)
//     const [idData, setIDData] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [currInfo, setCurrInfo ] = useState({})
//     const [lat, setLat] = useState(0)
//     const [lng, setLng] = useState(0)
//     const [modalIsOpen,setIsOpen] = useState(false);

  

//   const openModal = () => {
//     setIsOpen(true);
//   }

//   function closeModal(){
//     setIsOpen(false);
//   }
    
//     const getCoordinates = (newLat, newLng) => {
//         setLat(newLat)
//         setLng(newLng)
//       }
    
//       const getLocationInfoBox = (truck) => {
//         console.log({truck})
//         setCurrInfo(truck)
//          openModal()
//       }
//       idData.map(truck => {

    return (

        <footer className="footer-container">
              <button className="btn-left">
               <text>
                   <p>List</p>
               </text>
              </button>
              <button  className="btn-right">
              <text>
                   <p>Map</p>
               </text>
              </button>
      
        </footer>
    )
  

}


export default Footer