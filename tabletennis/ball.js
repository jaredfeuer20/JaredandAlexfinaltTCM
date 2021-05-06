class Ball {
    constructor(radius) {
        this.r =radius;
        this.x = 0;
        this.y = 0;
        this.speed = 10;
    }



    setLocation(newX, newY) {
        this.x = newX;
        this.y = newY;
    }


    display() { // draw the catcher
        stroke(0);
        fill(0, 125, 255);
        ellipse(this.x, this.y, this.r*2);
        x = x + moveX;
        y = y + moveY;
        if ((x > width)) { //|| (x <= 0)) 
            moveX *= -1;
        }
        if ((y > height) || (y <= 0)) {
            moveY *= -1;
        }
       // collison
        if ((this.x < 20) && ((this.y > mouseY && this.y < mouseY + 100)
        )) {
            moveX *= -1;
            x = x + Math.abs((this.x - 20)*2);
        }
    }
}

    
//if ((this.x > 0 && this.x < 0 + 20) && (this.y + (this.r) >= mouseY)) {
            //moveX *= -1;
           // moveY *= -1;
        //}