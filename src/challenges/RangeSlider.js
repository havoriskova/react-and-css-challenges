import {React, useState} from "react";
import "./RangeSlider.css";

export default function RangeSlider() {

    let [redValue, setRed] = useState(200);
    let [greenValue, setGreen] = useState(200);
    let [blueValue, setBlue] = useState(200);

    return (
         <div className="RangeSlider frame" style={{backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`}}>
            <div className="container">
                <label htmlFor="red">{redValue}</label>
                <input id="red" type="range" min="0" max="255" value={redValue} onInput={(e) => {setRed(e.target.value)}}></input>

                <label htmlFor="green">{greenValue}</label>
                <input id="green" type="range" min="0" max="255" value={greenValue} onInput={(e) => {setGreen(e.target.value)}}></input>

                <label htmlFor="blue">{blueValue}</label>
                <input id="blue" type="range" min="0" max="255" value={blueValue} onInput={(e) => {setBlue(e.target.value)}}></input>
            </div>
         </div>
    )
}