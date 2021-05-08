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

    setLocation(newX, newY){
        this.x = newX;
        this.y = newY;
    }

    display() 
    { // draw the ball and make it bounce off paddles
        stroke(0);
        fill(0, 125, 255);
        ellipse(this.x, this.y, this.r*2);
        this.x = this.x + this.moveX;
        this.y = this.y + this.moveY;
        paddles2.display(this.y - 20);
        
        if (this.y > height) // y above screen
        {
            this.moveY *= -1;
            this.y = this.y - ((this.y - height)*2); // making ball doesn't go beyond bounds of screen
        }
        else if (this.y < 0) // y below screen
        {
            this.moveY *= -1;
            this.y = this.y - (this.y * 2); // making ball doesn't go beyond bounds of screen
        }

       // collison with left (user) paddle
        if (this.x < 20) 
        {
            if (this.y > mouseY && this.y < mouseY + 100) 
            {
                this.moveX *= -1;
                this.x = this.x + Math.abs((this.x - 20)*2); // to make the ball actually come off paddles
            }
            else  
            {
                scorecom += 1;
                myreset();
            }
            
        }
        
        // collision with right (computer) paddle
        if (this.x > 780)
        {
            this.moveX *= -1;
            this.x = this.x - Math.abs((this.x - 780)*2); // to make the ball actually come off paddles2
        } 
    }
}

    
