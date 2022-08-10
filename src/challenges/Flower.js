import React from "react";
import "./Flower.css";

export default function Flower() {

let leaves = [1, 2, 3, 4, 5, 6, 7, 8];

// useEffect(()=> {
//     for (let i = 0; i < 16; i++) {
//         leaves.push(i);
//     }
// }, []); - tady se tomu nelíbí, že je prázdná dependency array :/ 

    return (
        <div className="Flower frame">
            <div className="pollen"></div>
            <div className="leaves-container">
                {leaves.map(leaf => {return (<div className="leaf" key={leaf}></div>)})}
            </div>
        </div>
    )
}