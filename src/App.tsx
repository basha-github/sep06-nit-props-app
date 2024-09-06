import React from 'react'
import Demo from './Demo'

export default function App() {
  const cities = ["HYD","BNG","Delhi","Ooty"];
  const cars = ["Maruthi","Mahindra","Audi","BMW"];
 
  return (
    <div>
      
      <Demo items={cities} heading={"Cities"}/>
      
      <Demo items={cars} heading="Cars" />
     
      
    </div>
    
  )
}
