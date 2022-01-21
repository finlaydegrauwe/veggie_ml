import React, {useState} from "react";
import Button from "../components/button"
import Groente from "../components/verlorengroente"
import DrawingCanvas from "../components/DrawingCanvas"

// Our language strings for the header
// const strings = [
//   "wortel",
//   "knol",
//   "bei",
//   "bes",
//   "peer",
//   "spaghetti",
//   "raap"
// ];

const groenten = [
  {titel: "preipeer", afbeelding:"https://www.healthylifestylesliving.com/wp-content/uploads/2015/12/placeholder-256x256.gif"},
  {titel: "knolpeer", afbeelding:"https://www.healthylifestylesliving.com/wp-content/uploads/2015/12/placeholder-256x256.gif"},
  {titel: "besbei", afbeelding:"https://www.healthylifestylesliving.com/wp-content/uploads/2015/12/placeholder-256x256.gif"},
  {titel: "aardbol", afbeelding:"https://www.healthylifestylesliving.com/wp-content/uploads/2015/12/placeholder-256x256.gif"}
]

// Utility function to choose a random value from the language array
// function randomLanguage() {
//   return strings[Math.floor(Math.random() * strings.length)];
// }

export default function Home() {
  const [groenteGeselecteerd,setGroenteGeselecteerd] = useState(0);
  const [darkModeOn,setDarkModeOn] = useState(false);
  
  return (
    <div className={darkModeOn ? 'darkmode' : 'wrapper'}>
        <div className="col-1"></div>
        <div className="col-2 middle-stretch"><img src="https://cdn.glitch.global/40ab18b6-46f9-4c9c-9883-e73f9b5ed006/Veggie_logotype_white_70pt.png?v=1642672629128" alt="Veggie title" width="50%"/></div>
        <div className="col-5"><Button title="darkmode" icon="brightness_4" darkModeOn={darkModeOn} setDarkModeOn={setDarkModeOn}/></div>
      
        <div className="col-1"></div>
        <div className="col-2  middle-stretch"> <div className={darkModeOn ? 'inleiding_dark' : 'inleiding'}> <p>Help ons de groentenbak van de supermarkt te diversifiëren!</p><p>En maak vervolgens je eigen veggie smoothie.</p></div></div>
        <div className="col-5"></div>
      
        <DrawingCanvas />
      
        <div className="col-1"></div>
        <div className="col-2 middle-stretch">
          <p><strong>Jouw verloren groenten</strong></p>
          <div className="groentencarrousel">
            <ul>
              {groenten.map(item =>
                <Groente key={item.titel} titel={item.titel} afbeelding={item.afbeelding} groenteGeselecteerd={groenteGeselecteerd} setGroenteGeselecteerd={setGroenteGeselecteerd}/>
              )}
            </ul>
          </div>
        </div>
        <div className="col-5">{groenteGeselecteerd !== 0 &&(<Button title="Blend it up" icon="blender" color="green" />)}</div>
    </div>)
}

/*
export default function Home() {
  const [hello, setHello] = React.useState(strings[0]);
   The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
     - We can attach this to events on elements in the page and apply the resulting style
  
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  // When the user clicks we change the header language
  const handleChangeHello = () => {
    
    // Choose a new Hello from our languages
    const newHello = randomLanguage();
    
    // Call the function to set the state string in our component
    setHello(newHello);
  };
  return (
    <>
      <h1 className="title">{hello}!</h1>
      { When the user hovers over the image we apply the wiggle style to it}
      <animated.div onMouseEnter={trigger} style={style}>
        <img
          src="https://cdn.glitch.com/2f80c958-3bc4-4f47-8e97-6a5c8684ac2c%2Fillustration.svg?v=1618196579405"
          className="illustration"
          onClick={handleChangeHello}
          alt="Illustration click to change language"
        />
      </animated.div>
      <div className="navigation">
        { When the user hovers over this text, we apply the wiggle function to the image style}
        <animated.div onMouseEnter={trigger}>
          <a className="btn--click-me" onClick={handleChangeHello}>
            Psst, click me
          </a>
        </animated.div>
      </div>
      <div className="instructions">
        <h2>Using this project</h2>
        <p>
          This is the Glitch <strong>Hello React</strong> project. You can use
          it to build your own app. See more info in the{" "}
          <Link href="/about">About</Link> page, and check out README.md in the
          editor for additional detail plus next steps you can take!
        </p>
      </div>
    </>
  );
}
*/