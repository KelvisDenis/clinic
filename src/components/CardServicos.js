import React from "react";
import "../styles/components/CardServicos.css"


export default function CardServicos({img, title, description}){
    return(
        <div className="card-container">
        <div className="card-image">
          <img src={img} alt={title} />
        </div>
        <div className="card-content">
          <h4>{title}</h4>
          <hr />
          <p>{description}</p>
        </div>
      </div>
    )
}