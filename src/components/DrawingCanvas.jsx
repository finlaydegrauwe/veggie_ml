/* eslint-disable */

import React, { useState } from "react";
import Sketch from "react-p5";
import * as ml5 from "ml5";
import ml5_model from "../models/veggie_ml.pict";
import Button from "./button";
import GroenteSaver from "../components/groentesaver";

import { initializeApp } from "firebase/app";

import { getStorage, ref, uploadString } from "firebase/storage";

// Set the configuration for your app
// TODO: Replace with your app's config object
const app = initializeApp({
  projectId: "verloren-groenten",
  appId: "1:679875628134:web:694fac0b217228cd4171a7",
  storageBucket: "verloren-groenten.appspot.com",
  locationId: "europe-west",
  apiKey: "AIzaSyClDfZeDysoZgAYMLxbFsTXXUTgi2ahtsY",
  authDomain: "verloren-groenten.firebaseapp.com",
  messagingSenderId: "679875628134",
});

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
  "patat",
  "tros",
  "kers",
  "blad",
  "was",
  "berg",
  "groene ",
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
  "steel",
  "was",
  "kers"
];

// Create a root reference
const storage = getStorage();

// Get a reference to the storage service, which is used to create references in your storage bucket

const SIZE = 256;
let inputCanvas,
  pix2pix,
  isTransfering = false;

export default function DrawingCanvas() {
  const [groenteNaam, setgroenteNaam] = useState(willeKeurigeGroente());
  const [eigenGroenteNaam, setEigenGroenteNaam] = useState('');

  function willeKeurigeGroente() {
    let groentje =
      stringsBegin[Math.floor(Math.random() * stringsBegin.length)] +
      stringsBegin[Math.floor(Math.random() * stringsBegin.length)] +
      stringsEnd[Math.floor(Math.random() * stringsEnd.length)];
    groentje = groentje.charAt(0).toUpperCase() + groentje.slice(1);
    return groentje;
  }

  let clearCanvas = false;
  const [loadingModel, setloadingModel] = useState(true);
  const [savingVeggie, setSavingVeggie] = useState(true);
  const [modelOutput, setmodelOutput] = useState("");

  const saveAutoGenVeggie = () => {
    console.log(modelOutput);
    const storageRef = ref(storage, "images/" + groenteNaam + ".png");
    const uploadTask = uploadString(
      storageRef,
      modelOutput.slice(22).slice(0, -1),
      "base64"
    ).then((snapshot) => {
      console.log("Uploaded a base64 string!");
    });
  };

  const saveZelfGenVeggie = () => {
    console.log(modelOutput);
    const storageRef = ref(storage, "images/" + eigenGroenteNaam + ".png");
    const uploadTask = uploadString(
      storageRef,
      modelOutput.slice(22).slice(0, -1),
      "base64"
    ).then((snapshot) => {
      console.log("Uploaded a base64 string!");
    });
  };

  // potentieel Smoothie saver: gebruiker ontvangt/downloadt png van smoothie

//   const saveSmoothie = () => {
   //  console.log(modelOutput);
   //  const storageRef = ref(storage, "images/" + ".png");
   //  const uploadTask = uploadString(
     //  storageRef,
     //  modelOutput.slice(22).slice(0, -1),
   //    "base64"
  //  ).then((snapshot) => {
  //    console.log("Uploaded a base64 string!");
//    });
//  };

  const setup = (p5, canvasParentRef) => {
    inputCanvas = p5.createCanvas(SIZE, SIZE).parent(canvasParentRef);

    // Selcect output div container
    //outputContainer = select('#output');
    //statusMsg = select('#status');

    // Select 'transfer' button html element
    //transferBtn = select('#transferBtn');

    // Select 'clear' button html element
    //clearBtn = select('#clearBtn');
    // Attach a mousePressed event to the 'clear' button
    //clearBtn.mousePressed(function() {
    //clearCanvas();
    //});

    // Set stroke to black
    p5.stroke(0);
    p5.pixelDensity(1);

    // Create a pix2pix method with a pre-trained model
    pix2pix = ml5.pix2pix(ml5_model, modelLoaded);
    p5.background(255, 255, 255);
  };

  function modelLoaded() {
    console.log("Model Loaded!");
    setloadingModel(false);
  }

  const draw = (p5) => {
    if (p5.mouseIsPressed) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
    if (clearCanvas) {
      p5.background(255, 255, 255);
      clearCanvas = false;
    }
  };

  const clear = () => {
    clearCanvas = true;
    //.background(255,255,255);
  };

  const transfer = () => {
    // Set isTransfering to true
    isTransfering = true;

    // Update status message
    console.log("Applying Style Transfer...!");

    // Select canvas DOM element
    const canvasElement = document.getElementById("defaultCanvas0");

    // Apply pix2pix transformation
    pix2pix.transfer(canvasElement, function (err, result) {
      if (err) {
        console.log(err);
      }
      if (result && result.src) {
        // Set isTransfering back to false
        isTransfering = false;
        // Clear output container
        // Create an image based result
        //p5.createImg(result.src).class('border-box').parent('output');
        // Show 'Done!' message
        //console.log(result);
        setmodelOutput(result.src);
        console.log("Done!");
      }
    });
  };

  return (
    <>
      <div className="col-1"></div>
      <div className="col-2">
        {" "}
        <p>
          <strong>Teken jouw verloren groente!</strong>
        </p>
        <Sketch className="test" setup={setup} draw={draw} />
      </div>
      <div className="col-3 teler">
        {loadingModel ? (
          <Button
            transfer={transfer}
            title="Model loading"
            icon="east"
            color="green"
          />
        ) : (
          <Button
            transfer={transfer}
            title="Teel jouw groente!"
            icon="east"
            color="green"
          />
        )}
      </div>
      <div className="col-4">
        {" "}
        <p>
          <strong>Oogst</strong>
        </p>
        <img src={modelOutput} alt="machine output" />
      </div>
      <div className="col-5"></div>

      <div className="col-1"></div>
      <div className="col-2">
        <Button clear={clear} title="Wis tekening" icon="close" color="red" />
      </div>
      <div className="col-3 save-stretch">
        {savingVeggie ? (
          <GroenteSaver
            willeKeurigeGroente={willeKeurigeGroente}
            groenteNaam={groenteNaam}
            setgroenteNaam={setgroenteNaam}
            setEigenGroenteNaam={setEigenGroenteNaam}
            saveAutoGenVeggie={saveAutoGenVeggie}
            saveZelfGenVeggie={saveZelfGenVeggie}
          />
        ) : (
          <Button
            saveVeggie={saveVeggie}
            title="Groente opslaan"
            icon="save"
            color="blue"
          />
        )}
      </div>
    </>
  );
}
