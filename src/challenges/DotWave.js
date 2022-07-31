import "./DotWave.css";


export default function DotWave() {

    let circles = [10, 20, 30, 40, 50]; // po určitým počtu lines změníš výšku a počet  lines v nadřazený smyčce ?
    let dots = [8, 12, 16, 20, 30]; // class "line", měníš transform rotate

    return (
        <div className="DotWave frame">
          <div className="circle">
             <div className="line">
                <div className="dot"></div>
             </div>

          </div>
           

          {circles.map((value, index) => {return <div className="circles" key={index} data-key={value} style={{transform:`rotate(${value*3}deg)`}}>
                  {dots.map((value, index) => {return <span key={index} data-key={value} className="line"><span className="dot"></span></span>})}
          </div>})}
           {/* map Circle, a v něm map Dots vč. počtu Dots skrz i ?? 
           
           + data-delay přes i ?? v CSS pak přes attr() nebo --var/setProperty
           + zároveň ale musíš push do array (z + 1, z + 2,..), kde z = array.pop()  */} 

          
        </div>
    )
}