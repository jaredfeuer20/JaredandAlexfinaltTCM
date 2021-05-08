var ball;
var paddles;
var paddles2;
var x = 400;
var y = 400;
var scoreuser = 0;
var scorecom = 0;
var resetcounter = 0;
var computery = 0;
var mode;
var counter = 0;

function setup() {
	mode = 0;
	createCanvas(800, 800);
	ball = new Ball(15, 6, 4);
	paddles = new Paddles(15);
	paddles2 = new Paddles2(15);
	ball.setLocation(x, y); // set ball up in middle
	textSize(20);
}

function myreset() {
	setTimeout(ball.setLocation(x, y), 30000); // set ball up in middle
	this.resetcounter ++;
	ball.flipdirection();
	counter = 0;
}

function draw() {
	clear();
	if (mode==0) {
		text("Welcome to Ping Pong.",50,300);
		text("Press 'c' to play against the computer", 50, 350);
		text("Press 'p' to play against another player", 50,400);
	}
	if (mode==1) {
		background(0);
		stroke(255);//color of line 
		strokeWeight(5); // line thickness
		line(width/2 ,0,width/2,800);


		var hitPaddle = ball.display(paddles2.y);
		paddles.display();

		if (hitPaddle) {
			counter++;
		}
		if (counter >= 5) {
			paddles2.display(ball.y + 20);
		}
		else {
			paddles2.display(ball.y - 20);
		}
		


		text(24);
		text("User Score:  " + int(scoreuser) + "  Computer Score:  " + int(scorecom), 250, 50); // add score


	}
	if (mode==3) {
		clear();
		text("Game Over. Congratulations on Victory!", 100,100);
	}
	if (mode==4) {
		clear();
		text("Game Over. You Lost.", 100,100);
	}
}

function keyPressed() {
	if (keyCode===67) {
		mode=1;
	}
}

function endGame() {
	if (scoreuser >= int(2)) {
		mode=3;
	}
	if (scorecom >= int(2)) {
			mode=4;
	}

}
