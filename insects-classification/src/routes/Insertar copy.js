import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup, Form, Button, Card } from 'react-bootstrap';

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
        axios.post("http://localhost:4000/proyecto_db/add", userData).then((response) => {
          console.log(response.status);
          console.log(response.data.token);
          routeChange();
        });
      }; 

      return (
        <div>
          <h1>Agrega Insecto</h1>
        <Card>
            <Card.Header as="h5">Agrega Insecto</Card.Header>
            <Card.Body>
        <Form  onClick={handleSubmit}>
            <Form.Group className="mb-3" controlId="formsSpiderName">
                <Form.Label htmlFor="name">
                Nombre
                <Form.Control
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                />
                </Form.Label>
            </Form.Group>
            <Form.Group className="mb-5" controlId="formsSpiderDescription">
                <Form.Label htmlFor="description">
                Descipcion
                <Form.Control
                    type="text"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                />
                </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formsSpiderDanger">
                <Form.Label htmlFor="danger">
                ¿Es peligrosa?
                <Form.Control
                    type="text"
                    name="danger"
                    value={data.danger}
                    onChange={handleChange}
                />
                </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formsSpiderImage">
                <Form.Label htmlFor="url">
                URL imagen
                <Form.Control
                    type="text"
                    name="url"
                    value={data.url}
                    onChange={handleChange}
                />
                </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formsSpiderSpecie">
                <Form.Label htmlFor="species">
                Especie
                <Form.Control
                    type="text"
                    name="species"
                    value={data.species}
                    onChange={handleChange}
                />
                </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formsSpiderFamily">
                <Form.Label htmlFor="family">
                Familia
                <Form.Control
                    type="text"
                    name="family"
                    value={data.family}
                    onChange={handleChange}
                />
                </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formsSpiderScientificName">
                <Form.Label htmlFor="scientificName">
                Nombre Scientifico
                <Form.Control
                    type="text"
                    name="scientificName"
                    value={data.scientificName}
                    onChange={handleChange}
                />
                </Form.Label>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
          </Form>
          </Card.Body>
        </Card>
        </div>
      )

}
export default Insertar