var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d56df92f-fc53-4954-84b4-2f4165550832","496fe5c9-4dad-4f61-b76f-95ba798be095","9e2791b8-2e18-4ae6-a003-6afecc975f6e","ff3d5eb4-af38-4a4c-8c8e-f1bd4fe79aaa","6d26b8b2-cb3f-42ba-9d37-b3be60cdabaf","4ec23ee1-3e9b-41d1-8cee-163cc91d410f","200048c9-f32a-4e0f-877b-9b719d5e221c","808fd5b7-f023-43bd-8d55-b483b2fde6b2","e0412331-6fea-4d1a-b5b5-09e1beeb370c","709af993-a035-4d61-a24d-5f2ede43231b","0ab50da4-0fa1-48ac-aec6-eae5fb4e5aeb","891d4a5e-aa6b-4808-aca1-31ae890ba526","43c88b20-6428-45d4-9494-3d6f11ca078e","6ffa20f8-263e-4ab6-83b6-27e3377710b0"],"propsByKey":{"d56df92f-fc53-4954-84b4-2f4165550832":{"name":"space","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"496fe5c9-4dad-4f61-b76f-95ba798be095":{"name":"nick","sourceUrl":"assets/api/v1/animation-library/gamelab/DK8.stYcZlziAImCg36Fa7yHu1S4LUhW/category_faces/kidportrait_07.png","frameSize":{"x":264,"y":370},"frameCount":1,"looping":true,"frameDelay":2,"version":"DK8.stYcZlziAImCg36Fa7yHu1S4LUhW","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":370},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DK8.stYcZlziAImCg36Fa7yHu1S4LUhW/category_faces/kidportrait_07.png"},"9e2791b8-2e18-4ae6-a003-6afecc975f6e":{"name":"nico","sourceUrl":"assets/api/v1/animation-library/gamelab/YkI8OMgqLb2Tbwyal3doDas5p3hnt3uX/category_faces/kidportrait_06.png","frameSize":{"x":328,"y":357},"frameCount":1,"looping":true,"frameDelay":2,"version":"YkI8OMgqLb2Tbwyal3doDas5p3hnt3uX","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":357},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YkI8OMgqLb2Tbwyal3doDas5p3hnt3uX/category_faces/kidportrait_06.png"},"ff3d5eb4-af38-4a4c-8c8e-f1bd4fe79aaa":{"name":"space1","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"},"6d26b8b2-cb3f-42ba-9d37-b3be60cdabaf":{"name":"space2","sourceUrl":"assets/api/v1/animation-library/gamelab/48WvIjYXVxyuCdt3Jah08koeLbeNGtRC/category_backgrounds/background_landscape11.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"48WvIjYXVxyuCdt3Jah08koeLbeNGtRC","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/48WvIjYXVxyuCdt3Jah08koeLbeNGtRC/category_backgrounds/background_landscape11.png"},"4ec23ee1-3e9b-41d1-8cee-163cc91d410f":{"name":"playership11","sourceUrl":null,"frameSize":{"x":400,"y":372},"frameCount":2,"looping":true,"frameDelay":12,"version":"o1PzOIJIUW0xXnlvXSR36P_IjAK8B1xc","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":744},"rootRelativePath":"assets/4ec23ee1-3e9b-41d1-8cee-163cc91d410f.png"},"200048c9-f32a-4e0f-877b-9b719d5e221c":{"name":"playership1","sourceUrl":null,"frameSize":{"x":400,"y":372},"frameCount":2,"looping":true,"frameDelay":12,"version":"aEW91LSxTHkiYbC_VzE7yxSGRpTNG1IK","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":744},"rootRelativePath":"assets/200048c9-f32a-4e0f-877b-9b719d5e221c.png"},"808fd5b7-f023-43bd-8d55-b483b2fde6b2":{"name":"playership12","sourceUrl":null,"frameSize":{"x":400,"y":372},"frameCount":2,"looping":true,"frameDelay":12,"version":"5Tw5lZPMRcD2k8fgtOlcsKqfEOGC2IRs","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":744},"rootRelativePath":"assets/808fd5b7-f023-43bd-8d55-b483b2fde6b2.png"},"e0412331-6fea-4d1a-b5b5-09e1beeb370c":{"name":"playership13","sourceUrl":null,"frameSize":{"x":400,"y":372},"frameCount":2,"looping":true,"frameDelay":12,"version":"gAkeHglNMi6EVBrkIDqLAN4X0LjE0x93","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":744},"rootRelativePath":"assets/e0412331-6fea-4d1a-b5b5-09e1beeb370c.png"},"709af993-a035-4d61-a24d-5f2ede43231b":{"name":"medal","sourceUrl":"assets/api/v1/animation-library/gamelab/SBgQ6Yz3qVf6MvQqEZfHKBXpo5SJWpeD/category_board_games_and_cards/flat_medal8.png","frameSize":{"x":41,"y":74},"frameCount":1,"looping":true,"frameDelay":2,"version":"SBgQ6Yz3qVf6MvQqEZfHKBXpo5SJWpeD","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":74},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SBgQ6Yz3qVf6MvQqEZfHKBXpo5SJWpeD/category_board_games_and_cards/flat_medal8.png"},"0ab50da4-0fa1-48ac-aec6-eae5fb4e5aeb":{"name":"en1","sourceUrl":null,"frameSize":{"x":400,"y":360},"frameCount":2,"looping":true,"frameDelay":12,"version":"gVVQ0tFwPuYqJ4T24OtfIN.nfxwcF3qc","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":720},"rootRelativePath":"assets/0ab50da4-0fa1-48ac-aec6-eae5fb4e5aeb.png"},"891d4a5e-aa6b-4808-aca1-31ae890ba526":{"name":"en2","sourceUrl":null,"frameSize":{"x":400,"y":360},"frameCount":2,"looping":true,"frameDelay":12,"version":"chjCtZiBVg8ByUe8HKJAvjyQUhNDbXvY","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":720},"rootRelativePath":"assets/891d4a5e-aa6b-4808-aca1-31ae890ba526.png"},"43c88b20-6428-45d4-9494-3d6f11ca078e":{"name":"en3","sourceUrl":null,"frameSize":{"x":400,"y":360},"frameCount":2,"looping":true,"frameDelay":12,"version":"J7ds_cd43b2RZ6HVXkpUu4wMXdO6b9Sx","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":720},"rootRelativePath":"assets/43c88b20-6428-45d4-9494-3d6f11ca078e.png"},"6ffa20f8-263e-4ab6-83b6-27e3377710b0":{"name":"en4","sourceUrl":null,"frameSize":{"x":400,"y":360},"frameCount":2,"looping":true,"frameDelay":12,"version":"QAMCqdrUV18_6Oh__i4bpSw9IoQE2Hr1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":720},"rootRelativePath":"assets/6ffa20f8-263e-4ab6-83b6-27e3377710b0.png"}}};
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

 var Bg = createSprite(20,90,400,400);
 Bg .setAnimation("space");
 Bg.x=Bg.width/2;
 Bg.scale=2.0;
 Bg.visible=false;
 
 var playerJet=createSprite(200,200,10,100);
 playerJet.setAnimation("playership1");
 playerJet.scale=0.2;
 playerJet.visible=false;
 
 var enemyJet=createSprite(70,100,30,50);
 enemyJet.setAnimation("en2");
 enemyJet.scale=0.2;
 enemyJet.visible=false;
 
 var nick= createSprite(301,204,50,50);
 nick.setAnimation("nick");
 nick.scale=0.4;
 nick.visible=false;
 
 var nico= createSprite(80,204,50,50);
 nico.setAnimation("nico");
 nico.scale=0.4;
 nico.visible=false;
 
 
 
 var sprite = createSprite(270,25,90,20);
 sprite.shapeColor="yellow";
 
  var sprite1 = createSprite(75,25,90,20);
 sprite1.shapeColor="yellow";
 
 var bulletGroup = createGroup();
 var bullet1Group = createGroup();
 
 var gameState = "start";
 
 var score = 0;
 
  var score1 = 0;

