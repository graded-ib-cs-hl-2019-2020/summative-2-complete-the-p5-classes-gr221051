import { flakes } from "../index";
export class Snowflake {
    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number = random(-0.5, 0.5);    // snowflakes drift towards the left or right, falling slowly
    private ySpeed: number = random(0.1, 0.4);
    private stopped: boolean = false;
    private color: string = "white";
    constructor(x: number, y: number, size: number, color: string = "white") {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }
    public draw(): void {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }
    public move(): void {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();                            // makes snowflakes refall by reappearing on top
        }
    }
    private doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        } else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        } else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
