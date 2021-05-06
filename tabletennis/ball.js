class Ball {    
    constructor(radius, mx, my) {
        this.r =radius;
        this.x = 0;
        this.y = 0;
        this.speed = 10;
        this.moveX = mx;
        this.moveY = my;
    }

    flipdirection() {
        this.moveX *= -1;
    }

    setLocation(newX, newY) {
        this.x = newX;
        this.y = newY;
    }

    display() { // draw the ball and make it bounce off paddles
        stroke(0);
        fill(0, 125, 255);
        ellipse(this.x, this.y, this.r*2);
        this.x = this.x + this.moveX;
        this.y = this.y + this.moveY;
        if ((this.x > width)) { //|| (this.x <= 0)) 
            this.moveX *= -1;
        }
        if ((this.y > height) || (this.y <= 0)) {
            this.moveY *= -1;
        }

       // collison with left (user) paddle
        if ((this.x < 20) && ((this.y > mouseY && this.y < mouseY + 100)
        )) {
            this.moveX *= -1;
            this.x = this.x + Math.abs((this.x - 20)*2); // to make the ball actually come off paddle
        }
        
        //generate points for user or computer
        if (this.x < 0) {
            scorecom += 1;
        }
        if (this.x - this.r > 800) {
            scoreuser += 1;
        }
    }
}

    
