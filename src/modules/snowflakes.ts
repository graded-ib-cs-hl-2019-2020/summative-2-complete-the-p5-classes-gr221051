export class Snowflake {
    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number = random(-1, 1);
    private ySpeed: number = random(0, 5);
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
    /* TODO REQUIRED - Make this work. The snowflakes should drift slowly downward.
     have implemented only the draw() method.
     * You can base the rest of the behavior after bubbles, with only a few changes. */

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
        }
    }
}
