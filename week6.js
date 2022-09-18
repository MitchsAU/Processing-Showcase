/*
    Paste the code for your week 5 exercise below.
*/

//speed of circles
var speedX = 5;
var speedY = 5;
var speedX2 = 10;
var speedY2 = 10;

//speed of sliders
var speed = 10;

//position if circles
let circleX;
let circleY;
let circleX2;
let circleY2;

//colour of circles
let r, g, b;
let r2, g2, b2;
let r3, g3, b3;
let r4, g4, b4;

//square variables
let squareX;
let squareY;
let squareW;
let squareH;

//rectangle variables x4
let rectX;
let rectY;
let rectW;
let rectH;
let rectX2;
let rectY2;
let rectW2;
let rectH2;
let rectX3;
let rectY3;
let rectW3;
let rectH3;
let rectX4;
let rectY4;
let rectW4;
let rectH4;

//setting the score start at 0
let score = 0;


function setup() {
    createCanvas(windowWidth/1.1, windowHeight/1.1);
    circleX = random(width);
    circleY = random(height);
    circleX2 = random(width);
    circleY2 = random(height);
    squareX = windowWidth/1.9; // Setting all of the variables
    squareY = windowHeight/1.9;
    squareW = 100;
    squareH = 100;
    rectX = 0;
    rectY = windowHeight/3;
    rectW = 15;
    rectH = windowHeight/3;
    rectX2 = windowWidth/1.1 - 15;
    rectY2 = windowHeight/3;
    rectW2 = 15;
    rectH2 = windowHeight/3;
    rectX3 = windowWidth/3;
    rectY3 = 0;
    rectW3 = windowHeight/3;
    rectH3 = 15;
    rectX4 = windowWidth/3;
    rectY4 = windowHeight/1.1 - 15;
    rectW4 = windowHeight/3;
    rectH4 = 15;
    randomColour(); //Loading random colours for the objects on startup
    randomColour2();
    randomColour3();
    randomColour4();
}

function draw() {
    background(0);
    createCircles();
    moveDonut();
    moveCircle(); // calling the movement functions
    createSquare();
    createRectangle();
    borderCollision();
    collisionDonut();
    collisionCircle(); // I created functions for these as is it easier to navigate and making the code moduler makes it easier to find and edit parts of the code
    MovementInteraction();
    MouseMovement();

    fill(255);
    textSize(48);
    text(score, 10, 10, 70 ,80); // Adding the score to the screen so that the player can see their progress
}
function createCircles(){
    fill(r,g,b);
    circle(circleX, circleY, 60); // large circle for donut
    fill(r2,g2,b2);
    circle(circleX2, circleY2, 25); // smaller circle
    fill(0);
    circle(circleX, circleY, 25); // hole in 1st circle (donut)
}

function moveDonut(){ //Giving movement to the circles and donut so that they move around the screen
    circleX = circleX + speedX; //speed variables
    circleY = circleY + speedY;
}

function moveCircle(){
    circleX2 = circleX2 + speedX2; //speed variables2
    circleY2 = circleY2 + speedY2;
}

function createSquare(){ //creating the square obsticle 
     noStroke();
     fill(r3,g3,b3);
     rect(squareX, squareY, squareW, squareH);
}

function createRectangle(){ //creating the rectangle obsticles
    noStroke();
    fill(r4,g4,b4);
    rect(rectX, rectY, rectW, rectH);
    rect(rectX2, rectY2, rectW2, rectH2);
    rect(rectX3, rectY3, rectW3, rectH3);
    rect(rectX4, rectY4, rectW4, rectH4);
}

function borderCollision(){   //collision with borders of the screen, this is so the circles will rebound and not disapear of the sceen.
    if (circleX + 30 > width) { // This also sets a random colour everytime the ball or donut comes in contact with a border
    speedX = -speedX;
    randomColour();
    }
    if (circleX - 30 < 0) {
        speedX = -speedX;
        randomColour();
    }
    if (circleY + 30 > height) {
        speedY = -speedY;
        randomColour();
    }
    if (circleY - 30 < 0) {
        speedY = -speedY;
        randomColour();
    }

//collision 2nd circle with borders

    if (circleX2 + 10 > width) {
        speedX2 = -speedX2;
        randomColour2();
    }
    if (circleX2 - 10 < 0) {
        speedX2 = -speedX2;
        randomColour2();
    }
    if (circleY2 + 10 > height) {
        speedY2 = -speedY2;
        randomColour2();
    }
    if (circleY2 - 10 < 0) {
        speedY2 = -speedY2;
        randomColour2();
}
}
function collisionDonut(){  //collison of the donut and square
    if (circleX > squareX-squareW/3 && circleX < squareX+squareW*1.25 && circleY > squareY-squareH/3 && circleY < squareY+squareH*1.25) {
    speedX = -speedX; // sets the speed to a negative so the dount goes in the opposite direction of its current state
    speedY = -speedY;
    score ++;
    randomColour();   // changes colour when it collides with the square
    randomColour3();
    } else {
    speedX = +speedX; // else keep the speed as a postiive
    speedY = +speedY;
    }
}

