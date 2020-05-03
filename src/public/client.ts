import * as PIXI from 'pixi.js'

console.log("Hello from client side TypeScript");


async function loadPromise(loader) {
  return new Promise((resolve, reject) => {    
    loader.load((loader, resources) => {
      resolve({ loader, resources });
    });    
  });
}


async function init() {  

  var app = new PIXI.Application({ width: 640, height: 360 });
  document.body.appendChild(app.view);

  app.loader.add("far", "https://cdn.glitch.com/80146c7e-c8f9-483d-a85c-39f2fc095273%2Fbg-far.png?v=1588542214676");
  app.loader.add("near", "https://cdn.glitch.com/80146c7e-c8f9-483d-a85c-39f2fc095273%2Fbg-mid.png?v=1588542216156");
  
  const { loader, resources } = <any>(await loadPromise(app.loader));
  
  const farTexture = resources.far.texture;
  const far = new PIXI.TilingSprite(farTexture, 512, 256);
  far.position.x = 0;
  far.position.y = 0;
  far.tilePosition.x = 0;
  far.tilePosition.y = 0;
  app.stage.addChild(far);

  const midTexture = resources.near.texture;
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
}

init();