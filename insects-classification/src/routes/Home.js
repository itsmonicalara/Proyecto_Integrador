import React from 'react'
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
   <div > 
      <h1>InsectoRed México</h1>
      <br></br>
      <h1 className="justify-content-center text-center">InsectoRed México</h1>
      <br></br>
      <div className="justify-content-center text-center">

            <div className="container" style={{ width: "75%", minHeight: "inherit"}}> 
                <div className="row">
                    <div className="col-md-6  ml-5 pl-5" style={{width: "2000px", minHeight: "inherit"}}>
                      <Carousel className=" justify-content-center" style={{width: "80%", minHeight: "inherit"}}>
                      <Carousel.Item interval={1000}>
                        <img
                        width="300" 
                        height="300"
                          className="d-block w-100"
                          src="https://dam.ngenespanol.com/wp-content/uploads/2021/01/ara%C3%B1a-violinista.jpg"
                          alt="First slide"
                        />
                
                      </Carousel.Item>
                      <Carousel.Item interval={500}>
                        <img
                          className="d-block w-100"
                          width="300" 
                          height="300"
                          src="https://www.msdmanuals.com//-/media/manual/home/images/b/l/a/black_widow_spider_high_es.jpg?thn=0&sc_lang=es"
                          alt="Second slide"
                        />

                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          width="300" 
                          height="300"
                          src="https://dcom-prod.imgix.net/files/2021-09/Foto%20de%20portada.jpg"
                          alt="Third slide"
                        />
                      </Carousel.Item>
                    </Carousel>


                    <br></br>
                   
                    <p>
                    InsectoRed México, es una plataforma para preservar, infromar y atander sobre insectos que puede llegar a ser daniños o peligrosos. 
                    Además de contar con la identificacion de distintas scpecies. InsctoRed, cuenta con un reconociemtno de imagenes que nos ayudara a saber si una apigacin, por medio de una foto sacada desde galeria

                    </p>
                    </div>
                                            
                </div>
            </div>

        </div>
      {/* <Carousel width={100} height={100} className="mx-auto">
        <Carousel.Item interval={1000}>
          <img
          width={900} height={500}
            className="d-block w-100"
            src="https://dam.ngenespanol.com/wp-content/uploads/2021/01/ara%C3%B1a-violinista.jpg"
            alt="First slide"
          />
  
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://www.msdmanuals.com//-/media/manual/home/images/b/l/a/black_widow_spider_high_es.jpg?thn=0&sc_lang=es"
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dcom-prod.imgix.net/files/2021-09/Foto%20de%20portada.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel> */}
    

    
  </div>
   
  
        
  
  )
}

export default Home