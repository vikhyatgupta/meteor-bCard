Template.newForm.events({
	'submit form': fuction(event, template){
		event.preventDefault();
		let firstName = template.find('#firstName').value;
		let lastName = template.find('#lastName').value;
		let quote = template.find('#quote').value;
		let gender = template.find('#gender').value;
		let githubLink = template.find('#githubLink').value;
		console.log(firstName);
	}
});




