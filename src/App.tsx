import './App.css'
import Card from "./componenti/Card";
import FormCard from './componenti/FormCard';
import { useState } from 'react';
import type { Plant } from "./types";



function App() {
const addPlant = (plant: Plant)=>{
  setPlants([...plants, plant])
 }
const [plants, setPlants] = useState<Plant[]>([
  {
    id: 0, 
    name: "Photos", 
    description: "Il Pothos è un genere di piante da fiore della famiglia delle Araceae (tribù Potheae). È originario della Cina, dell'Australia, del sud-est asiatico e dell'Oceano Indiano.",
    imgUrl: "img/pothos.png",
    alreadyHave: true,
  },
  {
    id: 1, 
    name: "Monstera", 
    description: "Le Monstera sono piante rampicanti perenni e sempreverdi simili al Philodendron, che si arrampicano ai possibili appigli con le loro radici aeree.",
    imgUrl: "img/monstera.png",
    alreadyHave: false,
  },
  {
    id: 2, 
    name: "Calathea", 
    description: "La Calathea è un genere di piante erbacee perenni della famiglia Marantaceae, originarie dell'America tropicale, che comprende circa 60 specie",
    imgUrl: "img/calathea.png",
    alreadyHave: true,
  },
  {
    id: 3, 
    name: "Alocasia", 
    description: "L'Alocasia è un genere di piante erbacee rizomatose della famiglia Araceae, originaria delle foreste tropicali dell'Asia sudorientale e dell'Australia.",
    imgUrl: "img/alocasia.png",
    alreadyHave: false,
  },
])


  return (
  <>
   <FormCard addPlant={addPlant}></FormCard>

  <section className="m-9">
    <h1 className="text-center font-bold italic text-[2em] text-[#026702]">🌱 Plant List 🌱</h1>
    <div className="grid grid-cols-1 min-[669px]:grid-cols-2 min-[969px]:grid-cols-4 gap-5 mt-8 mb-12.5">
    {plants
      //.filter((plant) => !plant.alreadyHave)
      .map ((plant) => (
    <Card
      key={plant. id}
      title={plant.name}
      alreadyHave={plant.alreadyHave}
      imgUrl={plant.imgUrl}>
        {plant.description}
    </Card>
      ))}
    </div>
  </section>
  </>
  )
}

export default App
