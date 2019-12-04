import { randomColor } from "../index.js";
export class Ball {
  public ballcolor: string;
  private x: number;
  private y: number;
  private size: number;
  private xSpeed: number = random(-3, 3);
  private ySpeed: number = random(-3, 3);
  private stopped: boolean = false;
  private borderColor: string = "black";
  constructor(x: number, y: number, size: number, ballcolor: string = "red", borderColor: string = "black") {
    this.x = x;
    this.y = y;
    this.size = size;
    this.ballcolor = ballcolor;
    this.borderColor = borderColor;
  }
  public getX(): number {
    return this.x;
  }
  public getY(): number {
    return this.y;
  }
  public setXspeed(speed: number): void {
    this.xSpeed = speed;
  }
  public setYspeed(speed: number): void {
    this.ySpeed = speed;
  }
  public stop() {
    this.stopped = true;
  }
  public go() {
    this.stopped = false;
  }
  public draw(): void {
    fill(this.ballcolor);
    stroke(this.borderColor);
    ellipse(this.x, this.y, this.size);
  }
  public move(): void {
    if (this.stopped == false) {
      this.x = this.xSpeed + this.x;
      this.y = this.ySpeed + this.y;
      this.doBorderBehavior();
    }
  }
  public impact(ball: Ball): void {
    let distance = dist(this.x, this.y, ball.getX(), ball.getY());  // distance between two balls
    let radii: number = (ball.size / 2) + (this.size / 2); // distance between two balls if they're gonna hit each other
    if (distance <= radii) {
      this.setXspeed(-this.xSpeed);
      this.setYspeed(-this.ySpeed);
      ball.setXspeed(-ball.xSpeed);   // tried to make balls bounce against each other
      ball.setYspeed(-ball.ySpeed);
      this.ballcolor = randomColor();  // on impact, balls change color to a random color
      ball.ballcolor = randomColor();
    }
  }
  public distFromMouse(): number {
    return dist(this.x, this.y, mouseX, mouseY);
  }
  public touchingMouse(): boolean {
    return this.distFromMouse() < this.size / 2;
  }
  private doBorderBehavior() {
    if (this.x < this.size / 2) {
      this.x = this.size / 2;
      this.xSpeed = -this.xSpeed;
    } else if (this.x > width - this.size / 2) {
      this.x = width - this.size / 2;
      this.xSpeed = -this.xSpeed;
    }
    if (this.y < this.size / 2) {
      this.y = this.size / 2;
      this.ySpeed = -this.ySpeed;
    } else if (this.y > height - this.size / 2) {
      this.ySpeed = -this.ySpeed;
      this.y = height - this.size / 2;
    }
  }
}
