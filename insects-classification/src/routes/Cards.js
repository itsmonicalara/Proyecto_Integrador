import React, { useEffect, useState} from 'react'
import axios from 'axios';
import CardInsectos from '../componentes/cardInsecto';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Row,Col } from 'react-bootstrap';


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
        <h1 >hacer padding a la Lista</h1>
        <br></br>
     
        <Container>
        <h1 className="justify-content-center text-center">Lista de Arañas</h1>
          <Row className="d-inline-flex p-2 col-example">
          <Button class="text-center" size="lg" variant="primary" type="submit" onClick={routeChange}>  
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
          }
     </div>
  )
}

export default Cards