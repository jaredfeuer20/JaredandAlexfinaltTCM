class Paddles2 {
    constructor() {
        this.y = 0;
        this.moveY = 0;
        this.speed = 6;
    }

    clamp(x, a, b) {
        return Math.min(Math.max(x, a), b);
    }

    display(destinationy) // computer paddle tracking ball
    {
        if (this.y > destinationy)
        {
            this.moveY = -this.speed;
        }
        else if (this.y < destinationy)
        { 
            this.moveY = this.speed;
        }
        else 
        {
            this.moveY = 0;
        }
        this.y = this.clamp(this.y + this.moveY, 0, 700);
        stroke(0);
        fill(255);
        rect(780, this.y, 20, 100);
    }
   
}