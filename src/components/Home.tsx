import React from "react";
import Cat from "./Cat";
import manycat from './image/manycat.jpg'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div align="center">
      
      <Link to="Cat">
      <img src = {manycat}
        alt = "Welcome to The Pet  Shelter"
        width = "80%"/>
      </Link>
    </div>
  )
}

export default Home;