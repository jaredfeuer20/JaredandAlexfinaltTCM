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
        x = x + move;
        y = y + move;
        if ((x > width) || (x <= 0)) {
            move *= -1;
        }
        //if ((y > height) || (y <= 0)) {
        //    move *= -1;
        //}
    }

}
console.log("hi alex");
    
