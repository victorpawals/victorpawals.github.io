

var monsters = [];
    
	
	create();
	create();
	create();
	create();



function create(){
	
	var enemy = {
		x : getRandomArbitrary(50,550),
		y : getRandomArbitrary(50,550),
		nopeus: getRandomArbitrary(1,2)
	};
	if(
		hero.x <= (enemy.x + 40)
		&& enemy.x <= (hero.x + 40)
		&& hero.y <= (enemy.y + 40)
		&& enemy.y <= (hero.y + 40)
	){
		create();
	}else if(touches(enemy)){
		create();
   }else{
	   monsters.push(enemy);
   }
}



function moveEnemy(){
	
	for(var i = 0; i < monsters.length; i++){
		if(monsters[i].x >= 0 && monsters[i].x <= 550){
		monsters[i].x = monsters[i].x + monsters[i].nopeus;
		}else{
			monsters[i].x = monsters[i].x - 550;
		}
	}
	
	for(var i = 0; i < monsters.length; i++){
		if(monsters[i].y > 0 && monsters[i].y < 550){
		monsters[i].y = monsters[i].y + monsters[i].nopeus
		}else{
			monsters[i].y = monsters[i].y - 550;
		}
	}
	
}




function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function touches(input){
	
	
	
	for(var i = 0; i < monsters.length; i++){
		if(
		monsters[i].x <= (input.x + 40)
		&& input.x <= (monsters[i].x + 40)
		&& monsters[i].y <= (input.y + 40)
		&& input.y <= (monsters[i].y + 40)
		){
			return true;
		}
		
	}
}












