import { randomColor } from "../index.js";
export class Ball {
    constructor(x, y, size, ballcolor = "red", borderColor = "black") {
        this.xSpeed = random(-3, 3);
        this.ySpeed = random(-3, 3);
        this.stopped = false;
        this.borderColor = "black";
        this.x = x;
        this.y = y;
        this.size = size;
        this.ballcolor = ballcolor;
        this.borderColor = borderColor;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setXspeed(speed) {
        this.xSpeed = speed;
    }
    setYspeed(speed) {
        this.ySpeed = speed;
    }
    stop() {
        this.stopped = true;
    }
    go() {
        this.stopped = false;
    }
    draw() {
        fill(this.ballcolor);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);
    }
    move() {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }
    impact(ball) {
        let distance = dist(this.x, this.y, ball.getX(), ball.getY());
        let radii = (ball.size / 2) + (this.size / 2);
        if (distance <= radii) {
            this.setXspeed(-this.xSpeed);
            this.setYspeed(-this.ySpeed);
            ball.setXspeed(-ball.xSpeed);
            ball.setYspeed(-ball.ySpeed);
            this.ballcolor = randomColor();
            ball.ballcolor = randomColor();
        }
    }
    distFromMouse() {
        return dist(this.x, this.y, mouseX, mouseY);
    }
    touchingMouse() {
        return this.distFromMouse() < this.size / 2;
    }
    doBorderBehavior() {
        if (this.x < this.size / 2) {
            this.x = this.size / 2;
            this.xSpeed = -this.xSpeed;
        }
        else if (this.x > width - this.size / 2) {
            this.x = width - this.size / 2;
            this.xSpeed = -this.xSpeed;
        }
        if (this.y < this.size / 2) {
            this.y = this.size / 2;
            this.ySpeed = -this.ySpeed;
        }
        else if (this.y > height - this.size / 2) {
            this.ySpeed = -this.ySpeed;
            this.y = height - this.size / 2;
        }
    }
}
//# sourceMappingURL=ball.js.map