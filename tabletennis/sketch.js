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

function setup() { // this sets up the screen (at beginnig) and after game starts
	mode = 0;
	createCanvas(800, 800);
	ball = new Ball(15, 6, 4);
	paddles = new Paddles(15);
	paddles2 = new Paddles2(15);
	ball.setLocation(x, y); // set ball up in middle
	textSize(20);
	scoreuser = 0;
	scorecom = 0;
}

function myreset() { // resets the ball in the center of the screen (400, 400) when the game starts and when the ball goes out of play
	setTimeout(ball.setLocation(x, y), 30000); // set ball up in middle
	this.resetcounter ++;
	ball.flipdirection();
	counter = 0;
}

function draw() { // sets up screen depending on game start menu and for playing game
	clear();
	if (mode==0) {
		text("Welcome to Ping Pong.",50,100);
		text("Press 'c' to start the game", 50, 150);
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
			ball.moveX = ball.moveX * 1.05;
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
	if (mode==3) { // you win
		clear();
		text("Game Over. Congratulations on Victory!", 100,100);
		text("Press 'd' to play again.", 100, 150);
		if (keyCode===68){
			setup();
		}
	}
	if (mode==4) { // you lose
		clear();
		text("Game Over. You Lost.", 100,100);
		text("Press 'd' to play again.", 100, 150);
		if (keyCode===68){
			setup();
		}
	}
}

function keyPressed() { // selecting play against computer
	if (keyCode===67) {
		mode=1;
		keyCode = 0;
	}
}

function endGame() { // ending the game
	if (scoreuser >= int(6)) {
		mode=3;
	}
	if (scorecom >= int(6)) {
		mode=4;
	}

}
