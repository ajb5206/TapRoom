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
			selectedKeg: null,
			id: 0,
			newPintsRemaining: 0
		};
	}


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
		let selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
		let newPintsRemaining = selectedKeg.pintsRemaining;
		if (newPintsRemaining === 0)
		{
			return;
		}
		else{
		newPintsRemaining= selectedKeg.pintsRemaining --;
		}
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