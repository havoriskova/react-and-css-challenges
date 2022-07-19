import "./DotWave.css";


export default function DotWave() {

    let circles = [];
    let dots = [];

    return (
        <div className="DotWave frame">
          
          {circles.map((value, index) => {return <div className="circles" key={index} data-key={value}>
                  {dots.map((value, index) => {return <span key={index} data-key={value}></span>})}
          </div>})}
           {/* map Circle, a v něm map Dots vč. počtu Dots skrz i ?? 
           + data-delay přes i ?? v CSS pak přes attr() nebo --var/setProperty
           + zároveň ale musíš push do array (z + 1, z + 2,..), kde z = array.pop()  */} 

        </div>
    )
}