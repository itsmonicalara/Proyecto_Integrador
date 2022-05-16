import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Text, Image, Button } from "@nextui-org/react";
import '../styles/DetailCardInsect.css'
import LeftArrow from '../media/left-arrow.png';

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
            <div className='back-button'>
                <Button color='warning' shadow auto onClick={() => window.history.back()}>Atras</Button>
            </div>
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
              <br></br>
              <Image
                width={400}
                height={250}  
                src={insecto.url}
                alt="Default Image"
                objectFit="cover"
              />
              <br></br>      
              <p className="text-justify">
              {insecto.description}
              </p>
            </div> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#A7CF64" fill-opacity="0.5" d="M0,96L26.7,117.3C53.3,139,107,181,160,176C213.3,171,267,117,320,101.3C373.3,85,427,107,480,144C533.3,181,587,235,640,256C693.3,277,747,267,800,261.3C853.3,256,907,256,960,224C1013.3,192,1067,128,1120,122.7C1173.3,117,1227,171,1280,160C1333.3,149,1387,75,1413,37.3L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
       </div>    
    );
}
export default DetailCardInsect