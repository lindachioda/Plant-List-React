import { useState } from "react";
import type { ChangeEvent } from "react";
import type { PlantFormData, Plant } from "../types";

type FormCardProps = {
  addPlant: (plant: Plant) => void;
}



function FormCard({ addPlant }: FormCardProps){
    const[formData, setFormData]= useState<PlantFormData>({
        name:"",
        description:"",
        imgUrl:"",
        alreadyHave: false,
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = e.target
        const inputValue = e.target instanceof HTMLInputElement && e.target.type === "checkbox" ? e.target.checked : value
        setFormData ({...formData, [name]:inputValue})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    //prevent default!!!!
        e.preventDefault()

        const plant = {
            id: Math.random(),
            name: formData.name,
            description: formData.description,
            imgUrl: formData.imgUrl,
            alreadyHave: formData.alreadyHave,
        }
    setFormData ({
        name:"",
        description:"",
        imgUrl:"",
        alreadyHave: false,
      })
      addPlant(plant)
    }

    return (
    <section className="flex flex-col justify-center items-center">
        <h1 className="mt-12 mb-0.5 text-center font-bold text-[1.8em] text-[#026702]">Aggiungi la tua pianta</h1><p className="text-5xl mb-9">🪴</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 w-100 min-[669px]:w-100 max-[668px]:w-[90%] mb-10 bg-[oklch(0.62_0.23_138.44_/0.64)] border-3 border-green-600 p-5 rounded-lg">
            <div className="flex flex-col items-center">
                 <label className="text-emerald-900 font-bold">Nome Pianta</label>
                 <input className=" bg-amber-50 border-2 rounded w-70 h-9 border-green-600" type="text" name="name" value={formData.name} onChange={handleInputChange}></input>
            </div>
            <div className="flex flex-col items-center">
                 <label className="text-emerald-900 font-bold">Descrizione</label>
                 <textarea className=" bg-amber-50 border-2 w-70 rounded border-green-600" name="description" value={formData.description} onChange={handleInputChange}></textarea>
            </div>
            <div className="flex flex-col items-center">
                 <label className="text-emerald-900 font-bold">Immagine</label>
                 <input className=" bg-amber-50 border-2 w-70 h-9 rounded border-green-600" type="text" name="imgUrl" value={formData.imgUrl} onChange={handleInputChange}></input>
            </div>
            <div className="flex flex-col items-center">
                 <label className="text-emerald-900 font-bold">Ce l'ho?</label>
                 <input type="checkbox" name="alreadyHave" checked={formData.alreadyHave} onChange={handleInputChange}></input>
            </div>
            
            <button className=" bg-emerald-800 text-amber-50 border-2 w-40 h-9 rounded border-green-600" type="submit">Aggiungi Pianta!</button>
        </form>
    </section>
    )
}
export default FormCard