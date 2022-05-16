import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Cards.css'
import { Grid, Button, Text, Container } from "@nextui-org/react";
import CardTemplate from '../componentes/CardTemplate';

function Cards()  {

  const URL = "http://localhost:4000/proyecto_db/get_spiders";
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

  const routeChange = () =>{ 
    let path = '/insertar'; 
    navigate(path);
  }

  return (
    <div>
        <div className='cards-title'>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $blue500 -20%, $pink500 50%",
            }}
            weight="bold"
            >
            Lista de arañas
          </Text>
        </div>

        <div className='cards-button'>
          <Button className='nav-button' color="primary" size="xl" auto onClick={() => { routeChange() }}>Añadir araña</Button>
        </div>

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
        
     </div>
  )
}

export default Cards