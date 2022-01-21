import React from "react";
import Button from "./button";

export default function GroenteSaver(props) {
  return (
    <div className="groentesaver">
      <div className="flex-row">
        <Button
          willeKeurigeGroente={props.willeKeurigeGroente}
          setgroenteNaam={props.setgroenteNaam}
          title="Andere naam"
          icon="autorenew"
          color="purple"
        />
        <p></p>
        <Button
            saveAutoGenVeggie={props.saveAutoGenVeggie}
        
        title={props.groenteNaam} icon="save" color="blue" />
      </div>
      <p>Of:</p>
      <div className="flex-row">
        <input
          type="text"
          name="name"
          onChange={(e) => props.setEigenGroenteNaam(e.target.value)}
        />
        <Button 
            saveZelfGenVeggie={props.saveZelfGenVeggie}
            title="Opslaan" icon="save" color="blue" />
      </div>
    </div>
  );
}
