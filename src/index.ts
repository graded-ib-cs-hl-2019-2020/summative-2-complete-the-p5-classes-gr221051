import { AUDIO } from "p5";
import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";
export { randomColor };
export { flakes };
let balls: Ball[] = [];
let flakes: Snowflake[] = [];
let bubbles: Bubble[] = [];
let clickedIndex = -1;                          // tslint:disable-next-line: max-line-length
let objectsmoving: boolean = true;             // initial boolean value of the movement of objects: used to keep track of whether balls are stopped
let stoptimefx = document.getElementById("zaowlrd") as HTMLAudioElement;
// gets audio for the time stop effect from the html doc
function setup() {
    let numBubbles = 10;
    let numBalls = 10;
    let numFlakes = 10;
    createCanvas(1260, 635);
    for (let i = 0; i < numBalls; i++) {
        balls[i] = new Ball(random(25, width - 25), random(25, height - 25), random(10, 50));
    }
    for (let i = 0; i < numBubbles; i++) {
        bubbles[i] = new Bubble(random(25, width - 25), random(25, height - 25), random(10, 50));
    }
    for (let i = 0; i < numFlakes; i++) {
        flakes[i] = new Snowflake(random(25, width - 25), random(25, height - 25), random(10, 50));
    }
}
function randomColor(): string {            // gets a random rgb value
    return ("rgb(" + Math.floor(random(1, 256)) + "," + Math.floor(random(1, 256)) + "," + Math.floor(random(1, 256)) + ")");
}
function draw() {
    background("skyblue");
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].move();
        for (let c = i + 1; c < balls.length; c++) {         // tslint:disable-next-line: max-line-length
            balls[i].impact(balls[c]);                      // gets the impact function from ball.ts and applies it to both balls if they collide
        }
    }
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].draw();
        bubbles[i].move();
        setInterval(function wobble() { bubbles[i].xSpeed = -bubbles[i].xSpeed; }, 900);
    }               // Makes bubbles wobble: Doesn't work as expected, but works regardless.
    for (let i = 0; i < flakes.length; i++) {
        flakes[i].draw();
        flakes[i].move();
    }
}
function mousePressed() {
    // stops objects if mouse is pressed; if mouse is pressed again, starts movement.
    if (mouseIsPressed && objectsmoving) {
        for (let i = 0; i < 10; i++) {              // tslint:disable-next-line: max-line-length
            stoptimefx.play();                     // if mouse is pressed, plays a sound effect(reference to an anime)(a bit too loud)
            balls[i].stop();
            bubbles[i].stop();
            flakes[i].stop();
            objectsmoving = false;
            balls[i].ballcolor = randomColor();     // if mouse is pressed, maked the ball a random color
        }
    } else if (mouseIsPressed && !objectsmoving) {
        for (let i = 0; i < 10; i++) {
            balls[i].go();
            balls[i].move();
            bubbles[i].go();
            bubbles[i].move();
            flakes[i].go();
            flakes[i].move();
            objectsmoving = true;
        }
    }
}
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
