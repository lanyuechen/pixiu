import * as PIXI from 'pixi.js';
import { Viewport } from 'pixi-viewport';

import Target from './target';
import { stars } from './stars';
import Particles from './particles';

const WORLD_WIDTH = 2000;
const WORLD_HEIGHT = 2000;

export default class {
  
  constructor() {
    this.app = this.createApp();
    document.body.appendChild(this.app.view);

    this.viewport = this.createViewPort();
    this.app.stage.addChild(this.viewport);

    this.target = new Target(this.viewport);

    stars(this.viewport, 40, 10)
    this.drawViewportBorder();
  }

  start() {
    if (this.viewport.dirty || target.isDirty()) {
      this.target.update();
      this.viewport.dirty = false;
    }
    requestAnimationFrame(() => this.start());
  }

  createApp() {
    const app = new PIXI.Application({
      backgroundAlpha: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      resolution: window.devicePixelRatio,
      antialias: true,
    });
    app.view.style.position = 'fixed';
    app.view.style.width = '100vw';
    app.view.style.height = '100vh';
    app.view.style.top = 0;
    app.view.style.left = 0;
    app.view.style.background = 'rgba(0,0,0,.1)';
    return app;
  }

  createViewPort() {
    const viewport = new Viewport({
      worldWidth: WORLD_WIDTH,
      worldHeight: WORLD_HEIGHT,
    });
    viewport.drag().decelerate().pinch().wheel();
    viewport.fit();
    viewport.moveCenter(WORLD_WIDTH / 2, WORLD_HEIGHT / 2);
    return viewport;
  }

  drawViewportBorder() {
    const line = this.viewport.addChild(new PIXI.Graphics());
    line.lineStyle(10, 0xff0000).drawRect(0, 0, this.viewport.worldWidth, this.viewport.worldHeight);
  }
}