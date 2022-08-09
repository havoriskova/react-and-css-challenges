import "./Thermostat.css";

export default function Thermostat() {



    return (
        <div className="Thermostat frame">
            <div className="thermostat-base">
                <div className="control">
                    <div className="indicator"></div>
                    <div className="temp-up">24°</div>
                    <div className="temp-main-one">19<span>°</span></div>
                    <div className="temp-main-two">20<span>°</span></div>
                    <div className="room">Bedroom</div>
                </div>
            </div>
        </div>
    )
}