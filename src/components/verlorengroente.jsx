import React from "react";
import Button from "../components/button"

export default function Groente ({afbeelding, titel, groenteGeselecteerd, setGroenteGeselecteerd}) {
  return(
    <>
      <li className="groentepict">
        <img src={afbeelding} alt={titel} width="100%"/>
        <p>{titel}</p>
        <Button title="Voeg toe aan smoothie" icon="checkbox" color="green" groenteGeselecteerd={groenteGeselecteerd} setGroenteGeselecteerd={setGroenteGeselecteerd}/>
      </li>
    </>
  )
}