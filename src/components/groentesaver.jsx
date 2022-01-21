import React, {useState} from "react";
import Button from "./button";

const strings = [
  "wortel",
  "knol",
  "bei",
  "bes",
  "peer",
  "spaghetti",
  "raap"
];

export default function GroenteSaver() {
  const [groenteNaam, setgroenteNaam] = useState(willeKeurigeGroente());

  function willeKeurigeGroente() {
      return strings[Math.floor(Math.random() * strings.length)]+strings[Math.floor(Math.random() * strings.length)]+strings[Math.floor(Math.random() * strings.length)];
    }

  return (
    <div className="groentesaver">
      <div className="flex-row">
      <Button
      willeKeurigeGroente={willeKeurigeGroente}
      setgroenteNaam={setgroenteNaam}
        title="andere!  "
        icon="autorenew"
        color="purple"
      />
      <p></p>
      <Button title={groenteNaam} icon="save" color="blue" />
      </div>
        <p>Of:</p>
      <div className="flex-row">

        <input type="text" name="name" />
        <Button title="Opslaan" icon="save" color="blue" />
      </div>
    </div>
  );
}
