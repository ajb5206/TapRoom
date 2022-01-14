import React from "react";
import { v4 } from 'uuid';

function NewKegForm(){
	
	function handleNewKegFormSubmission(event){
		event.preventDefault();
		console.log(event.target.name.value);
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

export default NewKegForm;