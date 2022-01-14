import React from "react";
import PropTypes from "prop-types";

function Keg(props){
	return(
		<React.Fragment>
		<p>Beer Name: {props.name}</p>
		<p>Brand: {props.brand}</p>
		<p>Price: ${props.price}</p>
		<p>alcoholContent: {props.alcoholContent}%</p>
		</React.Fragment>
	);
}

Keg.propTypes = {
	name: PropTypes.string,
	brand: PropTypes.string,
	price: PropTypes.number,
	alcoholContent: PropTypes.number
}

export default Keg;