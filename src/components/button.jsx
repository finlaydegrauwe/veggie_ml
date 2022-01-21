import React, { useState } from "react";
import { Link } from "wouter";

export default function Button(props) {
  const [checked, setChecked] = useState(false);

  if (props.title === "Blend it up") {
    return (
      <Link href="/smoothie" className="active">
        <button id="blenderbutton" className={`${props.color}`}>
          <span
            className="material-icons"
            id="blender-wiggle"
            style={{ fontSize: "48pt" }}
          >
            {props.icon}
          </span>
          <span>{props.title}</span>
        </button>
      </Link>
    );
  } else if (props.title === "Terug") {
    return (
      <Link href="/" className="active">
        <button id="blenderbutton" className={`${props.grey}`}>
          <span
            className="material-icons"
            id="blender-wiggle"
            style={{ fontSize: "48pt" }}
          >
            {props.icon}
          </span>
          <span>{props.title}</span>
        </button>
      </Link>
    );} else if (props.icon === "brightness_4") {
    return (
      <button
        className={props.darkModeOn ? "lightgrey" : "grey"}
        onClick={() => props.setDarkModeOn(!props.darkModeOn)}
      >
        <span>{props.title}</span>
        <span className="material-icons">{props.icon}</span>
      </button>
    );
  } else if (props.icon === "autorenew") {
    return (
      <button className={`${props.color}`}
      onClick={() => props.setgroenteNaam(props.willeKeurigeGroente())}
      >
        <span>{props.title}</span>
        <span className="material-icons">{props.icon}</span>
      </button>
    );
  } else if (props.saveAutoGenVeggie) {
    return (
      <button
        className="blue"
        onClick={() => props.saveAutoGenVeggie()}
      >
        <span>{props.title}</span>
        <span className="material-icons">{props.icon}</span>
      </button>
    );
  } else if (props.saveZelfGenVeggie) {
    return (
      <button
        className="blue"
        onClick={() => props.saveZelfGenVeggie()}
      >
        <span>{props.title}</span>
        <span className="material-icons">{props.icon}</span>
      </button>
    );
  } else if (props.title === "Teel jouw groente!") {
    return (
      <button className={`${props.color}`} onClick={() => props.transfer()}>
        <span>{props.title}</span>
        <span className="material-icons">{props.icon}</span>
      </button>
    );
  } else if (props.title === "Wis tekening") {
    return (
      <button className={`${props.color}`} onClick={() => props.clear()}>
        <span>{props.title}</span>
        <span className="material-icons">{props.icon}</span>
      </button>
    );
  } else if (props.icon !== "checkbox") {
    return (
      <button className={`${props.color}`}>
        <span>{props.title}</span>
        <span className="material-icons">{props.icon}</span>
      </button>
    );
  } else {
    return (
      <>
        {checked ? (
          <button
            onClick={() => {
              setChecked(!checked);
              props.setGroenteGeselecteerd(props.groenteGeselecteerd - 1);
            }}
            className="red"
          >
            <span>Verwijder uit smoothie</span>
            <span className="material-icons">close</span>
          </button>
        ) : (
          <button
            onClick={() => {
              setChecked(!checked);
              props.setGroenteGeselecteerd(props.groenteGeselecteerd + 1);
            }}
            className="green"
          >
            <span>Voeg toe aan smoothie</span>
            <span className="material-icons">check</span>
          </button>
        )}
      </>
    );
  }
}



// Smoothiesaver! KNOP
//} else if (props.saveSmoothie) {
  //return (
  //  <button
  //    className="blue"
  //    onClick={() => props.saveSmoothie()}
  //  >
  //    <span>{props.title}</span>
  //    <span className="material-icons">{props.icon}</span>
  //  </button>
  //);
  //