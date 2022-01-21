import React from 'react';
import Button from "./button"

export default function GroenteSaver(){
  return(
    <div className="groentesaver">
      <Button title="Suggereer mij een andere naam!  " icon="autorenew" color="purple"/>
      <Button title="Groente opslaan" icon="save" color="blue" />
     <label>
       <p>
         Of:
       </p>
      <input type="text" name="name" />
     </label>
     <input type="submit" value="Opslaan" />
      </div>
  )
}