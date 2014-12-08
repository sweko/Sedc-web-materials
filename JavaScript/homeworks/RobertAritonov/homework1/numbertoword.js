function numberToWords(value) {
	aOnes = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
		"Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen",
		"Nineteen"];
	aTens = ["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
	aOderNumbers = ["Thousand", "Million", "Billion", "Trillion", "Quadrillion"];

	if (value < 1000) {
		return hundreds(value);
	}
	else {
		var hun = [];
		var number = value;
		while (number != 0) {
			hun.push(number % 1000);
			number = Math.floor(number / 1000);
		}
		var str = "";
		var index = hun.length - 1;
		while (index > 0) {
			str += hundreds(hun[index]) + " " + aOderNumbers[index - 1] + " ";
			index--;
		}
		str += hundreds(hun[0]);
		return str;
	}
}

function NumToWord() {

	var value = parseInt(document.getElementById("txtNumber").value);
	var result = document.getElementById("result");
	if (isNaN(value)) {
		result.innerText = "Vnesi Broj";
	} else {
		result.innerText = numberToWords(value);;
	}
}

function tens(number) {
	if (number < 20) {
		return aOnes[number];
	}
	else if (number < 100 && number > 19) {
		if (number % 10 == 0) {
			return aTens[Math.floor(number / 10) - 2];
		}
		else {
			return aTens[Math.floor(number / 10) - 2] + " and " + aOnes[number % 10];
		}
	}
}

function hundreds(number) {
	if (number < 100) {
		return tens(number);
	}
	else if (number % 100 == 0) {
		return aOnes[Math.floor(number / 100)] + " hundreds";
	}
	else {
		return aOnes[Math.floor(number / 100)] + " hundreds " + tens(number % 100);
	}
}
