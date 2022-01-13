import React from "react";

function Keg(props){
	return(
		<React.Fragment>
		<p>Beer Name: {props.name}</p>
		<p>Brand: {props.brand}</p>
		<p>Price: {props.price}</p>
		<p>alcoholContent {props.alcoholContent}</p>
		</React.Fragment>
	);
}

export default Keg;