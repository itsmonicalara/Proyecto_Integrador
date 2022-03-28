import React from 'react'
import './Map.css'
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import MapChart from "./MapChart";


function Map() {    

  return (
    <div className='map'>
        <h1>Eventos</h1>
        <h2>Todo lo que tienes que saber sobre las arañas!</h2>
        <h3>3 de abril de 2022 - 18:00 pm</h3>
        <div className='map_info'>
          <MapChart />
        </div>
    </div>
  )
}

export default Map