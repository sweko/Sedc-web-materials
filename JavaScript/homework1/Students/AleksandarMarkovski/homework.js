
function convert() {
	var inputValue = document.getElementById("input").value;

	//Guard clauses
	if (inputValue <= 0) {
		window.alert("Please enter a positive number.");
		return;
	}

	else if (isNaN(inputValue)) {
		window.alert("Please enter a valid integer!");
		return;
	}

	else if (inputValue % 1 != 0) {
		window.alert("Please enter a whole number.");
		return;
	}

	var number = parseInt(inputValue);

	if (number > 999999999999) {
		if (langValue === 0) {
			window.alert("The number must be in the following range: 1 - 999,999,999,999");
		}
		return;
	}

	var result = numberToWords(number);

	document.getElementById("result").innerText = "";
	document.getElementById("result").innerText = result;

}

function capitalizeFirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function numberToWords(number) {
	return capitalizeFirst(numberToWordsImpl(number));
}

function numberToWordsImpl(number) {
	var words = "";

	var billion = "";
	var million = "";
	var thousand = "";
	var hundred = "";
	var ones = [];
	var tens = [];
	var and = "";
	var divider = " ";


	ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
		tens = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
		billion = " billion ";
	million = " million ";
	thousand = " thousand ";
	hundred = " hundred ";
	and = " and ";
	divider = " ";



	if (Math.floor(number / 1000000000) > 0) {
		words += numberToWordsImpl(Math.floor(number / 1000000000)) + billion;
		number = Math.floor(number % 1000000000);
	}

	if (Math.floor(number / 1000000) > 0) {
		words += numberToWordsImpl(Math.floor(number / 1000000)) + million;
		number = Math.floor(number % 1000000);
	}

	if (Math.floor(number / 1000) > 0) {
		words += numberToWordsImpl(Math.floor(number / 1000)) + thousand;
		number = Math.floor(number % 1000);
	}

	if (Math.floor(number / 100) > 0) {
		words += numberToWordsImpl(Math.floor(number / 100)) + hundred;
		number = Math.floor(number % 100);
	}

	if (number > 0) {
		if (words != "") {
			words += and;
		}

		if (number < 20) {
			//ones
			words += ones[number];
		}
		else {
			//tens
			var divided = Math.floor(number / 10);
			words += tens[divided];
			if ((number % 10) > 0) {
				var divided = Math.floor(number % 10);
				words += divider + ones[divided];
			}
		}
	}

	return words;
}	