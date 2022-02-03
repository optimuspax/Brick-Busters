var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["66d57073-114b-4e5f-87ee-06068823d256","5d8b5c54-e873-469a-8fac-a6eb19747e30","dac5d29e-b7d3-4acd-b36e-ada56cac2004","16a77db0-c9fe-41c6-89b5-136db6952dc4"],"propsByKey":{"66d57073-114b-4e5f-87ee-06068823d256":{"name":"croquetball_1","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":12,"looping":true,"frameDelay":1,"version":".1AmbvEsM0S5wglUzGQONUbnAKPzS83g","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1179,"y":1576},"rootRelativePath":"assets/66d57073-114b-4e5f-87ee-06068823d256.png"},"5d8b5c54-e873-469a-8fac-a6eb19747e30":{"name":"retro_empty_heart_1","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":1,"looping":true,"frameDelay":12,"version":"DwRT4Hr64FqJXnpHGqgMQC9bFS229smr","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":143},"rootRelativePath":"assets/5d8b5c54-e873-469a-8fac-a6eb19747e30.png"},"dac5d29e-b7d3-4acd-b36e-ada56cac2004":{"name":"retro_heart_1","sourceUrl":null,"frameSize":{"x":352,"y":352},"frameCount":1,"looping":true,"frameDelay":12,"version":"cOIZQ_q2u4wOOpfYMuacJ0oF3GrxLchi","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":352},"rootRelativePath":"assets/dac5d29e-b7d3-4acd-b36e-ada56cac2004.png"},"16a77db0-c9fe-41c6-89b5-136db6952dc4":{"name":"cave_1","sourceUrl":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var c;
var ball;
var life = 3;
var brickBreak;
brickBreak = 0;
var game_state = "serve";
var score = 0;
ball = createSprite(200, 200, 20, 20);
ball.setAnimation("croquetball_1");
ball.scale = 0.07;
ball.velocityX = 0;
ball.velocityY = 0;
var paddle = createSprite(200, 350, 130, 30);
paddle.shapeColor = "white";
var bricks = createGroup();
createEdgeSprites();
CreateRowBrick(65, "red");
CreateRowBrick(65+29, "blue");
CreateRowBrick(65+29+29, "green");
CreateRowBrick(65+29+29+29, "yellow");
function CreateRowBrick(y, color) {
  for(c=0; c<6; c++)
  {
    var brick = createSprite(65+54*c,y,50, 25);
    brick.shapeColor = color;
    bricks.add(brick);
    
  }
}
function draw(){
  points();
  function points() {
    background("black");
    textSize(20);
    stroke("white");
    fill("light_blue");
    text("Your score is "+score, 20, 30);
  }
  paddle.x = World.mouseX;
  if(paddle.x < 60){
    paddle.x =60;
  }
  if(paddle.x > 340){
    paddle.x =340;
  }
  if (game_state=="serve") {
    text("Click to play", 145, 240);
  }
  if (game_state != "serve" && life == 0) {
    text("Refresh the page", 125, 240);
  }
  if(ball.isTouching(bottomEdge)) {
    //call 'reset' function to reset the ball
    reset();
    //change gameState to 'serve'
    game_state = "serve";
  }
  if (life==0) {
    ball.destroy();
  }
  livecount();
  function livecount() {
    var heart1 = createSprite(200, 200);
    heart1.setAnimation("retro_heart_1");
    var heart2 = createSprite(200, 200);
    heart2.setAnimation("retro_heart_1");
    var heart3 = createSprite(200, 200);
    heart3.setAnimation("retro_heart_1");
    heart1.scale = 0.2;
    heart2.scale = 0.2;
    heart3.scale = 0.2;
    heart1.x = 360;
    heart1.y = 25;
    heart2.x = 320;
    heart2.y = 25;
    heart3.x = 280;
    heart3.y = 25;
    if (ball.y >= 400) {
      playSound("assets/category_hits/retro_game_simple_impact_1.mp3", false);
    }
    if (life==2) {
      heart1.setAnimation("retro_empty_heart_1");
    }
    if (life==1) {
      heart1.setAnimation("retro_empty_heart_1");
      heart2.setAnimation("retro_empty_heart_1");
    }
    if (life==0) {
      heart1.setAnimation("retro_empty_heart_1");
      heart2.setAnimation("retro_empty_heart_1");
      heart3.setAnimation("retro_empty_heart_1");
    }
  }
  if (ball.isTouching(edges)) {
    playSound("assets/category_hits/retro_game_hit_block_4.mp3", false);
  }
  drawSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(paddle,paddleHit);
  ball.bounceOff(bricks,brickHit);
  if (score>=240) {
    ball.destroy();
    bricks.destroy();
    textFont("Impact");
    stroke("white");
    fill("red");
    textSize(64);
    text("You Win!!", 45, 200);
  }
  if (life<=0) {
    ball.destroy();
    textFont("Impact");
    stroke("white");
    fill("red");
    textSize(64);
    text("Game Over!!", 45, 200);
    score = 0;
  }
}
function reset() {
  life = life-1;
  if (life>=1) {
    game_state = "serve";
  } else {
    game_state = "end";
  }
  ball.x = 200;
  ball.y = 200;
  ball.setVelocity(0, 0);
}
function paddleHit() {
  playSound("assets/category_hits/retro_game_hit_block_3.mp3", false);
  if (ball.bounceOff(paddle)) {
    ball.setVelocity(3, 3.2);
  }
}
function brickHit(ball,brick){
playSound("assets/category_explosion/destruction_5.mp3", false);
brick.destroy();
score = score+10;
if (ball.bounceOff(brick)) {
  ball.setVelocity(3, 3.2);
  ball.velocityX = ball.velocityX * 1.08;
  ball.velocityY = ball.velocityY * 1.08;
}
ball.velocityX = ball.velocityX * 1.08;
ball.velocityY = ball.velocityY * 1.08;
}
function mousePressed(){
  console.log("begin");
  console.log("Lives Left = "+life);
  if (game_state=="serve") {
    game_state = "play";
    ball.velocityX = -4;
    ball.velocityY = 4;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
