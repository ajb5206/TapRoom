import React from "react";
import PropTypes from "prop-types";

function Keg(props){
	return(
		<React.Fragment>
		<div onClick = {() => props.whenKegClicked(props.id)}>
		<p>Beer Name: {props.name}</p>
		<p>Brand: {props.brand}</p>
		<p>Price: ${props.price}</p>
		<p>alcoholContent: {props.alcoholContent}%</p>
		<p>Pints remaining: {props.pintsRemaining}</p>
		
		<hr />
		</div>
		</React.Fragment>
	);
}

Keg.propTypes = {
	name: PropTypes.string,
	brand: PropTypes.string,
	price: PropTypes.number,
	alcoholContent: PropTypes.number,
	pintsRemaining: PropTypes.number,
	id: PropTypes.string,
	whenKegClicked: PropTypes.func
}

export default Keg;