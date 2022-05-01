import { useRef } from "react";
import "./Cursor.css";

export default function Cursor() {


    const cursorFalconRef = useRef();

// const initialCallback = useCallback(() => 

// {for (let i= 1; i <= 100; i++) {
//     let gridChild = document.createElement("div");
//     gridChild.classList.add("cursor-grid-child");
//     gridChild.innerText = ""; // předtím jsem měla "i" jako kontent pro kontrolu
//     gridChild.setAttribute("data-number", i);
//     gridRef.current.appendChild(gridChild);
//     gridChild.addEventListener("mouseenter", () => 
//             {cursorRef.current.style.top = osaY(i) + "px";
//             cursorRef.current.style.left = osaX(i) + "px"; }
//             );
// }    }, []
//     );

let cursorArray = [];
for (let i = 0; i <= 99; i++) {
    cursorArray.push(i);
} 

function handleMouseEnter(e) {
    console.dir("top: " + e.target.offsetTop); 
    console.dir("left: " + e.target.offsetLeft);
    cursorFalconRef.current.style.top = e.target.offsetTop + "px"; 
    cursorFalconRef.current.style.left = e.target.offsetLeft + "px";
}

    return (
        <div className="Cursor frame">

            <div className="cursor-grid-container">
                { 
                cursorArray.map(function(value, index) {
                    return <div className="cursor-grid-child" key={index} onMouseEnter={handleMouseEnter}>{value}</div>
                 } )  
                }

            </div>
            <div className="cursor" ref={cursorFalconRef}>
            <svg height="45px" viewBox="0 0 512 512" width="45px"><path d="M199.101,83.266l45.495-75.989c-5.344-2.306-11.017-3.966-17.201-3.966c-24.944,0-45.166,20.222-45.166,45.16  C182.229,62.604,188.922,75,199.101,83.266"/><path d="M507.79,307.924l-12.108-8.084c-2.347-39.323-16.391-77.667-41.159-109.393l-31.668,4.071l2.194-3.279  c8.26-12.367,4.893-29.233-7.462-37.499l-17.658-11.786c-12.355-8.254-29.228-4.893-37.487,7.474l-2.487,3.713L345.898,69.04  l-85.47-53.122l-45.835,76.558l22.48,12.554L73.927,84.357L50.32,119.691l98.41,65.734c-4.435,5.321-8.711,10.824-12.642,16.708  c-3.925,5.89-7.374,11.944-10.595,18.075l-98.399-65.734L3.488,189.819l127.461,223.068l0.217-0.353  c2.558,4.271,5.391,8.401,8.277,12.52l42.544-5.468l-7.908,11.815c-8.254,12.366-4.887,29.238,7.474,37.498l17.652,11.792  c12.361,8.248,29.227,4.904,37.481-7.462l6.6-9.868l4.84,37.663c37.053,10.067,75.877,8.729,111.651-2.745l14.443,9.645  c39.493-13.938,74.974-40.291,100.035-77.79C499.318,392.624,510.066,349.74,507.79,307.924 M362.652,413.826  c-2.769,4.142-8.354,5.244-12.495,2.487c-4.142-2.77-5.245-8.354-2.487-12.508c2.757-4.13,8.365-5.244,12.495-2.487  C364.307,404.088,365.422,409.685,362.652,413.826 M359.508,351.359c-13.398,20.075-35.832,32.066-59.979,32.066  c-14.279,0-28.089-4.212-39.998-12.167c-33.058-22.059-41.969-66.901-19.911-99.954c13.411-20.092,35.833-32.066,60.014-32.066  c14.256,0,28.065,4.201,39.975,12.132C372.649,273.464,381.566,318.331,359.508,351.359 M388.137,450.973  c-2.757,4.13-8.354,5.245-12.483,2.487c-4.154-2.769-5.257-8.365-2.487-12.507c2.769-4.131,8.354-5.245,12.483-2.477  C389.791,441.234,390.906,446.819,388.137,450.973 M395.153,380.223c-2.758,4.13-8.343,5.245-12.484,2.487  c-4.13-2.769-5.256-8.377-2.487-12.507c2.77-4.143,8.354-5.257,12.484-2.488C396.819,370.484,397.922,376.069,395.153,380.223   M401.266,339.791c-4.142-2.758-5.244-8.354-2.487-12.508c2.758-4.13,8.366-5.244,12.508-2.487c4.13,2.769,5.244,8.377,2.487,12.508  C411.017,341.445,405.408,342.56,401.266,339.791 M429.941,403.442c-2.757,4.142-8.342,5.244-12.495,2.476  c-4.131-2.757-5.257-8.342-2.487-12.484c2.769-4.13,8.365-5.256,12.495-2.487C431.596,393.716,432.699,399.301,429.941,403.442   M457.843,346.619c-2.758,4.153-8.366,5.257-12.496,2.487c-4.153-2.769-5.256-8.354-2.487-12.483  c2.77-4.142,8.354-5.257,12.496-2.487C459.485,336.893,460.6,342.489,457.843,346.619"/><path d="M329.589,266.371c-8.929-5.972-19.289-9.122-29.954-9.122c-18.151,0-34.977,8.999-45.02,24.041  c-16.555,24.804-9.85,58.431,14.925,74.974c8.917,5.973,19.289,9.141,29.966,9.141c18.139,0,34.964-9,45.008-24.041  C361.08,316.56,354.369,282.933,329.589,266.371"/></svg>
            </div>
            
        </div>
    )
} 