import React, { useEffect, useState} from 'react'
import axios from 'axios';
import CardInsectos from '../componentes/cardInsecto';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Container,Row,Col } from 'react-bootstrap';
import '../styles/Cards.css'
import { Grid, Card, Col, Row, Button, Text } from "@nextui-org/react";
import { Card4 } from '../componentes/CardTemplate';

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

  const MockItem = ({ text }) => {
    return (
      <Card color="primary" css={{ h: "$24" }}>
        <Text h6 size={15} color="white" css={{ mt: 0 }}>
          {text}
        </Text>
      </Card>
    );
  };

  return (
    <div>
        <br></br>
     
        {/* <Container> */}
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
          <Grid.Container gap={2} justify="center">
            <Grid xs={4}>
              <Card4 />
            </Grid>
            <Grid xs={4}>
              <Card4/>
            </Grid>
            <Grid xs={4}>
              <Card4/>
            </Grid>
          </Grid.Container>      
        </div>

        

        

          {/* <Row className="d-inline-flex p-2 col-example">

          <Button className="cards-button" class="text-center" size="lg" variant="primary" type="submit" onClick={routeChange}>  
              Insertar Araña
                </Button>
            </Row>
        </Container>
          {
            list.map((spider) =>(
              <Container>
                <Row>
                  <Col>
                    <CardInsectos
                      key={spider._id}
                      spider = {spider}
                    />
                  </Col> 
                </Row>
              </Container>         
            ))         
          } */}
     </div>
  )
}

export default Cards