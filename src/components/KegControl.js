import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false,
			mainKegList: [],
			selectedKeg: null
		};
	}

	// mainKegList = [
	// 	{
	// 			name: "Demon Beer",
	// 			brand: "Beers R Us",
	// 			price: "188.99",
	// 			alcoholContent: "8",
	// 			pintsRemaining: 124
	// 	},
	// 	{
	// 		name: "Hoppy Beer",
	// 		brand: "Cold Rocky Mountain Beer Group",
	// 		price: "200.99",
	// 		alcoholContent: "8.3",
	// 		pintsRemaining: 124
	// 	},
	// ]

	handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

	handlePouring = (id) => {
		let decrementedKegList = this.state.mainKegList;
		let newPintsRemaining = id.pintsRemaining;
		decrementedKegList.map(q =>{
			return(
			newPintsRemaining=q.pintsRemaining --);
		});
			this.setState({pintsRemaining: newPintsRemaining});
		}


	handleAddingNewKegToList = (newKeg) => {
		const newMainKegList = this.state.mainKegList.concat(newKeg);
		this.setState({mainKegList: newMainKegList,
									formVisibleOnPage: false});
	}

	handleChangingSelectedKeg = (id) => {
		const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
		this.setState({selectedKeg: selectedKeg});
	}

	render(){
		let currentlyVisibleState = null;
		let buttonText = null;
		if (this.state.selectedKeg != null) {
			currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg}
															onClickingPour = {this.handlePouring} />
			buttonText = "Return to Keg List"
		} 
		else if (this.state.formVisibleOnPage) {
			currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
			buttonText = "Return to Keg List"
		} else {
			currentlyVisibleState = <KegList kegList={this.state.mainKegList}
															onKegSelection={this.handleChangingSelectedKeg}/>
			buttonText = "Add Keg"
		}
		return (
			<React.Fragment>
				{currentlyVisibleState}
				<button onClick={this.handleClick}>{buttonText}</button>
			</React.Fragment>
		);
	}
}

export default KegControl;