function printReceipt(){

	var fruits = [];
	var fruitName=["apples","oranges","bananas","pears"];
	var prices = [50,75,60,125];
	var output = document.getElementById("outputHolder");
	var apples = parseInt(document.getElementById("applesHolder").value);
	var oranges = parseInt(document.getElementById("orangesHolder").value);
	var bananas = parseInt(document.getElementById("bananasHolder").value);
	var pears = parseInt(document.getElementById("pearsHolder").value);
	var totalSum=0;
	fruits.push(apples);
	fruits.push(oranges);
	fruits.push(bananas);
	fruits.push(pears);
	
	for (var i=0; i < fruits.length; i++){
		if ( fruits[i] > 100){
			return alert ("Please insert sum under 100");
		};
	};
	
	output.innerHTML += "<b>You bought:</b><br />";
	
	for (var i=0; i < fruits.length; i++){
		if(fruits[i] === 0){
			
		}else {
			var sum = parseInt(fruits[i] * prices[i]);
			totalSum = parseInt(totalSum + sum);
			output.innerHTML += fruits[i] + " " + fruitName[i] + " = " + sum +"<br />";
		}
	};
	output.innerHTML += "<hr>";
	output.innerHTML += "<b>Total Price:"+totalSum+"</b><br />";
	


};