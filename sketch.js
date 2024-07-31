function setup() {
    createCanvas(400, 400);
   background("black")
  }
  
  function draw() {
  
   stroke("navy")
   fill("white")
  
   if(mouseIsPressed)
   rect(mouseX, mouseY, 20, 35);
  }