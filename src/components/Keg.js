import React from "react";

function Keg(props){
	return(
		<React.Fragment>
		<p>{props.name}</p>
		<p>{props.brand}</p>
		<p>{props.price}</p>
		<p>{props.alcoholContent}</p>
		</React.Fragment>
	);
}

export default Keg;