var persons = [];

function addPerson() {
	var currentPerson = {};
	displayPerson(currentPerson);
}

function editSelectedPerson(id) {
	var currentPerson = findPersonById(id);
	displayPerson(currentPerson);
}

function findPersonById(id) {
	for (var index = 0; index < persons.length; index++) {
		if (persons[index].id === id)
			return persons[index];
	}
	return {};
}

function displayPerson(person) {
	document.getElementById("personContainer").className = "visible";
	if (!!person.id) {
		document.getElementById("txtId").value = person.id;
		document.getElementById("txtFirstName").value = person.firstName;
		document.getElementById("txtLastName").value = person.lastName;
		document.getElementById("txtAge").value = person.age;
		document.getElementById("txtPhone").value = person.phone;
	} else {
		document.getElementById("txtId").value = 0;
		document.getElementById("txtFirstName").value = "";
		document.getElementById("txtLastName").value = "";
		document.getElementById("txtAge").value = "";
		document.getElementById("txtPhone").value = "";
	}
}

function hidePersonData() {
	document.getElementById("personContainer").className = "hidden";
	document.getElementById("txtId").value = 0;
	document.getElementById("txtFirstName").value = "";
	document.getElementById("txtLastName").value = "";
	document.getElementById("txtAge").value = "";
	document.getElementById("txtPhone").value = "";
}

var savePerson = function() {
	if (!validatePersonData()) {
		alert("invalid data");
		return;
	}

	var id = document.getElementById("txtId").value;
	id = parseInt(id);
	var firstName = document.getElementById("txtFirstName").value;
	var lastName = document.getElementById("txtLastName").value;
	var age = document.getElementById("txtAge").value;
	age = parseInt(age);
	var phone = document.getElementById("txtPhone").value;
	var person;
	if (id === 0) {
		//insert
		id = persons[persons.length-1].id + 1;
		person = {
			id: id,
			firstName: firstName,
			lastName: lastName,
			age: age,
			phone: phone
		};
		persons.push(person);
	} else {
		//update
		person = findPersonById(id);
		person.firstName = firstName;
		person.lastName = lastName;
		person.age = age;
		person.phone = phone;
	}

	bindTable();
	hidePersonData();
}

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

function bindTable() {
	var table = document.getElementById("abContainer");
	while (table.rows.length > 1) {
		table.deleteRow(-1);
	}
	for (var index = 0; index < persons.length; index++) {
		var person = persons[index];
		var row = table.insertRow();
		row.insertCell().innerText = person.id;
		row.insertCell().innerText = person.firstName;
		row.insertCell().innerText = person.lastName;
		row.insertCell().innerText = person.age;
		row.insertCell().innerText = person.phone;

		var buttonsCell = row.insertCell();
		var button = document.createElement('button');
		var id = person.id;
		button.onclick = bindEventById(editSelectedPerson, person.id);
		button.innerText = "Edit";
		buttonsCell.appendChild(button);
		button = document.createElement('button');
		button.onclick = bindEventById(deleteSelectedPerson, person.id);
		button.innerText = "Delete";
		buttonsCell.appendChild(button);
	}
}

function bindEventById(method, id)
{
	return (function(id) { return function() { method(id);};})(id);
}

function deleteSelectedPerson(id) {
	var person = findPersonById(id);
	var index = persons.indexOf(person);
	persons.splice(index, 1);
	bindTable();
}

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


var compareFirstNames = function(personOne, personTwo){
	if (personOne.firstName === personTwo.firstName)
		return 0;
	if (personOne.firstName > personTwo.firstName)
		return 1;
	if (personOne.firstName < personTwo.firstName)
		return -1;
}

persons.sort(compareFirstNames);