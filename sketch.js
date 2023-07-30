var player;

//normal maze walls
var wall,
  wall2,
  wall3,
  wall4,
  wall5,
  wall6,
  wall7,
  wall8,
  wall9,
  wall10,
  wall11,
  wall12,
  wall13,
  wall14,
  wall15,
  wall16,
  wall17;

//text walls
var secret, secret2;
//border maze walls
var border, border2, border3, border4;

//important maze walls
var goBack;
var secretEnding;
var hole, holeImg;

function preload() {
  holeImg = loadImage("pixil-frame-0 (17).png");
}
function setup() {
  createCanvas(1250, 1000);

  hole = createSprite(475, 400, 20, 20);
  hole.addImage(holeImg);

  //text walls
  secret = createSprite(200, 190, 120, 120);
  secret2 = createSprite(1200, 1100, 100, 500);

  player = createSprite(475, 400, 20, 20);
  wall = createSprite(550, 400, 50, 300);
  wall2 = createSprite(400, 400, 50, 300);
  wall3 = createSprite(150, 275, 500, 50);
  wall4 = createSprite(800, 275, 500, 50);
  wall5 = createSprite(1000, 400, 50, 300);
  wall6 = createSprite(1200, 400, 100, 300);
  wall7 = createSprite(1100, 900, 100, 500);
  wall8 = createSprite(850, 650, 400, 50);
  wall9 = createSprite(800, 500, 200, 300);
  wall10 = createSprite(600, 600, 50, 500);
  wall11 = createSprite(820, 800, 400, 50);
  wall12 = createSprite(375, 820, 400, 50);
  wall13 = createSprite(230, 700, 430, 50);
  wall14 = createSprite(375, 600, 400, 100);
  wall15 = createSprite(100, 505, 400, 50);
  wall16 = createSprite(200, 420, 50, 200);
  wall17 = createSprite(475, 520, 100, 10);
  //border walls
  border = createSprite(500, 100, 9999, 50);
  border2 = createSprite(10, 100, 50, 9999);
  border3 = createSprite(1250, 100, 50, 9999);
  border4 = createSprite(500, 1000, 9999, 50);

  //important walls
  goBack = createSprite(475, 500, 100, 100);
  secretEnding = createSprite(475, 500, 100, 10);
}

function draw() {
  background("#151515");

  player.shapeColor = "red";
  walls();

  //player collides
  player.collide(wall);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  player.collide(wall10);
  player.collide(wall11);
  player.collide(wall12);
  player.collide(wall13);
  player.collide(wall14);
  player.collide(wall15);
  player.collide(wall16);
  player.collide(wall17);

  //border wall collides
  player.collide(border);
  player.collide(border2);
  player.collide(border3);
  player.collide(border4);

  // text walls collides

  //important wall collides
  player.collide(secretEnding);
  drawSprites();

  //player movement
  if (keyDown("UP_ARROW")) {
    player.y = player.y - 5;
  }
  if (keyDown("DOWN_ARROW")) {
    player.y = player.y + 5;
  }
  if (keyDown("RIGHT_ARROW")) {
    player.x = player.x + 5;
  }
  if (keyDown("LEFT_ARROW")) {
    player.x = player.x - 5;
  }
  //secret text happens
  if (player.isTouching(secretEnding)) {
    text("it's your mind, you can't look back.", 400, 300);
  }

  if (player.isTouching(secret)) {
    text("follow your fate, go.", 200, 200);
  }

  if (player.isTouching(secret2)) {
    text("finish what you started.", 1100, 1000);
  }

  drawSprites();
}
function walls() {
  //normal walls
  wall.shapeColor = "black";
  wall2.shapeColor = "black";
  wall3.shapeColor = "black";
  wall4.shapeColor = "black";
  wall5.shapeColor = "black";
  wall6.shapeColor = "black";
  wall7.shapeColor = "black";
  wall8.shapeColor = "black";
  wall9.shapeColor = "black";
  wall10.shapeColor = "black";
  wall11.shapeColor = "black";
  wall12.shapeColor = "black";
  wall13.shapeColor = "black";
  wall14.shapeColor = "black";
  wall15.shapeColor = "black";
  wall16.shapeColor = "black";
  wall17.shapeColor = "black";
  //border walls
  border.shapeColor = "black";
  border2.shapeColor = "black";
  border3.shapeColor = "black";
  border4.shapeColor = "black";

  //text walls
  secret.shapeColor = "#151515";
  secret2.shapeColor = "#151515";

  //important walls
  goBack.shapeColor = "black";
  secretEnding.shapeColor = "black";
}
