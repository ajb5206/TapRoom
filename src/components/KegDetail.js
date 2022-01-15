import React from "react";
import PropTypes from "prop-types";


function KegDetail(props){
	const { keg, onClickingPour } = props;
	return(
		<React.Fragment>
			<h3>Keg Details</h3>
			<h4>{keg.name} - {keg.brand}</h4>
			<h3>{keg.pintsRemaining}</h3>
			<h2>${keg.price}</h2>
			<h2>{keg.alcoholContent}%</h2>
			<button onClick={() => onClickingPour(keg.id)}>Pour a pint</button>
			<hr />
		</React.Fragment>
	);
}

KegDetail.propTypes = {
	keg: PropTypes.object,
	onClickingPour: PropTypes.func,
}

export default KegDetail;