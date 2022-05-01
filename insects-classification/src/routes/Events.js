import React from 'react'
import '../styles/Events.css'
import { Text } from '@nextui-org/react';


function Events() {    

  return (
    <div className='events'>
      <div className='events-title'>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $yellow500 -20%, $red500 100%",
          }}
          weight="bold"
        >
          Próximos eventos
        </Text>   
      </div>
         
    </div>
  )
}

export default Events