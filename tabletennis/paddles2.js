class Paddles2 {
    pad2x = 780;
    pad2y = 350;
    pad2w = 20;
    pad2h = 100;

    display() {
    stroke(0);
    fill(255);
    rect(780, 350, 20, 100);
    }
    keyPressed() {
        if (keyCode == LEFT_ARROW) {
        pad2x -= 50;
        }
        else if (keyCode == RIGHT_ARROW) {
            pad2x += 50;
        }
    }
}