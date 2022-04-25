import "./Cube.css";

export default function Cube() {
    return(
       <div className="Cube frame">
           <div className="center">
               <div className="cube-base">
                    <div className="side front">1</div>
                    <div className="side back">2</div>
                    <div className="side right">3</div>
                    <div className="side left">4</div>
                    <div className="side up">5</div>
                    <div className="side bottom">6</div>
                </div>
           </div>
       </div>
    )
}