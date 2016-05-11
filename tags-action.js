function addField() {
	var fieldsParent = document.getElementById('text-fields');
	var newDiv = document.createElement("div");
	var newField = document.createElement("input");
	var minusButton = document.createElement("button");
			
	newField.className = "tag";
	newField.type = "text";
	minusButton.appendChild(document.createTextNode("-"));
	minusButton.className = "remove-field";
			
	newDiv.appendChild(newField);
	newDiv.appendChild(minusButton);
	fieldsParent.appendChild(newDiv);
}