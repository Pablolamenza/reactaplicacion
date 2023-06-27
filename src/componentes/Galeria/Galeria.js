import React from "react";
import Perfil from "../perfil/Perfil.js";
import "./Galeria.css"

const Galeria = (props) => {
const {nombres} = props;//desestructuracion de props (se reciben como un objeto)de app!!
      console.log(nombres);
  
  
      return(
      <div className="contenedor-cards">
           <Perfil />
           <Perfil />
           <Perfil />
           <Perfil />
     </div>
   
  )
}

export default Galeria