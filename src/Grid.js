import "./Grid.css";
import Loader from "./challenges/Loader";
import Circles from "./challenges/Circles";
import Blob from "./challenges/Blob";
import Cube from "./challenges/Cube";
import Cursor from "./challenges/Cursor";
import Egg from "./challenges/Egg";
import Counter from "./challenges/Counter";
import DotWave from "./challenges/DotWave";
import RangeSlider from "./challenges/RangeSlider";
import Wave from "./challenges/Wave";
import Thermostat from "./challenges/Thermostat";
import Flower from "./challenges/Flower";


export default function Grid() {

    


    return (
        <div className="Grid">
            <Loader />
            <Circles />
            <Blob />
            <Cube />
            <Flower />
            <DotWave />
            <RangeSlider />
            <Wave />
            <Cursor />
            <Egg />
            <Counter />
            <Thermostat />
        </div>
    )
}