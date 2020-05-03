import * as PIXI from 'pixi.js'

console.log("Hello from client side TypeScript");


var stage = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(stage.view);

const renderer = PIXI.autoDetectRenderer(512, 384,  { view:document.getElementById("game-canvas") });

const farTexture = PIXI.Texture.fromImage("resources/bg-far.png");	
const far = new PIXI.extras.TilingSprite(farTexture, 512, 256);
far.position.x = 0;
far.position.y = 0;
far.tilePosition.x = 0;
far.tilePosition.y = 0;
stage.addChild(far);

const midTexture = PIXI.Texture.fromImage("resources/bg-mid.png");
const mid = new PIXI.extras.TilingSprite(midTexture, 512, 256);
mid.position.x = 0;
mid.position.y = 128;
mid.tilePosition.x = 0;
mid.tilePosition.y = 0;
stage.addChild(mid);

function update() {
  far.tilePosition.x -= 0.128;
  mid.tilePosition.x -= 0.64;

  renderer.render(stage);
  requestAnimationFrame(update);
}

requestAnimationFrame(update);