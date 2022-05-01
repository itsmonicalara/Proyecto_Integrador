import React, { useEffect, useState}  from 'react'
import '../styles/Events.css'
import { Text } from '@nextui-org/react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Cards.css'
import CardEvent from '../componentes/CardEvent';


function Events() {    

  const URL = "http://localhost:4000/proyecto_db/get_event";
  let navigate = useNavigate(); 
  const getData = async () => {
    const response = axios.get(URL);
    return response;
  }

  const [list, setList] = useState([]);

  useEffect(() =>{

    getData("/").then((response) =>{
      setList(response.data);
    })
  }, [])

  return (
    <div className='events'>
      <div className='events-title'>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $yellow500 -20%, $red500 100%",
          }}
          weight="bold"
        >
          Próximos eventos
        </Text> 

        {
            list.map((event) =>(
                    
                    <CardEvent
                      key={event._id}
                      event = {event}
                    />
                      
            ))         
          }

      </div>
         
    </div>
  )
}

export default Events