import React, { useState } from "react";

function NewPlantForm({ onPlantAdd }) {
  const [newPlantData, setNewPlantData] = useState({
    name: "",
    image: "", 
    price: ''
  })

  function handleNameChange(e) {
    setNewPlantData({
      ...newPlantData,
      name: e.target.value
    })
  }

  function handleImageChange(e) {
    setNewPlantData({
      ...newPlantData,
      image: e.target.value
    })
  }

  function handlePriceChange(e) {
    setNewPlantData({
      ...newPlantData,
      price: parseFloat(e.target.value)
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    onPlantAdd(newPlantData)
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlantData.name} onChange={handleNameChange} />
        <input type="text" name="image" placeholder="Image URL" value={newPlantData.image} onChange={handleImageChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlantData.price} onChange={handlePriceChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
