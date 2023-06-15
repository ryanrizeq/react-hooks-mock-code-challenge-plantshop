import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData }) {

  

  return (
    <ul className="cards">
      {plantData.map((plant) => (
        <PlantCard 
          key={plant.name}
          img={plant.image}
          name={plant.name}
          price={plant.price}
        />
      ))}
    </ul>
  );
}

export default PlantList;
