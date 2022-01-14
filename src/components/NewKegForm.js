import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){
	
	function handleNewKegFormSubmission(event){
		event.preventDefault();
		props.onNewKegCreation({name: event.target.name.value, 
														brand: event.target.brand.value,
														price: event.target.price.value,
														alcoholContent: event.target.alcoholContent.value});
	}
	
	return (
		<React.Fragment>
			<form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Beer Name' />
        <input
          type='text'
          name='brand'
          placeholder='Beer Brand' />
        <input
					type='number'
          name='price'
          placeholder='Beer Price' />
				<input
          type='number'
          name='alcoholContent'
          placeholder='Alcohol Content' />
        <button type='submit'>Submit new Keg!</button>
      </form>
		</React.Fragment>
	);
}

NewKegForm.propTypes = {
	onNewTicketCreation: PropTypes.func
};

export default NewKegForm;