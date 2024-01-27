
function setup() {
  createCanvas(900,900);
box = createSprite(400,400,200,200)
box.shapeColor="yellow"}

function draw() 
{
  background("lightblue");
  if (keyIsDown(RIGHT_ARROW)) {
  box.position.x=box.position.x+5  
  } else {
    
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x=box.position.x-5
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y=box.position.y-5
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y=box.position.y+5
  }
drawSprites()
}




