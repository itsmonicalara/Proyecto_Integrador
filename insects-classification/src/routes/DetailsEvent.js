import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Text, Image } from "@nextui-org/react";
import '../styles/DetailCardInsect.css'
import CardMap from'../componentes/CardMap';




function DetailsEvent(){
  const mapURL =   "https://maps.googleapis.com/maps/api/js?key=AIzaSyDfUjLTatz7au479SlIxCXvNqpVAmyGiy8&callback=initMap" 
    const {id} = useParams();
 
    const [evento, setEvento] = useState({});
    const [ids] = useState(id); 

    useEffect(() => {
        axios.get(`http://localhost:4000/proyecto_db/event/${id}`)
            .then(res => {
                console.log(res)
                setEvento(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[id, ids]);

    return (
        <div className='detail-insect'>
            <div className='detail-insect-title'>
                <Text
                  h1
                  size={60}
                  css={{
                    textGradient: "45deg, #C9CF1B 0%, #76CFA8 50%"
                  }}
                  weight="bold"
                   >
                  Detalle de araña
                </Text>   
            </div>

            <div className='detail-insect-container'>
              <Text h1>{evento.name}</Text>  
              <br></br>
              <br></br>      
              <p className="text-justify">
              {evento.description}
              </p>
              

            </div>   
            <div>
            <CardMap
            googleMapURL={mapURL}
            containerElement={<div style={{ height :'400px'}}/>}
            mapElement={<div style={{height :'100%'}}/>}
            loadingElement={<p>Cargando</p>}
            

            />
            </div>  
       </div>    
    );
}

export default DetailsEvent
