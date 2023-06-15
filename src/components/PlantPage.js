import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlantData(data))
  }, [])

  function onPlantAdd(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })

    setPlantData([...plantData, newPlant])
  }

  const filteredPlants = plantData.filter((plant) => {
    return plant.name.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm onPlantAdd={onPlantAdd}/>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      <PlantList plantData={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
