import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function DetailCardInsect(){
    const {id} = useParams();
 
    const [insecto, setInsecto] = useState({});
    const [ids] = useState(id); 

    useEffect(() => {
        axios.get(`http://localhost:4000/proyecto_db/spider/${id}`)
            .then(res => {
                console.log(res)
                setInsecto(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[id, ids]);

      return (
            <div>
                    <h1>Hola</h1>
                <Container>
                        <h1>{insecto.name}</h1>
                        <img src={insecto.url} className='img-fluid shadow-4' alt='...' />
                        <p className="text-justify">
                        {insecto.description}
                          </p>                   
                </Container>
           </div>    
      )
}
export default DetailCardInsect