import * as PIXI from 'pixi.js';

const type = PIXI.utils.isWebGLSupported() ? 'WebGL' : 'canvas';

PIXI.utils.sayHello(type);

// http://pixijs.download/release/docs/PIXI.Application.html
const app = new PIXI.Application({
  width: 256,         // default: 800
  height: 256,        // default: 600
  // antialias: true,    // default: false
  // transparent: false, // default: false
  // resolution: 1,      // default: 1
  // forceCanvas: true,  // defualt false
});

document.body.appendChild(app.view);

app.loader
  .add([
    'assets/images/dog.jpg'
  ])
  .load(() => {
    const dog = new PIXI.Sprite(
      app.loader.resources['assets/images/dog.jpg'].texture
    );

    dog.x = 10;
    dog.y = 10;
    dog.width = 50;
    dog.height = 50;
    // dog.scale.x = 0.2;  // width/scale.x会互相覆盖
    // dog.scale.y = 0.2;  // height/scale.y会互相覆盖
    // dog.anchor.x = 0.5; // 锚点会同时影响旋转、缩放
    // dog.anchor.y = 0.5;
    // dog.pivot.x = 30;
    // dog.pivot.y = 30;
    dog.rotation = 0.5

    app.stage.addChild(dog);
  });