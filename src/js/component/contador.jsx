import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Contador = (props) => {
	return (
		<div className="">
			<h1>Contador</h1>
			<div className="container">
				<div className="row fs-1">
					<div className="col-sm">
						{props.ultimo}
					</div>
					<div className="col-sm">
						{props.millon}
					</div>
					<div className="col-sm">
						{props.miles}
					</div>
					<div className="col-sm">
						{props.centena}
					</div>
					<div className="col-sm">
						{props.decimal}
					</div>
					<div className="col-sm">
						{props.unidad}
					</div>
				</div>
			</div>
			<p></p>

		</div>
	);
};

export default Contador;