/*
    Paste the code for your week 5 exercise below.
*/

//speed of circles
var speedX = 5;
var speedY = 5;
var speedX2 = 10;
var speedY2 = 10;

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

let squareX;
let squareY;
let squareW;
let squareH;

let rectX;
let rectY;
let rectW;
let rectH;


function setup() {
    createCanvas(windowWidth/1.1, windowHeight/1.1);
    circleX = random(width);
    circleY = random(height);
    circleX2 = random(width);
    circleY2 = random(height);
    squareX = 400;
    squareY = 400;
    squareW = 100;
    squareH = 100;
    rectX = 800;
    rectY = 200;
    rectW = 300;
    rectH = 50;
    randomColour();
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
}
function createCircles(){
    fill(r,g,b);
    circle(circleX, circleY, 60); // large circle for donut
    fill(r2,g2,b2);
    circle(circleX2, circleY2, 25); // smaller circle
    fill(0);
    circle(circleX, circleY, 25); // hole in 1st circle (donut)
}

function moveDonut(){
    circleX = circleX + speedX; //speed variables
    circleY = circleY + speedY;
}

function moveCircle(){
    circleX2 = circleX2 + speedX2; //speed variables2
    circleY2 = circleY2 + speedY2;
}

function createSquare(){
     //creating the square obsticle 
     noStroke();
     fill(r3,g3,b3);
     rect(squareX, squareY, squareW, squareH);
}

function createRectangle(){
    noStroke();
    fill(r4,g4,b4);
    rect(rectX, rectY, rectW, rectH);
}

function borderCollision(){
   //collision with borders

    if (circleX + 30 > width) {
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
function collisionDonut(){
  //collison of the donut and square
    
    if (circleX > squareX-squareW/3 && circleX < squareX+squareW*1.25 && circleY > squareY-squareH/3 && circleY < squareY+squareH*1.25) {
    speedX = -speedX;
    speedY = -speedY;
    randomColour();   // changes colour when it collides with the square
    randomColour3();
    } else {
    speedX = +speedX;
    speedY = +speedY;
    }

    if (circleX > rectX-rectW/6.5 && circleX < rectX+rectW*1.05 && circleY > rectY-rectH/3 && circleY < rectY+rectH*1.25) {
        speedX = -speedX;
        speedY = -speedY;
        randomColour();   // changes colour when it collides with the square
        randomColour4();
        } else {
        speedX = +speedX;
        speedY = +speedY;
        }
}

function collisionCircle(){
  //collison of the smaller circle
    if (circleX2 > squareX-squareW/4 && circleX2 < squareX+squareW*1.125 && circleY2 > squareY-squareH/4 && circleY2 < squareY+squareH*1.125) {
    speedX2 = -speedX2;
    speedY2 = -speedY2;
    randomColour2(); // changes colour when it collides with the square
    randomColour3();
    } else {
    speedX2 = +speedX2;
    speedY2 = +speedY2;
    }

    if (circleX2 > rectX-rectW/6.5 && circleX2 < rectX+rectW*1.05 && circleY2 > rectY-rectH/4 && circleY2 < rectY+rectH/1.25) {
        speedX2 = -speedX2;
        speedY2 = -speedY2;
        randomColour2(); // changes colour when it collides with the square
        randomColour4();
        } else {
        speedX2 = +speedX2;
        speedY2 = +speedY2;
        }


}

function randomColour() { //Making a serpate function so i can call it each time the ball hits the edge to change colour. This looks much nicer than other variations of this method.
    r = random(50, 255);
    g = random(50, 255);
    b = random(50, 255);
}

function randomColour2() { //Making a serpate function so i can call it each time the ball hits the edge to change colour. This looks much nicer than other variations of this method.
    r2 = random(50, 255);
    g2 = random(50, 255);
    b2 = random(50, 255);
}

function randomColour3() { //Making a serpate function so i can call it each time the ball hits the edge to change colour. This looks much nicer than other variations of this method.
    r3 = random(50, 255);
    g3 = random(50, 255);
    b3 = random(50, 255);
}

function randomColour4() { //Making a serpate function so i can call it each time the ball hits the edge to change colour. This looks much nicer than other variations of this method.
    r4 = random(50, 255);
    g4 = random(50, 255);
    b4 = random(50, 255);
}