import "./DotWave.css";


export default function DotWave() {

   /* 360: 12 TEČEK = 30 STUPŇŮ
       360:  15 teček = 24 st - málo
       360: 18 = 20st
       360: 20 TEČEK = 18 STUPŇŮ - málo
       360: 24 teček = 15 st
       360: 30 teček = 12 stupňů
       360: 40 TEČEK = 9 STUPŇŮ
       360: 50 teček = 7.2 stupňů
       360: 60 TEČEK = 6 STUPŇŮ
   */

    let dotWaveCircles = [
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], 
    [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], 
    [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
    [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2, 7.2],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    ]; // po určitým počtu lines změníš výšku a počet  lines v nadřazený smyčce ?


    return (
        <div className="DotWave frame">
        
           

          {dotWaveCircles[0].map((value, index) => {return <div className="circles" key={index} data-key={value} style={{transform:`rotate(${value*3}deg)`, height: "0rem"}}>
                 <span className="line"><span className="dot" style={{animationDelay:"0"}}></span></span>
          </div>})}

         {dotWaveCircles[1].map((value, index) => {return <div className="circles" key={index} data-key={value} style={{transform:`rotate(${value*index}deg)`, height:"2rem"}}>
                <span className="line"><span className="dot" style={{animationDelay:".5s"}}></span></span>
          </div>})}

         {dotWaveCircles[2].map((value, index) => {return <div className="circles" key={index} data-key={value} style={{transform:`rotate(${value*index}deg)`, height:"4rem"}}>
                <span className="line"><span className="dot" style={{animationDelay:"1s"}}></span></span>
          </div>})}

          {dotWaveCircles[3].map((value, index) => {return <div className="circles" key={index} data-key={value} style={{transform:`rotate(${value*index}deg)`, height:"6rem"}}>
                <span className="line"><span className="dot" style={{animationDelay:"1.5s"}}></span></span>
          </div>})}

            {dotWaveCircles[4].map((value, index) => {return <div className="circles" key={index} data-key={value} style={{transform:`rotate(${value*index}deg)`, height:"8rem"}}>
                <span className="line"><span className="dot" style={{animationDelay:"2s"}}></span></span>
          </div>})}

            {dotWaveCircles[5].map((value, index) => {return <div className="circles" key={index} data-key={value} style={{transform:`rotate(${value*index}deg)`, height:"10rem"}}>
                <span className="line"><span className="dot" style={{animationDelay:"2.5s"}}></span></span>
          </div>})}

           {dotWaveCircles[6].map((value, index) => {return <div className="circles" key={index} data-key={value} style={{transform:`rotate(${value*index}deg)`, height:"12rem"}}>
                <span className="line"><span className="dot" style={{animationDelay:"3s"}}></span></span>
          </div>})}

          
        </div>
    )
}