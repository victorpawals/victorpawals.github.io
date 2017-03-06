function getRandomInterger( min,max ) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
	
}


var numberBox = getRandomInterger(1,10);

function compareNumbers( first,second ) {
	if(first==second){ return true;
	}else{
		return false;
	}
}

function isNotInt(n) {
   if(n % 1 == 0){
	   return false;
   }else{
	 return true;  
   }   
}







function guessTheNumber() {
	var x = document.getElementById("number").value;
	if(isNotInt(x) ||x < 1 || x > 10 ) {
		alert("This number has to be a whole number and between 1-10");
	}else if(compareNumbers(x,numberBox)){
		alert("You are victorious!");
		numberBox = getRandomInterger(1,10);
	}else {
		alert("Too bad u lose! Plz try again!");
		numberbox = getRandomInterger(1,10);
	}
	
	
}