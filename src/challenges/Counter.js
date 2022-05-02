import "./Counter.css";

export default function Counter() {

let counterSpanArray = ["thousands", "hundreds", "tens", "ones"];
let counterNumberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


    return (
        <div className="Counter frame">
            <input type="checkbox" id="counter-input"></input>
            <label for="counter-input" className="play"></label>
            <label for="counter-input" className="stop"></label>
            <div className="numbers-container">
                {counterSpanArray.map((span) => {return (
                    <span className="numbers" data-key={span}>
                        {counterNumberArray.map((number, index) => {
                            return (<div className="zeroToNine" key={index}>{number}</div>)
                        })}
                    </span>)
                })}
              
                
            </div>
        
        </div>
    )
}