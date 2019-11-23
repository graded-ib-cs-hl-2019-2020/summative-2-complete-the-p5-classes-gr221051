
export class Bubble {
    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number = random(-1, 1);
    private ySpeed: number = random(0, 5);
    private stopped: boolean = false;
    private color: string = "white";
    private borderColor: string;

    /* TODO REQUIRED - What's missing here? Add it! */
    constructor(x: number, y: number, size: number, color: string = "#FFFFFF80", borderColor: string = "#FFFFFF80") {
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
        /* TODO REQUIRED - draw the bubbles */
    }

    public move(): void {
        /* TODO REQUIRED - Make the bubbles move as long as they aren't stopped. Model after ball behavior. */
        /* The doBorderBehavior is built in for you below. */
    }

    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }

    /* This border behavior implements a wrap, so bubbles will flip over to the other side */
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
