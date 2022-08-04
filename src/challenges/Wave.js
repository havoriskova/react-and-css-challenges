import { useEffect } from "react";
import "./Wave.css";

export default function Wave() {

    useEffect(() => {
        let star = document.createElement("div");
        star.classList.add("star");
        let sky = document.getElementById("wave-sky");
        sky.append(star);
    }, []);


    return (
        <div className="Wave frame">
            <div className="sky" id="wave-sky">
                <div className="moon"></div>
            </div>
            <div className="waves">
                <div className="wave-back"></div>
                <div className="wave-middle"></div>
                <div className="wave-front"></div>
            </div>
        </div>
    )
}