const colors = ['green', 'yellow', 'blue', 'red']
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(random(colors))
  textSize(50)
  fill('black')
  text('ROCKSTAR',50,200)
}