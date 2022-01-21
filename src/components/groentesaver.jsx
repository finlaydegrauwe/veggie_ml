import React, { useState } from "react";
import Button from "./button";

const stringsBegin = [
  "wortel",
  "knol",
  "bei",
  "bes",
  "peer",
  "spaghetti",
  "raap",
  "aard",
  "kool",
  "bloem",
  "peper",
  "gurk",
  "look",
  "boon",
  "bos",
  "water",
  "boeren",
  "vrucht",
  "dop",
  "rabi",
  "peen",
  "steel",
  "suiker",
  "tuin"
];

const stringsEnd = [
  "wortel",
  "knol",
  "bei",
  "bes",
  "peer",
  "raap",
  "aard",
  "kool",
  "bloem",
  "peper",
  "gurk",
  "look",
  "boon",
  "bos",
  "vrucht",
  "dop",
  "rabi",
  "peen",
  "steel"
];

export default function GroenteSaver() {
  const [groenteNaam, setgroenteNaam] = useState(willeKeurigeGroente());

  function willeKeurigeGroente() {
    let groentje =
      stringsBegin[Math.floor(Math.random() * stringsBegin.length)] +
      stringsBegin[Math.floor(Math.random() * stringsBegin.length)] +
      stringsEnd[Math.floor(Math.random() * stringsEnd.length)];
    groentje = groentje.charAt(0).toUpperCase() + groentje.slice(1);
    return groentje;
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
