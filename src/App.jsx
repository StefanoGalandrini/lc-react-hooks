import { useState } from "react";
import Accordion from "./components/Accordion";

function App() {
  // const counterState = useState(0);
  // const counter = counterState[0];
  // const setCounter = counterState[1];
  const [counter, setCounter] = useState(2);
  const accordionStructure = [
    {
      title: "Titolo 1",
      content: "Contenuto 1 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis porro harum, ullam dolores quis unde rerum? Labore esse illo sapiente libero provident. Quis facere aspernatur rerum, debitis quam officiis? Odio."
    }, {
      title: "Titolo 2",
      content: "Contenuto 2 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis porro harum, ullam dolores quis unde rerum? Labore esse illo sapiente libero provident. Quis facere aspernatur rerum, debitis quam officiis? Odio."
    }, {
      title: "Titolo 3",
      content: "Contenuto 3 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis porro harum, ullam dolores quis unde rerum? Labore esse illo sapiente libero provident. Quis facere aspernatur rerum, debitis quam officiis? Odio."
    }, {
      title: "Titolo 4",
      content: "Contenuto 4 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis porro harum, ullam dolores quis unde rerum? Labore esse illo sapiente libero provident. Quis facere aspernatur rerum, debitis quam officiis? Odio."
    }
  ];

  console.log("valore counter", counter);

  /* const increment = () => {
    const nuovoValore = counter + 1;

    setCounter(nuovoValore);

    console.log("valore dopo increment", nuovoValore)
  }; */

  const increment = () => {
    // counter ora che valore ha ? 9

    // setCounter(10);

    setCounter(currentValue => currentValue + 1);
    // setCounter((currentValue) => currentValue + 1);
  };

  const decrement = () => {

    setCounter((currentValue) => {
      const nuovoValore = currentValue - 1;
      console.log("valore dopo decrement", nuovoValore);

      return nuovoValore;
    });

  };

  return (
    <div className="container mx-auto text-center py-8">
      <h1 className="text-2xl mb-4">Valore contatore: {counter}</h1>
      <div className="flex gap-4 justify-center">
        <button className="bg-blue-400 text-xl px-4 py-3" onClick={increment}>+ Incrementa</button>
        <button className="bg-red-400 text-xl px-4 py-3" onClick={decrement}>- Decrementa</button>
      </div>

      <Accordion structure={accordionStructure} index={counter}></Accordion>
    </div>
  );
}

export default App;
