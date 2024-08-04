import "./AnimalCount.css";
import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

function AnimalCount({ type }) {
    // -> Required.
    const svgMap = {
        bird,
        cat,
        cow,
        dog,
        gator,
        horse,
    };

    // -> State Handler.
    const [count, setCount] = useState(0);

    // -> Event handler.
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div onClick={handleClick} className="animal_card">
            <img
                className="animal_image"
                src={svgMap[type]}
                alt="animal"
                title={type}
            />
            <img
                className="heart"
                src={heart}
                alt="heart"
                title="heart"
                style={{ width: 15 + count * 10 + "px" }}
            />
        </div>
    );
}

export default AnimalCount;
