import React from "react";
import Keg from "./Keg";

const mainKegList = [
	{
			name: "Demon Beer",
			brand: "Beers R Us",
			price: "188.99",
			alcoholContent: "8"
	},
	{
		name: "Hoppy Beer",
		brand: "Cold Rocky Mountain Beer Group",
		price: "200.99",
		alcoholContent: "8.3"
	},
]

function KegList(){
	return(
		<React.Fragment>
			<hr/>
			{mainKegList.map((keg, index) =>
				<Keg name={keg.name}
				brand={keg.brand}
				price={keg.price}
				alcoholContent={keg.alcoholContent}
				key={index}/>
				)}
		</React.Fragment>
	);
}

export default KegList;