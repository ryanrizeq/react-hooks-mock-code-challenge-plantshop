import React, { useState } from "react";

function PlantCard({ img, name, price }) {
  const [inStock, setInStock] = useState(true)

  function handleClick() {
    setInStock(!inStock)
  }

  return (
    <li className="card">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
