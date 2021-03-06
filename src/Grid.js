import "./Grid.css";
import Loader from "./challenges/Loader";
import Circles from "./challenges/Circles";
import Blob from "./challenges/Blob";
import Cube from "./challenges/Cube";
import Cursor from "./challenges/Cursor";
import Egg from "./challenges/Egg";
import Counter from "./challenges/Counter";
import DotWave from "./challenges/DotWave";

export default function Grid() {

    


    return (
        <div className="Grid">
            <Loader />
            <Circles />
            <Blob />
            <Cube />
            <Cursor />
            <Egg />
            <Counter />
            <DotWave />
        </div>
    )
}