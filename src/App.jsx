import "./App.css";
import { useState } from "react";
import LightStatus from "./components/LightStatus";

function App() {
  // initialize state for the component
  // lightOn is an array of objects, each with id and isOn property
  const [lightOn, setLightOn] = useState([
    { id: 1, isOn: false },
    { id: 2, isOn: true },
    { id: 3, isOn: false },
  ]);

  // function to add a new light
  const addLight = () => {
    const newLight = {
      id: lightOn.length + 1, // generate a new ID ( array length + 1 is the new id number )
      isOn: false, // initial state for the new light
    };
    setLightOn((prevLights) => [...prevLights, newLight]); // update state by adding new light to existing object-array
  };

  // function to remove a light
  const removeLight = (id) => {
    // takes id as parameter, the id that is used in the button
    if (lightOn.length > 1) {
      // at least one light should stay
      setLightOn((prevLights) => prevLights.filter((light) => light.id !== id)); // this function updates the state of the lightOn array
      // sets the state of LightOn , receives current state of light (prevState)
      // setLightOn((prevLights) =>  ... )   <----- this passes the current state of that function
      // filter iterate over each light in prevLights,
      // then checks if current light id is not equal to id of the light we want to remove
      // light.id !== id  if this is true, light is included in new array, if false not
      // filter will then contain all lights except one with the id that matches the id passed to the function
    }
  };

  // toggles the isOn state of a light(component) by id
  const handleLight = (id) => {
    // declares a constant function handlelight that takes id as parameter
    setLightOn(
      // sets lightOn :3
      (
        prevLights // updates lightOn state, receives previous State THIS is our current state
      ) =>
        prevLights.map(
          // creates new array by mapping over each light
          (light) => (light.id === id ? { ...light, isOn: !light.isOn } : light) // if current light id matches id passed to function
        ) // creates new object with isOn toggled (reversed/switched)  otherwise it stays the same
    );
  };

  // counts number of lightsOn

  const countLights = lightOn.filter((light) => light.isOn).length;
  // filter creates new array that contains all elements from original array ( light on )
  // callback function checks for each light-object (from the lightsON array) if true
  // if thats the case, it gets included in the array, and the length gets counted

  return (
    <div className="light-container">
      <h2>
        {countLights} light{countLights !== 1 ? "s" : ""}{" "}
        {countLights !== 1 ? "are" : "is"} ON
      </h2>
      {lightOn.map(
        (
          light // iterates over each light in the lightOn array and
        ) => (
          <LightStatus // renders LightStatus component for each
            key={light.id} // provide a unique key for each light
            isOn={light.isOn} // usse isOn from the light object
            handleLight={() => handleLight(light.id)} // pass the toggle function
          />
        )
      )}
      <button onClick={addLight}>Add Light</button>
      <button onClick={() => removeLight(lightOn.length)}>Remove Light</button>
    </div>
  );
}

export default App;
