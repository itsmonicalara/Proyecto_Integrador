import React from 'react'
import { Button } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import '../styles/Home.css'
import logo from '../media/homepage-vector.jpg';

function Home() {
  return (
   <div className='home'>

      <div className='home-logo'>
        <img src={logo} alt=''></img>
      </div>

     <div className='home-title'>
       <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue500 -20%, $pink500 50%",
          }}
          weight="bold"
        >
          Clasificación
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $purple500 -20%, $pink500 100%",
          }}
          weight="bold"
        >
          de Insectos
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $yellow500 -20%, $red500 100%",
          }}
          weight="bold"
        >
          en México
        </Text>
     </div>
     <div className='home-paragraph'>
        <Text h2 size={28}>
          En esta aplicación podrás clasificar a algunos insectos de México. Ayuda a proteger las especies endemicas.
        </Text>
      </div>  
      
      <Button className='home-info-button' size="lg" color="gradient" animated="true" onClick={() => { window.location.href='/listings' }} >Más Info.</Button>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.6" d="M0,32L30,69.3C60,107,120,181,180,202.7C240,224,300,192,360,154.7C420,117,480,75,540,90.7C600,107,660,181,720,208C780,235,840,213,900,176C960,139,1020,85,1080,58.7C1140,32,1200,32,1260,37.3C1320,43,1380,53,1410,58.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>     
    

    </div>  
        
  
  )
}
export default Home