import * as PIXI from 'pixi.js'

console.log("Hello from client side TypeScript");


var app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);

var circle = new PIXI.Graphics();
circle.beginFill(0x5cafe2);
circle.drawCircle(0, 0, 80);
circle.x = 320;
circle.y = 180;
//app.stage.addChild(circle);


const farTexture = PIXI.Texture.from("https://cdn.glitch.com/80146c7e-c8f9-483d-a85c-39f2fc095273%2Fbg-far.png?v=1588542214676");	
const far = new PIXI.TilingSprite(farTexture, 512, 256);
far.position.x = 0;
far.position.y = 0;
far.tilePosition.x = 0;
far.tilePosition.y = 0;
app.stage.addChild(far);

const midTexture = PIXI.Texture.from("https://cdn.glitch.com/80146c7e-c8f9-483d-a85c-39f2fc095273%2Fbg-mid.png?v=1588542216156");
const mid = new PIXI.TilingSprite(midTexture, 512, 256);
mid.position.x = 0;
mid.position.y = 128;
mid.tilePosition.x = 0;
mid.tilePosition.y = 0;
app.stage.addChild(mid);


function update() {
  far.tilePosition.x -= 0.128;
  mid.tilePosition.x -= 0.64;

  app.renderer.render(app.stage);
  requestAnimationFrame(update);
}

requestAnimationFrame(update);