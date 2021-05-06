var ball;
var paddles;
var paddles2;
var x = 400;
var y = 400;
var moveX = 4;
var moveY = 6;
var scoreuser = 0;
var scorecom = 0;




function setup() {
	createCanvas(800, 800);
	ball = new Ball(15);
	paddles = new Paddles(15);
	paddles2 = new Paddles2(15);
}

function draw() {
background(0);
stroke(255);//color of line 
strokeWeight(5); // line thickness
line(width/2 ,0,width/2,800);

ball.setLocation(x, y); // set ball up in middle
ball.display();


paddles.display();
paddles2.display();

if (this.x + this.r < 0) {
	ball.reset();
	scorecom ++;
}
if (this.x - this.r > 800) {
	ball.reset();
	scoreuser ++;
}
this.reset = function() {
	this.r =radius;
	this.x = 0;
	this.y = 0;
	this.speed = 10;
}


text(24);
text("User Score:  " + int(scoreuser) + "  Computer Score:  " + int(scorecom), 300, 50); // add score

	
}
