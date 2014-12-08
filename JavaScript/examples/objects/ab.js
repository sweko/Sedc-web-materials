//the global array where all our persons will be stored
//the persons are here, what is shown on the table is just representation
var persons = [];

//opens the display form with an empty person -> we are in adding mode
function addPerson() {
	var currentPerson = {};
	displayPerson(currentPerson);
}

//opens the display form with an existing empty person -> we are in editing mode
function editSelectedPerson(id) {
	var currentPerson = findPersonById(id);
	displayPerson(currentPerson);
}

//given an id, finds a person with that id in our array
function findPersonById(id) {
	//loop every person
	for (var index = 0; index < persons.length; index++) {
		//if we have found our guy, exit immediately
		if (persons[index].id === id)
			return persons[index];
	}
	//we haven't found anything if we're here, return an empty person
	return {};
}

//displays a given person in the edit form
function displayPerson(person) {
	//make the edit form visible
	document.getElementById("personContainer").className = "visible";
	//does the person parameter have an id property?
	//notice the use of the !! trick
	if (!!person.id) {
		//if the person does have an id property, assume it's a valid existing person
		//fill the elements accordingly
		document.getElementById("txtId").value = person.id;
		document.getElementById("txtFirstName").value = person.firstName;
		document.getElementById("txtLastName").value = person.lastName;
		document.getElementById("txtAge").value = person.age;
		document.getElementById("txtPhone").value = person.phone;
	} else {
		//if the person does not have an id property, assume it's a new person
		//fill the elements accordingly, and set it's ID to 0
		document.getElementById("txtId").value = 0;
		document.getElementById("txtFirstName").value = "";
		document.getElementById("txtLastName").value = "";
		document.getElementById("txtAge").value = "";
		document.getElementById("txtPhone").value = "";
	}
}

//hides the edit form (and clears the data)
function hidePersonData() {
	document.getElementById("personContainer").className = "hidden";
	document.getElementById("txtId").value = 0;
	document.getElementById("txtFirstName").value = "";
	document.getElementById("txtLastName").value = "";
	document.getElementById("txtAge").value = "";
	document.getElementById("txtPhone").value = "";
}

//saves a person in the "database" - in our case, a global array
var savePerson = function() {
	//if the data is invalid, do not continue with the execution - guard clause
	if (!validatePersonData()) {
		alert("invalid data");
		return;
	}

	//get the values into temporary variables;
	var id = document.getElementById("txtId").value;
	id = parseInt(id);
	var firstName = document.getElementById("txtFirstName").value;
	var lastName = document.getElementById("txtLastName").value;
	var age = document.getElementById("txtAge").value;
	age = parseInt(age);
	var phone = document.getElementById("txtPhone").value;
	var person;

	if (id === 0) {
		//if id is 0 we are inserting the person
		id = getMaxIndex()+1;
		//make a new object
		person = {
			id: id,
			firstName: firstName,
			lastName: lastName,
			age: age,
			phone: phone
		};
		//insert it into the array
		persons.push(person);
	} else {
		//find the person by the id
		person = findPersonById(id);
		//change its properties
		person.firstName = firstName;
		person.lastName = lastName;
		person.age = age;
		person.phone = phone;
	}
	//redisplay the table
	bindTable();
	hidePersonData();
}

//returns the maximum id that is used in the persons array
var getMaxIndex = function(){
	var max = 0;
	for (var i=0; i<persons.length; i++){
		if (max < persons[i].id)
			max = persons[i].id;
	}
	return max;
}

//validates whether the entered data is a valid entry
function validatePersonData() {
	var firstName = document.getElementById("txtFirstName").value;
	if (firstName === "") {
		return false;
	}

	var lastName = document.getElementById("txtLastName").value;
	if (lastName === "") {
		return false;
	}
	var age = document.getElementById("txtAge").value;
	age = parseInt(age);
	if (isNaN(age)) {
		return false;
	}

	return true;
}

//shows the data from the persons array to the user, using a table UI
function bindTable() {
	var table = document.getElementById("abContainer");
	//remove all rows from the table
	while (table.rows.length > 0) {
		table.deleteRow(-1);
	}
	//loop all the persons, adding a row for each person
	for (var index = 0; index < persons.length; index++) {
		var person = persons[index];
		var row = table.insertRow();
		row.insertCell().innerText = person.id;
		row.insertCell().innerText = person.firstName;
		row.insertCell().innerText = person.lastName;
		row.insertCell().innerText = person.age;
		row.insertCell().innerText = person.phone;

		//add a edit and delete buttons in the last cell
		var buttonsCell = row.insertCell();
		var button = document.createElement('button');
		button.onclick = bindEventById(editSelectedPerson, person.id);
		button.innerText = "Edit";
		buttonsCell.appendChild(button);
		button = document.createElement('button');
		button.onclick = bindEventById(deleteSelectedPerson, person.id);
		button.innerText = "Delete";
		buttonsCell.appendChild(button);
		button = document.createElement('button');
		button.onclick = bindEventById(alert, person.id);
		button.innerText = "Say My Id";
		buttonsCell.appendChild(button);
	}
}

//binds the id of the person to the calling event
//if you are unsure what the method does and how, just use it as-is
function bindEventById(method, id)
{
	return (function(id) { return function() { method(id);};})(id);
}

//given an id, removes a person from the table
function deleteSelectedPerson(id) {
	var person = findPersonById(id);
	var index = persons.indexOf(person);
	persons.splice(index, 1);
	bindTable();
}

//self-executes when first loaded. Defers execution until the "abContainer" element is functional
(function init() {
	if (!document.getElementById("abContainer")) {
		setTimeout(init);
		return;
	};
	persons.push(
		{
			id: 1,
			firstName: "Wekoslav",
			lastName: "Stefanovski",
			age: 0x25,
			phone: "++38978499695"
		},
		{
			id: 2,
			firstName: "Hajan",
			lastName: "Selmani",
			age: 29,
			phone: "++38970599441"
		}
		);
	bindTable();
})();

