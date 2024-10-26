var greyValue;

function setup() {
createCanvas(windowWidth, windowHeight);
background(100, 80, 255);
}


function draw() {
 //noFill()
// fill(mouseX, mouseY, 80)
 greyValue= map(mouseX, 0, width, 0, 255)
 fill(greyValue); 
 circle(mouseX, mouseY, 20);
}
