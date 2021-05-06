var ball;
var paddles;
var paddles2;
var x = 400;
var y = 400;
var moveX = 4;
var moveY = 6;
var score = 0;




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

text(24);
text("User Score:  " + int(score) + "  Computer Score:  " + int(score), 300, 50); // add score

	
}
