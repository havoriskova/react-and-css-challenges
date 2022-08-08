import { useEffect } from "react";
import "./Wave.css";

export default function Wave() {

     useEffect(() => {
        for (let i = 0; i < 50; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.left= `${Math.floor(Math.random()*100)}%`;
        star.style.top = `${Math.floor(Math.random()*80)}%`;
        star.style.animationDelay= `${Math.floor(Math.random()*10)}s`;

        let sky = document.getElementById("wave-sky");
        sky.append(star);
        }
    }, []);



    return (
        <div className="Wave frame">
            <div className="sky" id="wave-sky">
                <div className="moon">
                    <svg width="80" height="80">
                         <defs>
                          <clipPath id="Wave-moon-path">
                            <path d="M70,10 
                            Q 40 40, 70 70 
                            A 35 35 0 1 1, 70, 10 
                            Z" />
                          </clipPath>
                        </defs>
                     </svg>
                </div>
            </div>
            <div className="waves">
                <div className="wave-back"></div>
                <div className="wave-middle"></div>
                <div className="wave-front"></div>
            </div>
        </div>
    )
}