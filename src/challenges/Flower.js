import React from "react";
import "./Flower.css";

export default function Flower() {

// 16 lístků, value pro hodnotu R barvy v rgba formátu
// z indexu vypočítat úhel, tj. 360/16 = 22.5deg
let leaves = [1, 3, 5, 7, 9, 11, 9, 7, 5, 7, 9, 11, 9, 7, 5, 3];

// 

    return (
        <div className="Flower frame">
            <div className="pollen"></div>
            <div className="leaves-container">
                {leaves.map((value, index) => {return (<div className="leaf" key={value}
                style={{transform: `translate(-50%, -50%) rotate(${index * 22.5}deg)`, backgroundColor: `rgba(${value*2}0, 200,200, .7`}}></div>)})}
            </div>
        </div>
    )
}