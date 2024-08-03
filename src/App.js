import "./App.css";
import AnimalCount from "./AnimalCount";
import { useState } from "react";

function App() {
    // -> Required.
    const AnimalsList = ["bird", "cat", "cow", "dog", "gator", "horse"];
    function getRandomAnimal() {
        return AnimalsList[Math.floor(Math.random() * AnimalsList.length)];
    }

    // -> State Handler.
    const [Random, setAnimal] = useState([]);

    // -> Event Handler.
    const handleClick = () => {
        setAnimal([...Random, getRandomAnimal()]);
    };

    // -> Making a map.
    const AnimalDisplay = Random.map((animal, index) => {
        return <AnimalCount type={animal} key={index} />;
    });

    return (
        <div className="main_wrapper">
            <h1 className="header">Event and State Learning Example</h1>
            <button className="button" onClick={handleClick}>
                Add Animal
            </button>
            <div className="main">{AnimalDisplay}</div>
        </div>
    );
}

export default App;
