function process() {
	var valuetxt = parseInt(document.getElementById("txtNumber").value);
	var result = document.getElementById("result");

	if (isNaN(valuetxt)) {                                                                             //proverka dali vneseniot broj e broj      
		result.innerText = "Not a valid number";
		return;
	}
	else if (valuetxt == 0) {
		result.innerText = "Enter a number greater than 0";
	}
	else if (valuetxt > 999999999999) {                                                         //proveruvame dali brojot e pogolem od 9999999999999
		result.innerText = "The number is too big, Enter a number less than 999 999 999 999"; //ako e izvestuvame se vnese pomal
	}
	else {                                                                                    //ako ne e pomal                                
		result.innerText = numberToWords(valuetxt);
	}
}

function numberToWords(valuetxt) {
	aOnes = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
		"Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen",
		"Nineteen"];                                                                               // niza vo koja ke se cuvaat broevite od 1 do 19
	aTens = ["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];           //niza kade ke se cuvaat desetkite
	aOderNumbers = ["Thousand", "Million", "Billion", "Trillion", "Quadrillion"];                    //niza vo koja se cuvaat drugite broevi
	var number = valuetxt;                //number promenliva so koja ke manipulirame i vo koja ja stavame vnesenata vrednost
	var ranges = [];                       //niza vo koja ke se cuvaat ostatocite na broevite pri delenje so 1000
	while (number !== 0) {                   // ja polnime nizata
		ranges.push(number % 1000);
		number = Math.floor(number / 1000);
	}                                    //
	var index = ranges.length - 1;          //promenliva index koja na pocetok ke ima vrednost na posledniot elemnt od nizata ranges zosto toa e brojot koj prv treba da se procita
	var words = "";                     // prazen string vo koj ke go smestuvame tekstot                                      
	while (index > 0) {                    //izminuvanje na nizata i smestuvanje na tekstot vo stringot, index ima vrednost na posledniot element
		if (ranges[index] !== 0) {          //proveruvame dali elementot na toj index e razlicen od nula i ako e:
			words += hundrets(ranges[index]) + " " + aOderNumbers[index - 1] + " ";     //vo stringot se smestuva stotkata so zborovi + zbor zavisno dali e ilajada, miljon itn.
			index--;                        //sme procitale edna brojka go namaluvame indeksot
		}
		else {                                //ako elementot na toj index e 0 nema da citame vrednost 
			index--;                     // samo go namaluvame indeksot
		}
	}
	if (ranges[0] !== 0) {                   //i na kraj treba da gi dodademe i stotkite ako gi ima ako ranges[0] ne e nula
		words += hundrets(ranges[0]);
		return words;
	}
	else {
		return words;           //ako nema stotki samo go ispisuvame toa sto predhodno e staveno vo stringot
	}

}


function tens(number) {                           //funkcija za citanje an desetkite
	var res;
	if (number % 10 == 0) {
		res = aTens[(Math.floor(number / 10)) - 2];
	}
	else {
		res = aTens[(Math.floor(number / 10)) - 2] + " " + aOnes[number % 10];
	}
	return res;
}

function hundrets(number) {                       //funkcija za citanje na stotkite vklucuvajki gi i broevite od 1 do 99
	var res;
	if (number < 20) {
		var res = aOnes[number];
	}
	else if (number > 19 && number < 100) {
		res = tens(number);
	}
	else if (number > 100 && number < 1000) {
		if (number % 100 == 0) {
			res = aOnes[Math.floor(number / 100)] + " Hundret ";
		}
		else if (number % 100 < 20) {
			res = aOnes[Math.floor(number / 100)] + " Hundret " + aOnes[number % 100];
		}
		else {
			res = aOnes[Math.floor(number / 100)] + " Hundret " + tens(number % 100);
		}
	}
	return res;
}