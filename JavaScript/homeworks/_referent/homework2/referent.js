var products = ['Apples', 'Oranges', 'Pears', 'Lemons', 'Melons', 'Bananas', 'Onions'];
var prices = [50, 75, 125, 70, 40, 60, 22];

function init() {
	for (var i=0; i<products.length; i++){
		generateProductElement(i);
	}
}

function generateProductElement(index){
	var product = products[index];
	var price = prices[index];
	var container = document.getElementById("container");
	var productDiv = document.createElement("div");
	var selectId = 'ddl' + product;
	productDiv.innerHTML = "Buy <select id='" + selectId +"'></select> "+product+" (" + price + " denars each)";
	container.appendChild(productDiv);
	fillSelect(selectId);
}

function fillSelect(selectId) {
	var select = document.getElementById(selectId);
	for (var i = select.options.length - 1; i >= 0; i--) {
		select.remove(i);
	}

	for (var i = 0; i <= 100; i++) {
		var opt = document.createElement('option');
		opt.value = i.toString();
		opt.innerHTML = i.toString();
		select.appendChild(opt);
	}
}

function makeReceipt(){
	var input = [];
	for (var i=0; i<products.length; i++){
		var selectId = 'ddl' + products[i];
		var select = document.getElementById(selectId);
		var value = parseInt(select.value);
		input.push(value);
	}
	
	var receipt = calculateReceipt(input);
	
	var resultDiv = document.getElementById("result");
	resultDiv.innerHTML = "<b>You bought</b><br />"
	for(var i=0; i<products.length; i++){
		if (input[i] === 0)
			continue;
			
		resultDiv.innerHTML += input[i] + " " + products[i] + " = " + receipt[i] +"<br />";
	}
	resultDiv.innerHTML +="----------------<br />"
	resultDiv.innerHTML +="<b>Total = " + receipt[receipt.length-1];
}

function calculateReceipt(input){
	var result = [];
	var sum = 0;
	for (var i=0; i<input.length; i++){
		var itemResult = input[i] * prices[i];
		sum +=itemResult;
		result.push(itemResult);
	} 
	result.push(sum);
	return result;
}