function draw() {
  
   if(gameState === "start"){
     background("yellow");
     fill("red");
     textSize(20);
     textFont("algerian");
     text("Hi  welcome to Jet Fighter game!!",30,45);
     textSize(18);
     fill("Blue");
     textFont("cursive");
     text("Player 1 should use the arrow keys",33,104);
     text("to move the jet. ",33,126);
     text("Player 2 should use w,s,d,a for up,down",33,165);
     text("right & left respectively ,to move the jet.",33,187);
     text("Player 1 should use space key to fire.",33,225);
      text("Player 2 should use z key to fire.",33,260);
      fill("purple");
      textSize(20);
      textFont("Algerian");
       text("Press c to start.",100,330);
      
     
     if(keyDown("c")){
       gameState = "start1";
     }
     sprite.visible=false;
     sprite1.visible=false;
   }
  if(gameState === "start1"){
  background("yellow");
  textSize(30);
  fill("black");
  textFont("cursive");
  text("Choose Character",80,75);
  fill("darkblue");
  text("Player 1",258,311);
    text("Press p",258,111);
  fill("darkgreen");
  text("Player 2 ",33,311);
   text("Press o ",33,111);
  fill("red");
  textSize(20);
  text("Note: both players can shoot when they ",5,360);
  text("are moving.",65,390);
  nick.visible=true;
  nico.visible=true;
  
  if(mousePressedOver(nick)||mousePressedOver(nico)||keyDown("p")||keyDown("o")){
    gameState = "play";
  }
}
else if(gameState ==="play"){
  nick.visible=false;
  nico.visible=false;
  Bg.visible=true;
  playerJet.visible=true;
  enemyJet.visible=true;
  sprite.visible=false;
   sprite1.visible=false;
  
  createEdgeSprites();
  
  enemyJet.bounceOff(edges);
 
  playerJet.bounceOff(edges);
  playerJet.velocityY=0;
  playerJet.velocityX=0;
  
  Bg.velocityX=-4;
   if(Bg.x<0){
     Bg.x=Bg.width/2;
  }
  
  
  Bg.velocityY=-4;
  if(Bg.y<0){
     Bg.y=Bg.height/2;
  }
 

  
 //-----------------------Player1---------------------------
  
  if(keyDown("up")){
    playerJet.velocityX=0;
    playerJet.velocityY=-3;
    Bg.velocityY=-4;
    
    playerJet.setAnimation("playership13");
  }
  if(keyDown("down")){
    playerJet.velocityX=0;
    playerJet.velocityY=3;
    Bg.velocityY=4;
  
    playerJet.setAnimation("playership12");
  }
  if(keyDown("right")){
    playerJet.velocityX=3;
    playerJet.velocityY=0;
    Bg.velocityX=4;
 
    playerJet.setAnimation("playership11");
  }
  if(keyDown("left")){
    playerJet.velocityX=-3;
    playerJet.velocityY=0;
    Bg.velocityX=-4;
   
    playerJet.setAnimation("playership1");
  
  }
   //------------------------Player2-------------------
   
   enemyJet.velocityX=0;
   enemyJet.velocityY=0;
   
  if(keyDown("w")){
    enemyJet.velocityX=0;
    enemyJet.velocityY=-3;
    
    
    enemyJet.setAnimation("en3");
  }
  if(keyDown("s")){
    enemyJet.velocityX=0;
    enemyJet.velocityY=3;
   
  
    enemyJet.setAnimation("en4");
  }
  if(keyDown("d")){
    enemyJet.velocityX=3;
    enemyJet.velocityY=0;
   
 
    enemyJet.setAnimation("en2");
  }
  if(keyDown("a")){
    enemyJet.velocityX=-3;
    enemyJet.velocityY=0;
   
   
   enemyJet.setAnimation("en1");
  
  }
  if(keyDown("space")){
   bullet();
   
  }
  if(keyDown("z")){
   bullet1();
   
  }
 
  if(bulletGroup.isTouching(enemyJet)){
    score=score+1;
    bulletGroup.destroyEach();
  }
   if(bullet1Group.isTouching(playerJet)){
    score1=score1+1;
    bullet1Group.destroyEach();
     
}

   if(score===5||score1===5){
     Bg.setAnimation("space1");
   }
   
   if(score===10||score1===10){
     Bg.setAnimation("space2");
   }
   
   if(score===20||score1===20){
     Bg.setAnimation("space");
   }
   
   if(score===30||score1===30){
     Bg.setAnimation("space1");
   }
    
    if(score===40||score1===40){
     Bg.setAnimation("space2");
   }
   
   if(score===50||score1===50){
      gameState = "win";
   }
   
}
else if(gameState === "win"){
     background("darkblue");
     fill("white");
     textSize(30);
     textFont("cursive");
     if(score===50){
     text("WINNER : Player1!!",70,200);
     }
     if(score1===50){
     text("WINNER : Player2!!",70,200);  
     }
     playerJet.visible=false;
     enemyJet.visible=false;
}

drawSprites();
fill("yellow");
textSize(20);
textFont("cursive");
text("Player 1 - "+score,226,30);
text("Player 2 - "+score1,62,30);

  
}
function bullet(){
  
if (World.frameCount % 2 === 0){
  
var b=createSprite(0,0,5,5);
b.shapeColor="white";

b.x=playerJet.x;
b.y=playerJet.y;

 if(keyDown("up")){
  b.velocityY=-4;
}
if(keyDown("down")){
  b.velocityY=4;
}
if(keyDown("right")){
  b.velocityX=4;
}
if(keyDown("left")){
  b.velocityX=-4;
}
playSound("assets/category_transition/game_whoosh_3.mp3");


bulletGroup.add(b);
}
}
function bullet1(){
  
if (World.frameCount % 2 === 0){
  
var b1=createSprite(0,0,5,5);
b1.shapeColor="red";

b1.x=enemyJet.x;
b1.y=enemyJet.y;

 if(keyDown("w")){
  b1.velocityY=-4;
}
if(keyDown("s")){
  b1.velocityY=4;
}
if(keyDown("d")){
  b1.velocityX=4;
}
if(keyDown("a")){
  b1.velocityX=-4;
}
playSound("assets/category_explosion/fun_bonus_explode_9.mp3");


bullet1Group.add(b1);
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
