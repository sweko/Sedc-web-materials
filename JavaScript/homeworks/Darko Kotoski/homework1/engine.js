/**
 * @author Darko
 */
function validate(){
				var price = document.getElementById("price").value;
				if(isNaN(price)){
					document.getElementById("result").innerText = "The inputed value is not a number!";
					document.getElementById("result").style.color = "red";
				}else if(price<1||price>999999999999)
				{
					document.getElementById("result").innerText = "The value should be a poitive number less then 999.999.999.999";
					document.getElementById("result").style.color = "red";
				}else{
					return true;
				}
				document.getElementById("result").style.color = "black";
				return false;
			}
			
			function numberToWords(){
				if(validate()){
					var toWords = '';
					var price = document.getElementById("price").value;
					switch(Math.ceil(price.length/3)){
						case 4:	{
							var tmp = new Array();
							var excess = price.length%3;
							if(excess==0)
							{
								excess=3;
							}
							for(var i =0;i<excess;i++){
							tmp.push(price[0]);
							console.log(tmp);
							price=price.substr(1);
							}
							
							excess=3-excess;
							for(var i =0;i<excess;i++){
							tmp.unshift("0");
							}
							toWords+=readThreeDigits(tmp);
							toWords+=" bilion ";
						}
					  case 3:{
					  		var tmp = new Array();
							var excess = price.length%3;
							if(excess==0)
							{
								excess=3;
							}
							for(var i =0;i<excess;i++){
							tmp.push(price[0]);
							price=price.substr(1);
							}
							
							excess=3-excess;
							for(var i =0;i<excess;i++){
							tmp.unshift("0");
							}
							toWords+=readThreeDigits(tmp);
							toWords+=" milion ";
					  	}
					  case 2:{
					  		var tmp = new Array();
							var excess = price.length%3;
							if(excess==0)
							{
								excess=3;
							}
							for(var i =0;i<excess;i++){
							tmp.push(price[0]);
							price=price.substr(1);
							
							}
							
							excess=3-excess;
							for(var i =0;i<excess;i++){
							tmp.unshift("0");
							}
							toWords+=readThreeDigits(tmp);
							toWords+=" thousand ";
					  	}
					  case 1:{
					  		var tmp = new Array();
							var excess = price.length%3;
							if(excess==0)
							{
								excess=3;
							}
							for(var i =0;i<excess;i++){
							tmp.push(price[0]);
							price=price.substr(1);
							console.log(price);
							}
							console.log("vlez");
							excess=3-excess;
							for(var i =0;i<excess;i++){
							tmp.unshift("0");
							}
							toWords+=readThreeDigits(tmp);
						}
					  
					}
					var tmpp=toWords[0].toUpperCase();
					toWords=tmpp+toWords.substr(1);
					document.getElementById("result").innerText=toWords;
				}
			}
			
			function readDigit(digit)
			{
				var result;
				switch(digit){
					case "1": result="one "; break;
					case "2": result="two "; break;
					case "3": result="three "; break;
					case "4": result="four "; break;
					case "5": result="five "; break;
					case "6": result="six "; break;
					case "7": result="seven "; break;
					case "8": result="eight "; break;
					case "9": result="nine "; break;
					default: result="";
				}
				
				return result;
			}
			
			function readDecade(digit){
				var tmp=parseInt(digit[0]+digit[1]);
				var result;
				if(tmp<10) {
					
					result = readDigit(digit[1]);
					
				}
				else if(tmp<20){
					switch(digit[1]){
						case '1': result="eleven "; break;
						case "2": result="twelve"; break;
						case "3": result="thirteen"; break;
						case "4": result="fourteen "; break;
						case "5": result="fifteen "; break;
						case "6": result="sixteen "; break;
						case "7": result="seventeen "; break;
						case "8": result="eighteen "; break;
						case "9": result="nineteen "; break;
						case "0": result="ten "; break;
						default: result="";				
					}
				}else{
					switch(digit[0]){
						case "2": result="twenty "+readDigit(digit[1]); break;
						case "3": result="thirty "+readDigit(digit[1]); break;
						case "4": result="fourty "+readDigit(digit[1]); break;
						case "5": result="fifty "+readDigit(digit[1]); break;
						case "6": result="sixty "+readDigit(digit[1]); break;
						case "7": result="seventy "+readDigit(digit[1]); break;
						case "8": result="eighty "+readDigit(digit[1]); break;
						case "9": result="ninety "+readDigit(digit[1]); break;
						default: result="";
					}
					
				}
				return result;
			}
			function readThreeDigits(number){
				var result = "";	
				if(number[0]!='0'){
				result=readDigit(number[0])+"hundred ";
				}
				console.log([number[2],number[3]]);
				result+=readDecade([number[1],number[2]]);
				return result;
			}	