function getFirstNumbers(e) {
	var units = ["", "one", "two", "three", "four", "five", "six", "seven",
		"eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
		"fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	var text = "";
	if (e >= 100 && e < 1000) {

		text = text + getFirstNumbers(e / 100) + " hundred ";
		e = e % 100;
		if (e != 0) {
			text = text + " and ";
		}
	}
	if (e < 100 && e >= 20) {
		text = text + tens[Math.floor(e / 10)] + " ";
		e = e % 10;
	}
	if (e < 20) {
		text = text + units[Math.floor(e)];
	}
	return text;
}

function process(){
	var result = document.getElementById("result");
	result.innerHTML = "";
	var number = parseInt(document.getElementById("number").value);
	
	if (isNaN(number)) {
		result.innerHTML = "Input is not a number!";
		return;
	}
	if (number != parseFloat(document.getElementById("number").value)) {
		result.innerHTML = "Please enter whole number!";
		return;
	}
	if (document.getElementById("number").value.length > 12) {
		result.innerHTML = "Please enter a number with maximum length of 12 digits";
		return
	}
	result.innerHTML = numberToWords(number);
}

function numberToWords(number) {
	var result= '';

	if (number == 0) {
		result = result + "zero";
	}
	if (number < 0) {
		result = result + "minus ";
		number = number * (-1);
	}
	if (number >= 1000000000 && number < 1000000000000) {
		result = result + getFirstNumbers(number / 1000000000) + " billions ";
		number = number % 1000000000;
		if (number != 0) {
			result = result + " and ";
		}
	}
	if (number >= 1000000 && number < 1000000000) {
		result = result + getFirstNumbers(number / 1000000) + " millions ";
		number = number % 1000000;
		if (number != 0) {
			result = result + " and ";
		}
	}
	if (number >= 1000 && number < 1000000) {
		result = result + getFirstNumbers(number / 1000) + " thousands ";
		number = number % 1000;
		if (number != 0) {
			result = result + " and ";
		}
	}
	result = result + getFirstNumbers(number) + " .";
	return result;
}