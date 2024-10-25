import React from "react";
import "../styles/components/CardRelatos.css"


export default function CardRelatos({img, description, name}){
    return (
        <div className="card-relatos">
          <div className="card-relatos-img">
            <img src={img} alt={name} />
          </div>
          <div className="card-relatos-content">
            <p>{description}</p>
            <h4>{name}</h4>
          </div>
        </div>
      );
    

}