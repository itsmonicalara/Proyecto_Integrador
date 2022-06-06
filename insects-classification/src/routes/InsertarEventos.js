import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Text, Modal, Input, Button, Container, Grid } from "@nextui-org/react";
import '../styles/InsertarEvento.css';

function InsertarEventos(){

    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = '/events'; 
        navigate(path);
      }

      

    const [data, setData] = useState({
          name: "",
          description: "",
          date: "",
          time: "",
          adress:"",
          lat:0.0,
          lng:0.0, 
          poster: ""
      });

      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };
    
      const handleSubmit = (e) => {
        
          console.log("se pico")
        e.preventDefault();
        const userData = {
          name: data.name,
          description: data.description,
          date: data.date,
          time: data.time,
          adress: data.adress,
          lat: data.lat,
          lng: data.lng,
          poster: data.poster
        };
        axios.post("http://localhost:27017/proyecto_db/add_event", userData).then((response) => {
          console.log(response.status);
          console.log(response.data.token);
          routeChange();
        });
       
      }; 


      return (
        <div>

        <div className='cards-insertEvent'>
        <Text 
        className='events-title'
          h1
          size={60}
          css={{
            textGradient: "45deg, $yellow500 -20%, $red500 100%",
          }}
          weight="bold"
        >
          Inserta evento
        </Text> 
            <div className='formsContainer'>
                <h4>
                Nombre del evento: 
                </h4>
                <Input
                type="text"
                placeholder='Nombre del evento '
                name="name"
                value={data.name}
                onChange={handleChange}
                style={{ width: '30%' }}
                >
                </Input>

                <h4>
                Descripción del evento:
                </h4>
                <Input
                type="text"
                placeholder='Descripción del evento'
                name="description"
                value={data.description}
                onChange={handleChange}
                >
                </Input>

                <h4>
                Fecha del evento:
                </h4>
                <Input
                type="text"
                placeholder='Fecha del evento '
                name="date"
                value={data.date}
                onChange={handleChange}
                >
                </Input>

                <h4>
                Hora del evento:
                </h4>
                <Input
                type="text"
                placeholder='Hora del evento'
                name="time"
                value={data.time}
                onChange={handleChange}
                >
                </Input>

                <h4>
                Dirección del evento:
                </h4>
                <Input
                type="text"
                placeholder='Dirección del evento '
                name="adress"
                value={data.adress}
                onChange={handleChange}
                >
                </Input>

                <h4>
                Latitud del evento:
                </h4>
                <Input
                type="text"
                placeholder='Lat evento'
                name="lat"
                value={Number(data.lat)}
                onChange={handleChange}
                >
                </Input>

                <h4>
                Longitud del evento:
                </h4>
                <Input
                type="text"
                placeholder='Long evento'
                name="lng"
                value={Number(data.lng)}
                onChange={handleChange}
                >
                </Input>

                <h4>
                Poster del evento:
                </h4>

                <Input
                type="text"
                placeholder='Poster del evento'
                name="poster"
                value={data.poster}
                onChange={handleChange}
                className ="inputPoster"
                >
                </Input>

                <Button auto type='submit' onClick={handleSubmit} className='botonEnviar'>
                Enviar
                </Button>
            </div>

            
         
        </div>  

          
        </div>
      )

}
export default InsertarEventos