import "./Grid.css";
import Loader from "./challenges/Loader";
import Circles from "./challenges/Circles";
import Blob from "./challenges/Blob";
import Cube from "./challenges/Cube";
import Cursor from "./challenges/Cursor";
import Egg from "./challenges/Egg";

export default function Grid() {

    


    return (
        <div className="Grid">
            <Loader />
            <Circles />
            <Blob />
            <Cube />
            <Cursor />
            <Egg />
        </div>
    )
}