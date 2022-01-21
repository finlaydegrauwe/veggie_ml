import * as React from "react";
import { Link } from "wouter";
import Button from "../components/button"
import Groente from "../components/verlorengroente"

 /* nog in te vullen voor smoothie pagina*/

export default function Smoothie() {
  return (
    <div id="blender_achtergrond">
      
      
        <div className="col-1"></div>
        <div className="col-2"></div>
        <div className="col-3"></div>
        <div className="col-4"></div>
        <div className="col-5"></div>
      
        <div className="col-1"></div>
        <div className="col-2"></div>
        <div className="col-3" id="vierkant2"> Smoothie</div>
        <div className="col-4"></div>
        <div className="col-5"></div>
      
        <div className="col-1"></div>
        <div className="col-2 middle-stretch"><Button title="Smoothie opslaan" icon="save" color="blue"/></div>
        <div className="col-5"></div>
        
    </div>)
  
  /* https://ej2.syncfusion.com/react/documentation/button/how-to/add-link-to-a-button/ */
}
