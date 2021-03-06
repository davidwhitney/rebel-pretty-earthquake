import * as PIXI from 'pixi.js'


interface IScene {
  update: () => void  
}

interface IDrawable {
  draw: () => void
}
  
class GameContext {
  
}
  
class SceneRouteTable {  
  public scenes: IScene[];
  public renderers: IDrawable[];
  
  construtor() {
    
  }  
}
  
class Runtime {
  
}
  
class Router {
  public scenes: IScene[];
  constructor() {
    this.scenes = [];
  }
  
  public registerScene(scene: IScene): Router {
    return this;
  }
}
  
class SceneBase {
  constructor() {
    
  }
}

class SplashScreen extends SceneBase implements IScene {
  public update() {
    console.log("Hi");
  }
}


async function loadPromise(loader) {
  return new Promise((resolve, reject) => loader.load((loader, resources) => resolve(resources)));
}

async function init() {

  var app = new PIXI.Application({ width: 640, height: 360 });
  document.body.appendChild(app.view);

  app.loader.add("far", "https://cdn.glitch.com/80146c7e-c8f9-483d-a85c-39f2fc095273%2Fbg-far.png?v=1588542214676");
  app.loader.add("near", "https://cdn.glitch.com/80146c7e-c8f9-483d-a85c-39f2fc095273%2Fbg-mid.png?v=1588542216156");  
  const resources = <any>(await loadPromise(app.loader));
  
  const farTexture = resources.far.texture;
  const far = new PIXI.TilingSprite(farTexture, 640, 360);
  far.position.x = 0;
  far.position.y = 0;
  far.tilePosition.x = 0;
  far.tilePosition.y = 0;
  app.stage.addChild(far);

  const midTexture = resources.near.texture;
  const mid = new PIXI.TilingSprite(midTexture, 640, 360);
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