window.onload= function(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);
	
	
	
	var heroSpriteImage = new Image();
	heroSpriteImage.src = "sprites/heroSpriteFull.png"
	
	var heroSprite = sprite({
	context: ctx,
	width: 1000,
    height: 250,
    image: heroSpriteImage,
	numberOfFrames: 4,
	ticksPerFrame: 100
	});
	
	
	
	
	function sprite(options) {
		var that = {},
		frameIndex = 0,
		tickCount =0,
		ticksPerFrame = options.ticksPerFrame || 0,
		numberOfFrames = options.numberOfFrames || 1;
		
		
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		
		that.update = function () {
			if (38 in keysDown) { // Player holding up
			if(hero.y > 0 && !touches(hero)){
		
		hero.y -= hero.speed
			}else if(touches(hero)){
				hero.y += 30;
			}
			}
			if (40 in keysDown) { // Player holding down
		if(hero.y < 570 && !touches(hero)){
		
		
		hero.y += hero.speed}else if(touches(hero)){
			hero.y -= 30;
		}
			}
			if (37 in keysDown) { // Player holding left
			
			if(hero.x > 0 && !touches(hero)){
			hero.x -= hero.speed}
			}else if(touches(hero)){
				hero.x -= 30;
			}
			if (39 in keysDown) { // Player holding right
			if(hero.x < 570 && !touches(hero)){
			hero.x += hero.speed}
			}else if(touches(hero)){
				hero.x += 30;
			}
			tickCount += 1;
			
			if(tickCount > ticksPerFrame){
				tickCount = 0;
				if(frameIndex < numberOfFrames -1){
				frameIndex += 1;
				}else{
					frameIndex = 0;
				};
			};
		};
		
		that.render = function() {
			
		//clear the canvas
		that.context.clearRect(0, 0, that.width, that.heigth);

        // Draw the animation
        that.context.drawImage(
           that.image,
           frameIndex * that.width / numberOfFrames,
           0,
           that.width / numberOfFrames,
           that.height,
           hero.x,
           hero.y,
           that.width / numberOfFrames / 8,
           that.height/ 8);
    };
	
	
		
	
	
	
		return that;
	}
	
	
	
	
	
	
	//start the loop as soon as the sprite sheet has loaded
	
	
	
	//hande keyboard controls
	
	var keysDown = {};

		addEventListener("keydown", function (e) {
			keysDown[e.keyCode] = true;
			}, false);

			addEventListener("keyup", function (e) {
			delete keysDown[e.keyCode];
			}, false);
	


	
	
	
	
	
	//include the images for background
	
	var bgReady = false;
	var bgImage = new Image();
	bgImage.onload = function (){
		bgReady = true;
	};
	bgImage.src = "assetsgame/background.jpg";
	
	//monsters
	var monsterReady = false;
	var monsterImage = new Image();
	monsterImage.onload = function (){
		monsterReady = true;
	};
	monsterImage.src = "assetsgame/monster.jpg";
	
	
	
	
	
	
	
	//Reset the game when the player catches a monsters
	
	var enemyHit = function () {
	// changes speed of 
	for(var i = 0; i < monsters.length; i++){
		monsters[i].changeDirection();
	}
};


	

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}
	if (monsterReady) {
		
		for(var i =0; i < monsters.length; i++){
		ctx.drawImage(monsterImage, monsters[i].x, monsters[i].y);
		}
	}

};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	//update(delta / 1000);
	render();
	heroSprite.update();
	heroSprite.render();
	moveEnemy();
	
	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

	
// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;


var then = Date.now();
//reset();
main();































	
	
	
	
	
	
	
	
	
}