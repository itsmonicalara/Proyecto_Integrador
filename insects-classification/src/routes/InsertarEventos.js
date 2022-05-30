import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Text, Modal, Input, Button, Container, Grid } from "@nextui-org/react";
import CardEvent from '../componentes/CardEvent';

function InsertarEventos(){

    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        navigate(-1);
      }

    const [data, setData] = useState({
          name: "",
          description: "",
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
        e.preventDefault();
        const userData = {
          name: data.name,
          description: data.description,
          time: data.time,
          adress: data.adress,
          lat: data.lat,
          lng: data.lng,
          poster: data.poster
        };
        axios.post("http://localhost:4000/proyecto_db/add_event", userData).then((response) => {
          console.log(response.status);
          console.log(response.data.token);
          routeChange();
        });
      }; 

      // Modal test
      const [visible, setVisible] = React.useState(false);
    
      const handler = () => setVisible(true);
    
      const closeHandler = () => {
        setVisible(false);
        console.log("closed");
      };

      // Call handler when page is loaded
      useEffect(() => {
        handler();
      }, []);

      // Show cards
      const URL = "http://localhost:4000/proyecto_db/get_event";
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
        <div>

        <div className='cards-container'>
          <Container>
            <Grid.Container gap={2} justify="center">
              {
                list.map((event) =>(
                  <Grid xs={4}>
                      <CardEvent
                        key={event._id}
                        evento = {event}
                      />
                  </Grid>
                ))
              }
            </Grid.Container>
          </Container>   
        </div>  

        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
          onClick={handleSubmit}
        >
        <Modal.Header>
            <Text id="modal-title" size={18}>
              Añade una{' '}
              <Text b size={18}>
                araña
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              type="text"
              placeholder='Nombre del evento '
              name="name"
              value={data.name}
              onChange={handleChange}
            >
            </Input>
            <Input
              type="text"
              placeholder='Descripción del evento'
              name="description"
              value={data.description}
              onChange={handleChange}
            >
            </Input>
            <Input
              type="text"
              placeholder='Hora del evento'
              name="12:30pm"
              value={data.time}
              onChange={handleChange}
            >
            </Input>
            <Input
              type="text"
              placeholder='Dirección del evento'
              name="addres"
              value={data.adress}
              onChange={handleChange}
            >
            </Input>
            <Input
              type="text"
              placeholder='Lat evento'
              name="lat"
              value={Number(data.lat)}
              onChange={handleChange}
            >
            </Input>
            <Input
              type="text"
              placeholder='Long evento'
              name="lng"
              value={Number(data.lng)}
              onChange={handleChange}
            >
            </Input>
            <Input
              type="text"
              placeholder='Poster del evento'
              name="poster"
              value={data.poster}
              onChange={handleChange}
            >
            </Input>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={routeChange}>
              Cerrar
            </Button>
            <Button auto type='submit' onClick={closeHandler}>
              Enviar
            </Button>
          </Modal.Footer>
        </Modal>
          
        </div>
      )

}
export default InsertarEventos