function collisionCircle(){
  //collison of the smaller circle
    if (circleX2 > squareX-squareW/4 && circleX2 < squareX+squareW*1.125 && circleY2 > squareY-squareH/4 && circleY2 < squareY+squareH*1.125) {
    speedX2 = -speedX2; // sets the speed to a negative so the circle goes in the opposite direction of its current state
    speedY2 = -speedY2;
    score ++;
    randomColour2(); // changes colour when it collides with the square
    randomColour3();
    } else {
    speedX2 = +speedX2; // else keep the speed as a postiive
    speedY2 = +speedY2;
    }

    if (circleX2 > rectX-rectW/6.5 && circleX2 < rectX+rectW*1.05 && circleY2 > rectY-rectH/4 && circleY2 < rectY+rectH/1.25){
        speedX2 = -speedX2; // sets the speed to a negative so the circle goes in the opposite direction of its current state
        speedY2 = -speedY2;
        randomColour2(); // changes colour when it collides with the square
        randomColour4();
        score = 0;
        } else {
        speedX2 = +speedX2; // else keep the speed as a postiive
        speedY2 = +speedY2;
        }

     if (circleX2 > rectX2-rectW2/6.5 && circleX2 < rectX2+rectW2*1.05 && circleY2 > rectY2-rectH2/4 && circleY2 < rectY2+rectH2/1.25){
        speedX2 = -speedX2; // sets the speed to a negative so the circle goes in the opposite direction of its current state
        speedY2 = -speedY2;
        randomColour2(); // changes colour when it collides with the square
        randomColour4();
        score = 0;
        } else {
        speedX2 = +speedX2; // else keep the speed as a postiive
        speedY2 = +speedY2;
        }

     if (circleX2 > rectX3-rectW3/6.5 && circleX2 < rectX3+rectW3*1.05 && circleY2 > rectY3-rectH3/4 && circleY2 < rectY3+rectH3/1.25){
        speedX2 = -speedX2; // sets the speed to a negative so the circle goes in the opposite direction of its current state
        speedY2 = -speedY2;
        randomColour2(); // changes colour when it collides with the square
        randomColour4();
        score = 0;
        } else {
        speedX2 = +speedX2; // else keep the speed as a postiive
        speedY2 = +speedY2;
        }

     if (circleX2 > rectX4-rectW4/6.5 && circleX2 < rectX4+rectW4*1.05 && circleY2 > rectY4-rectH4/4 && circleY2 < rectY4+rectH4/1.25){
        speedX2 = -speedX2; // sets the speed to a negative so the circle goes in the opposite direction of its current state
        speedY2 = -speedY2;
        randomColour2(); // changes colour when it collides with the square
        randomColour4();
        score = 0;
        } else {
        speedX2 = +speedX2; // else keep the speed as a postiive
        speedY2 = +speedY2;
        }
}

function MouseMovement(){ //This is letting the square move to the mouseX and mouseY position anytime the mouse1 or mouse2 button is pressed down. On release the square will stop following the mouse position. 
    if (mouseIsPressed){
        squareX = mouseX -50; //This is minused by 50 so that the mouse is centered in the middle of the sqaure when following and not the top left hand corner.
        squareY = mouseY -50;
    }
}

function MovementInteraction(){ //This is making the sliders on the edge of the screen moveable, the left and right sliders are move by the UP & DOWN arrow keys whilst the top and bottom sliders are moved by the LEFT & RIGHT arrow keys.
    if (keyIsDown(LEFT_ARROW)){
        rectX3 -= speed;
        rectX4 -= speed;
    }
    if (keyIsDown(RIGHT_ARROW)){
        rectX3 += speed;
        rectX4 += speed;
    }
    if (keyIsDown(UP_ARROW)){
        rectY -= speed;
        rectY2 -= speed;
    }
    if (keyIsDown(DOWN_ARROW)){
        rectY += speed;
        rectY2 += speed;
    }
}

function randomColour() { //Making serpate functions so i can call it each time the ball hits the edge to change colour.
    r = random(50, 255);
    g = random(50, 255);
    b = random(50, 255);
}

function randomColour2() {
    r2 = random(50, 255);
    g2 = random(50, 255);
    b2 = random(50, 255);
}

function randomColour3() {
    r3 = random(50, 255);
    g3 = random(50, 255);
    b3 = random(50, 255);
}

function randomColour4() {
    r4 = random(50, 255);
    g4 = random(50, 255);
    b4 = random(50, 255);
}
