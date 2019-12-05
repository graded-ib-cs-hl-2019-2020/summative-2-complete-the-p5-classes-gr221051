import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";
export { randomColor };
export { flakes };
let balls = [];
let flakes = [];
let bubbles = [];
let clickedIndex = -1;
let objectsmoving = true;
let stoptimefx = document.getElementById("zaowlrd");
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
function randomColor() {
    return ("rgb(" + Math.floor(random(1, 256)) + "," + Math.floor(random(1, 256)) + "," + Math.floor(random(1, 256)) + ")");
}
function draw() {
    background("skyblue");
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].move();
        for (let c = i + 1; c < balls.length; c++) {
            balls[i].impact(balls[c]);
        }
    }
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].draw();
        bubbles[i].move();
        setInterval(function wobble() { bubbles[i].xSpeed = -bubbles[i].xSpeed; }, 900);
    }
    for (let i = 0; i < flakes.length; i++) {
        flakes[i].draw();
        flakes[i].move();
    }
}
function mousePressed() {
    if (mouseIsPressed && objectsmoving) {
        for (let i = 0; i < 10; i++) {
            stoptimefx.play();
            balls[i].stop();
            bubbles[i].stop();
            flakes[i].stop();
            objectsmoving = false;
            balls[i].ballcolor = randomColor();
        }
    }
    else if (mouseIsPressed && !objectsmoving) {
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
//# sourceMappingURL=index.js.map