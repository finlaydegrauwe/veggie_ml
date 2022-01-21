/* eslint-disable */
import React, { useState, useEffect } from "react";
import Button from "../components/button";
import Groente from "../components/verlorengroente";
import DrawingCanvas from "../components/DrawingCanvas";

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const storage = getStorage();

export default function Home() {
  const [groenteGeselecteerd, setGroenteGeselecteerd] = useState(0);
  const [darkModeOn, setDarkModeOn] = useState(false);

  const [data, setData] = useState([
    {
      titel: "preipeer",
      afbeelding:
        "https://www.healthylifestylesliving.com/wp-content/uploads/2015/12/placeholder-256x256.gif",
    },
    {
      titel: "knolpeer",
      afbeelding:
        "https://www.healthylifestylesliving.com/wp-content/uploads/2015/12/placeholder-256x256.gif",
    },
    {
      titel: "besbei",
      afbeelding:
        "https://www.healthylifestylesliving.com/wp-content/uploads/2015/12/placeholder-256x256.gif",
    },
    {
      titel: "aardbol",
      afbeelding:
        "https://www.healthylifestylesliving.com/wp-content/uploads/2015/12/placeholder-256x256.gif",
    },
  ]);
  const [image, setImage] = useState("");

  const getImages = () => {
    const listRef = ref(storage, "images");

    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          console.log(itemRef._location.path_);

          getDownloadURL(ref(storage, itemRef._location.path_))
            .then((url) => {
              console.log(itemRef._location.path_);
              console.log(url);
            })
            .catch((error) => {
              // Handle any errors
            });
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className={darkModeOn ? "darkmode" : "wrapper"}>
      <div className="col-1"></div>
      <div className="col-2 middle-stretch">
        <img
          src="https://cdn.glitch.global/40ab18b6-46f9-4c9c-9883-e73f9b5ed006/Veggie_logotype_white_70pt.png?v=1642672629128"
          alt="Veggie title"
          width="50%"
        />
      </div>
      <div className="col-5">
        <Button
          title="darkmode"
          icon="brightness_4"
          darkModeOn={darkModeOn}
          setDarkModeOn={setDarkModeOn}
        />
      </div>

      <div className="col-1"></div>
      <div className="col-2  middle-stretch">
        {" "}
        <div className={darkModeOn ? "inleiding_dark" : "inleiding"}>
          {" "}
          <p>Help ons de groentenbak van de supermarkt te diversifiëren!</p>
          <p>En maak vervolgens je eigen veggie smoothie.</p>
        </div>
      </div>
      <div className="col-5"></div>

      <DrawingCanvas />

      <div className="col-1"></div>
      <div className="col-2 middle-stretch">
        <p>
          <strong>Jouw verloren groenten</strong>
        </p>
        <div className="groentencarrousel">
          <ul>
            {data.map((item) => (
              <Groente
                key={item.titel}
                titel={item.titel}
                afbeelding={item.afbeelding}
                groenteGeselecteerd={groenteGeselecteerd}
                setGroenteGeselecteerd={setGroenteGeselecteerd}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="col-5">
        {groenteGeselecteerd !== 0 && (
          <Button title="Blend it up" icon="blender" color="green" />
        )}
      </div>
    </div>
  );
}
