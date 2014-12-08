/*
var dog = {};

dog.name = "Rex";
dog.age = 5;
dog.race = "Labradoodle";
dog.happy = false;

dog.status = function(){
	var happiness = this.happy ? "happy" : "sad"; 
	var result = this.name +" (" + this.race + ") is "+ happiness;
	alert(result);
}

dog.status();
//alert(dog.name);

var dog2 = {
	name : "Rex II",
	age : 5.5,
	race : "Labradoodle",
	status : function(){
		var happiness = this.happy ? "happy" : "sad"; 
		var result = this.name +" (" + this.race + ") is "+ happiness;
		alert(result);
	}
};

dog2.happy = false;
*/
//alert(dog2.name);


function Dog(name, rasa, godini, happy) {
	this.name = name;
	this.race = rasa;
	this.humanAge = godini * 7;

	if (typeof happy === "undefined")
		happy = false;

	this.happy = happy;

}

Dog.prototype.status = function() {
	var happiness = this.happy ? "happy" : "sad";
	var result = this.name + " (" + this.race + ") is " + happiness;
	alert(result);
};

var dog3 = new Dog("Rex III", "Labradoodle", 5);
dog3.happy = true;

dog3.status = function() {
	var happiness = this.happy ? "excited" : "lethargic";
	var result = this.name + " (" + this.race + ") is " + happiness;
	alert(result);
}

dog3.status();

var dog4 = new Dog("Rocky", "Boxer", 2);
dog4.status();

alert(dog3.status === dog4.status);
