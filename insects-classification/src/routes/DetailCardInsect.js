import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Text } from "@nextui-org/react";
import '../styles/DetailCardInsect.css'

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
              <Text h1>{insecto.name}</Text>  
              <img src={insecto.url} className='img-fluid shadow-4' alt='...' />
              <p className="text-justify">
              {insecto.description}
              </p>                   
            </div>     
       </div>    
    )
}
export default DetailCardInsect