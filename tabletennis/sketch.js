var ball;
var paddles;
var paddles2;
var x = 400;
var y = 400;
var scoreuser = 0;
var scorecom = 0;
var resetcounter = 0;

function setup() {
	createCanvas(800, 800);
	ball = new Ball(15, 4, 6);
	paddles = new Paddles(15);
	paddles2 = new Paddles2(15);
	ball.setLocation(x, y); // set ball up in middle
}

function myreset() {
	ball.setLocation(x, y); // set ball up in middle
	this.resetcounter ++;
	ball.flipdirection();
}

function draw() {
background(0);
stroke(255);//color of line 
strokeWeight(5); // line thickness
line(width/2 ,0,width/2,800);


ball.display();
paddles.display();
//paddles2.display();

if (ball.x < 0) {
	myreset();
}

text(24);
text("User Score:  " + int(scoreuser) + "  Computer Score:  " + int(scorecom), 300, 50); // add score
}

