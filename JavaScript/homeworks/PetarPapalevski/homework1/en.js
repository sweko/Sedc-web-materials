var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var c = [' bilion ', ' million ', ' thousand ', ''];
var hundred = " hundred ";

function numberToWords(num) {

	num = num.toString();

	num = ('000000000000' + num).substr(-12);

	num = num.match(/.{3}/g);

	var words = '';

	for (var i = 0; i < c.length; i++) {
		if (num[i] != "000") {
			words += convertFunction(num[i], c[i]);
		}
	}


	return words;
}

function convertFunction(num, txt) {
	var words = "";
	digit = num.match(/.{1}/g);

	if (digit[0] != "0") {
		words += threeDigit(digit) + txt;
		return words;
	} else if (digit[1] != "0") {
		words += twoDigit(digit) + txt;
		return words;
	}

	words += oneDigit(digit) + txt;

	return words;
}

function oneDigit(digit) {
	return a[Number(digit[2])];
}

function twoDigit(digit) {
	var words = "";
	var temp = Number(digit[1] + digit[2]);

	if (temp <= 19) {
		words += a[temp];
		return words;
	} else {
		words += b[Number(digit[1])] + " " + a[Number(digit[2])];
		return words;
	}
}

function threeDigit(digit) {
	var words = "";
	var hundredsDigit = a[Number(digit[0])];

	if (digit[0] != "0")
		words += hundredsDigit + " " + hundred;

	if (digit[1] != "0") {
		words += twoDigit(digit) + " ";
		return words;
	}

	if (digit[2] != "0")
		words += oneDigit(digit);

	return words;
}
