/*
    Paste the code for your week 4 exercise below.
*/

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(0);

        fill(0);
        strokeWeight(2);
        stroke(255, 255, 255);

        fill(255);
        stroke(0);

        //OUTLINE OF HEART
        beginShape();
        vertex(294.5, 300);
        vertex(344.5, 300); // Top left flat
        vertex(344.5, 300);
        vertex(400, 350); // Left top dip middle
        vertex(400, 350);
        vertex(455.5, 300); // Right top dip middle
        vertex(455.5, 300);
        vertex(505.5, 300); // Top right flat
        vertex(505.5, 300);
        vertex(540, 339); // Top right side
        vertex(540, 339);
        vertex(545, 394.5); // Middle right side
        vertex(545, 394.5);
        vertex(400, 535); // Right big line
        vertex(255, 394.5); // Left big line
        vertex(260, 339); // Middle left side
        vertex(294.5, 300);
        vertex(260, 339); // Top left side
        endShape(CLOSE);


        triangle(294.5, 300, 344.5, 300, 332.5, 350); // Top left middle triangle
        triangle(260, 339, 332.5, 350, 294.5, 300); // Top left middle side triangle
        triangle(260, 339, 332.5, 350, 255, 394.5); // Middle left side triangle
        triangle(255, 394.5, 332.5, 350, 415, 410); // MIddle left triangle
        
        quad(415, 410, 400, 350, 344.5, 300, 332.5, 350); // Top left middle trapezoid

        triangle(415, 410, 400, 350, 455.5, 300); // Middle top triangle
        triangle(415, 410, 455.5, 300, 505.5, 300); // top right triangle
        triangle(415, 410, 505.5, 300, 540, 339); // Right side triangle
        triangle(415, 410, 540, 339, 545, 394.5); // Right side triangle below
        line(540, 339, 530, 396); // Right side small trianlge / line
        line(530, 396, 455.5, 481); // Right side slim triangle / line

        triangle(400, 535, 415, 410, 454, 482.5); // Right middle triangle
        triangle(415, 410, 454, 482.5, 400, 535); // Bottom Somewhere

        line(400, 535, 344.5, 440); // Line from bottom
        line(255, 394.5, 344.5, 440); // Line from side
        line(415, 410, 344.5, 440); // Line from center


        line(400, 200, 400, 210);

        textSize(22);
        fill(255);
        text('Shattered Diamond Heart', 10, 30); //Text

}