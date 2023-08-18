import React from "react";
import Contador from "./contador.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="container">
			<Contador unidad={props.unidad} decimal={props.decimal} centena={props.centena} miles={props.miles} millon={props.millon} ultimo={props.ultimo}/> 

		</div>
	);
};

export default Home;
