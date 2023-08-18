//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let unidad = 0
let decimal= 0
let centena= 0
let miles= 0
let millon= 0
let ultimo= 0

setInterval(() => {
    unidad++
    if(unidad>9){
        decimal++
        unidad= 0
    }
    if(decimal>9){
        centena++
        decimal= 0
    }
    if(centena>9){
        miles++
        centena= 0
    }
    if(miles>9){
        millon++
        miles= 0
    }
    if(millon>9){
        ultimo++
        millon= 0
    }
    ReactDOM.render(<Home unidad={unidad} decimal={decimal} centena={centena} miles={miles} millon={millon} ultimo={ultimo} />, document.querySelector("#app"));
}, 1000)

