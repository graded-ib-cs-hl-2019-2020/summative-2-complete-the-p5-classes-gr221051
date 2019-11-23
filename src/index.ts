/* Programming Summative 2

    This summative comes in 2 parts.

    Part 1 - Programming
    ---------------------
    Your PRIMARY goal is to get the program running. You can find missing elements by looking for comments marked
    TODO REQUIRED. If they are all fixed, the program should run with 10 red balls, 10 white snowflakes, and
    10 transluscent bubbles.

    Your SECONDARY goal is to implement the optional TODO requirements and any other fun things you think of.

    Part 2 - Documenting
    ------------------------
    Create UML diagrams for all three of these classes, and a flowchart that shows the basic program flow of
    index.ts. You can do these by hand (be neat!) or using an online tool - draw.io and lucidchart are both nice
    online offerings.

    For a Proficient, the documentation must be complete and the program must run and be readable.
        An Approaching might mean incomplete documentation OR hard-to-read code OR not-quite-working code
        Work your way downwrd from there
    For an Accomplished , some optional requirements or embellishments are required or the code must be particularly beautiful
    For an Exemplary, I would expect all optional rquirements to be implemented, or additional features of similar or greter
        difficulty.
*/
import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";

let balls: Ball[] = [];
let flakes: Snowflake[] = [];
let bubbles: Bubble[] = [];
let clickedIndex = -1;

function setup() {
    let numBubbles = 10;
    let numBalls = 10;
    let numFlakes = 10;
    createCanvas(500, 500);
    for (let i = 0; i < numBalls; i++) {
        balls[i] = new Ball(random(25, width - 25), random(25, height - 25), random(10, 50));
        /* TODO OPTIONAL - make the balls a random color */
    }
    for (let i = 0; i < numBubbles; i++) {
        bubbles[i] = new Bubble(random(25, width - 25), random(25, height - 25), random(10, 50));
        /* TODO REQUIRED - add the bubbles */
    }
    for (let i = 0; i < numFlakes; i++) {
        flakes[i] = new Snowflake(random(25, width - 25), random(25, height - 25), random(10, 50));
        /* TODO REQUIRED - add the snowflakes */
    }
}

function randomColor(): string {
    return "rgb(" + random(1, 256) + ", rgb" + random(1, 256) + ",rgb " + random(1, 256) + ")";
}
function draw() {
    background("skyblue");
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].move();
    }
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].draw();
        bubbles[i].move();
    }
    for (let i = 0; i < flakes.length; i++) {
        flakes[i].draw();
        flakes[i].move();
    }
    /* TODO REQUIRED - Draw and move the bubbles and flakes */
}

/* TODO OPTIONAL - add a function mousePressed() that either stops or starts objects from moving
   if the mouse is pressed while it is touching them. So you could use this (if careful!) to stop all of the
   objects from moving then start them back up again. The Ball class has some helper functions that will
   help you with this, but you'll need to add them to the other classes.
*/

// do not edit the below lines
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
