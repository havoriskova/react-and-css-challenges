import "./Counter.css";

export default function Counter() {

let counterSpanArray = [0, 1, 2, 3];
let counterNumberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


    return (
        <div className="Counter frame">
            <input type="checkbox" id="counter-input"></input>
            <label for="counter-input" className="play"></label>
            <label for="counter-input" className="stop"></label>
            <div className="numbers-container">
                {counterSpanArray.map((span, index) => {return (
                    <span className="numbers" key={index}>
                        {counterNumberArray.map((number, index) => {
                            return (<span className="zeroToNine" key={index}>{number}</span>)
                        })}
                    </span>)
                })}
              
                
            </div>
        
        </div>
    )
}