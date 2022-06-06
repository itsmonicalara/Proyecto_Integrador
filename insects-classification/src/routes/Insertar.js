import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Text, Modal, Input, Button, Container, Grid } from "@nextui-org/react";
import CardTemplate from '../componentes/CardTemplate';

function Insertar(){

    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        navigate(-1);
      }

    const [data, setData] = useState({
          name: "",
          description: "",
          danger: "",
          url: "",
          species:"",
          family:"",
          scientificName:""
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
          danger: data.danger,
          url: data.url,
          species: data.species,
          family: data.family,
          scientificName: data.scientificName
        };
        axios.post("http://localhost:27017/proyecto_db/add_spider", userData).then((response) => {
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
      const URL = "http://localhost:27017/proyecto_db/get_spiders";
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
                list.map((spider) =>(
                  <Grid xs={4}>
                      <CardTemplate
                        key={spider._id}
                        spider = {spider}
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
              placeholder='Nombre del insecto'
              name="name"
              value={data.name}
              onChange={handleChange}
            >
            </Input>
            <Input
              type="text"
              placeholder='Descripción del insecto'
              name="description"
              value={data.description}
              onChange={handleChange}
            >
            </Input>
            <Input
              type="text"
              placeholder='¿El insecto es peligrosa?'
              name="danger"
              value={data.danger}
              onChange={handleChange}
            >
            </Input>
            <Input
              type="text"
              placeholder='Url del insecto'
              name="url"
              value={data.url}
              onChange={handleChange}
            >
            </Input>
            <Input
              type="text"
              placeholder='Especie del insecto'
              name="species"
              value={data.species}
              onChange={handleChange}
            >
            </Input>
            <Input
              type="text"
              placeholder='Familia del insecto'
              name="family"
              value={data.family}
              onChange={handleChange}
            >
            </Input>
            <Input
              type="text"
              placeholder='Nombre científico del insecto'
              name="scientificName"
              value={data.scientificName}
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
export default Insertar