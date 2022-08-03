import "./Wave.css";

export default function Wave() {

    return (
        <div className="Wave frame">
            <div className="sky"></div>
            <div className="waves">
                <div className="wave-back"></div>
                <div className="wave-middle"></div>
                <div className="wave-front"></div>
            </div>
        </div>
    )
}