export class Bubble {
    public xSpeed: number = random(-1, 1);
    private x: number;
    private y: number;
    private size: number;
    private ySpeed: number = random(-2, 0);
    private stopped: boolean = false;
    private color: string = "#FFFFFF80";
    private borderColor: string = "#FFFFFF80";                       // tslint:disable-next-line: max-line-length
    constructor(x: number, y: number, size: number, color: string = "#FFFFFF80", borderColor: string = "#FFFFFF80") {  // makes bubble transparent
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.borderColor = borderColor;
    }
    public stop() {
        this.stopped = true;
    }
    public go() {
        this.stopped = false;
    }
    public draw(): void {
        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);
    }
    public move(): void {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();                  // makes bubble go through the canvas and appear on the other side
        }
    }
    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
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
