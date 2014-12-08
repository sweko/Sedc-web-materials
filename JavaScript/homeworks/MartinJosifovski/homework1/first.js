function process() {
	var num = parseFloat(document.getElementById("number").value);
	document.getElementById("result").innerText = numberToWords(num);
}

function numberToWords(num) {
	var unit = ["", " thousand", " million", " billion"];
	var parts = [];
	var str = "";

	if ((num % 1) !== 0) {
		return "Not a whole number";
	}
	else if (num < 0 || num > 999999999999) {
		return "Not valid range";
	} else if (num === 0) {
		return "zero";
	}
	while (num > 0) {
		parts.push(num % 1000);
		num /= 1000;
		num = Math.floor(num);
	}
	for (var i = parts.length - 1; i >= 0; i--) {
		var x = threeDigit(parts[i]);
		if (x !== "zero") {
			str += x + unit[i];
		}
		if (i !== 0 && str.charAt(str.length - 1) != " " && parts[i - 1] !== 0) {
			str += " ";
		}
	}
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

function threeDigit(x) {
	var str = "";
	var onetofourteen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen"];

	if (x < 100) {
		str += twoDigit(x);
	} else {
		if ((x % 100) === 0) {
			str += onetofourteen[Math.floor(x / 100)] + " hundred";
		} else {
			str += str += onetofourteen[Math.floor(x / 100)] + " hundred " + twoDigit(x % 100);
		}
	}
	return str;
}
function twoDigit(x) {
	var str = "";
	var onetofourteen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen"];
	var tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

		if (x < 14) {
		str += onetofourteen[x];
	} else if (x < 20) {
		str += onetofourteen[x - 10] + "teen";
	} else {
		if ((x % 10) === 0) {
			str += tens[Math.floor(x / 10) - 2];
		} else {
			str += tens[Math.floor(x / 10) - 2] + " " + onetofourteen[x % 10];
		}
	}
	return str;
}